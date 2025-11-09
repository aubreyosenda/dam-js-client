import {
  DAMError,
  AuthenticationError,
  ValidationError,
  NotFoundError,
  RateLimitError,
  NetworkError
} from './errors.js';

export class DAMClient {
  constructor(config) {
    if (!config || !config.apiUrl || !config.keyId || !config.keySecret) {
      throw new ValidationError('Missing required configuration: apiUrl, keyId, and keySecret are required');
    }

    this.apiUrl = config.apiUrl.replace(/\/$/, '');
    this.keyId = config.keyId;
    this.keySecret = config.keySecret;
    this.baseUrl = `${this.apiUrl}/api`;
    this.timeout = config.timeout || 30000;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'X-API-Key-ID': this.keyId,
      'X-API-Key-Secret': this.keySecret,
      ...options.headers,
    };

    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const fetchOptions = {
        method: options.method || 'GET',
        headers,
        signal: controller.signal,
        ...options,
      };

      if (options.body && !(options.body instanceof FormData)) {
        fetchOptions.body = JSON.stringify(options.body);
      }

      const response = await fetch(url, fetchOptions);
      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        switch (response.status) {
          case 401:
            throw new AuthenticationError(data.message || 'Invalid API credentials');
          case 404:
            throw new NotFoundError(data.message || 'Resource not found');
          case 429:
            throw new RateLimitError(data.message || 'Rate limit exceeded');
          case 400:
            throw new ValidationError(data.message || 'Validation failed', data.errors);
          default:
            throw new DAMError(data.message || `Request failed with status ${response.status}`, 'API_ERROR');
        }
      }

      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new DAMError('Request timeout', 'TIMEOUT');
      }
      if (error instanceof DAMError) {
        throw error;
      }
      throw new NetworkError(error.message);
    }
  }

  // ==================== PUBLIC UPLOAD METHODS ====================

  /**
   * Upload single file
   * @param {File} file - The file to upload
   * @param {Object} options - Upload options
   * @returns {Promise} Upload result
   */
  async uploadFile(file, options = {}) {
    if (!file || !(file instanceof File)) {
      throw new ValidationError('File must be a valid File object');
    }

    const formData = new FormData();
    formData.append('file', file);

    if (options.folderId) {
      formData.append('folder_id', options.folderId);
    }

    if (options.metadata) {
      formData.append('metadata', JSON.stringify(options.metadata));
    }

    return this.request('/public/single', {
      method: 'POST',
      body: formData,
    });
  }

  /**
   * Upload multiple files
   * @param {File[]} files - Array of files to upload
   * @param {Object} options - Upload options
   * @returns {Promise} Upload result
   */
  async uploadMultipleFiles(files, options = {}) {
    if (!files || !Array.isArray(files) || files.length === 0) {
      throw new ValidationError('Files must be a non-empty array');
    }

    const formData = new FormData();
    
    files.forEach(file => {
      if (!(file instanceof File)) {
        throw new ValidationError('All items must be valid File objects');
      }
      formData.append('files', file);
    });

    if (options.folderId) {
      formData.append('folder_id', options.folderId);
    }

    if (options.metadata) {
      formData.append('metadata', JSON.stringify(options.metadata));
    }

    return this.request('/public/multiple', {
      method: 'POST',
      body: formData,
    });
  }

  /**
   * Upload file with progress tracking
   * @param {File} file - The file to upload
   * @param {Object} options - Upload options
   * @param {Function} onProgress - Progress callback
   * @returns {Promise} Upload result
   */
  async uploadFileWithProgress(file, options = {}, onProgress = null) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = `${this.baseUrl}/public/single`;

      // Progress tracking
      if (onProgress && typeof onProgress === 'function') {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const percent = Math.round((e.loaded / e.total) * 100);
            onProgress(percent, e.loaded, e.total);
          }
        });
      }

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch (err) {
            reject(new ValidationError('Invalid JSON response'));
          }
        } else {
          try {
            const error = JSON.parse(xhr.responseText);
            reject(new DAMError(error.message || 'Upload failed', 'UPLOAD_ERROR'));
          } catch {
            reject(new DAMError(`Upload failed with status ${xhr.status}`, 'UPLOAD_ERROR'));
          }
        }
      });

      xhr.addEventListener('error', () => {
        reject(new NetworkError('Network error during upload'));
      });

      xhr.open('POST', url);
      xhr.setRequestHeader('X-API-Key-ID', this.keyId);
      xhr.setRequestHeader('X-API-Key-Secret', this.keySecret);

      const formData = new FormData();
      formData.append('file', file);

      if (options.folderId) {
        formData.append('folder_id', options.folderId);
      }

      if (options.metadata) {
        formData.append('metadata', JSON.stringify(options.metadata));
      }

      xhr.send(formData);
    });
  }

  // ==================== FILE MANAGEMENT ====================

  /**
   * Get files with optional filtering
   * @param {Object} options - Filter options
   * @returns {Promise} Files list
   */
  async getFiles(options = {}) {
    const params = new URLSearchParams();
    if (options.folderId) params.append('folder_id', options.folderId);
    if (options.mimeType) params.append('mime_type', options.mimeType);
    if (options.search) params.append('search', options.search);
    if (options.limit) params.append('limit', options.limit);
    if (options.offset) params.append('offset', options.offset);

    const query = params.toString();
    return this.request(`/public/files${query ? '?' + query : ''}`);
  }

  /**
   * Get single file by ID
   * @param {string} fileId - File ID
   * @returns {Promise} File data
   */
  async getFile(fileId) {
    if (!fileId) {
      throw new ValidationError('File ID is required');
    }
    return this.request(`/public/files/${fileId}`);
  }

  /**
   * Delete file by ID
   * @param {string} fileId - File ID
   * @returns {Promise} Delete result
   */
  async deleteFile(fileId) {
    if (!fileId) {
      throw new ValidationError('File ID is required');
    }
    return this.request(`/public/files/${fileId}`, {
      method: 'DELETE',
    });
  }

  /**
   * Generate file URL with transformations
   * @param {string} fileId - File ID
   * @param {Object} transformOptions - Transformation options
   * @returns {string} File URL
   */
  getFileUrl(fileId, transformOptions = null) {
    if (!fileId) return null;

    if (!transformOptions) {
      return `${this.apiUrl}/api/transform/${fileId}`;
    }

    const params = new URLSearchParams();
    if (transformOptions.width) params.append('w', transformOptions.width);
    if (transformOptions.height) params.append('h', transformOptions.height);
    if (transformOptions.fit) params.append('fit', transformOptions.fit);
    if (transformOptions.format) params.append('format', transformOptions.format);
    if (transformOptions.quality) params.append('quality', transformOptions.quality);
    if (transformOptions.blur) params.append('blur', transformOptions.blur);
    if (transformOptions.grayscale) params.append('grayscale', 'true');
    if (transformOptions.rotate) params.append('rotate', transformOptions.rotate);

    const query = params.toString();
    return `${this.apiUrl}/api/transform/${fileId}${query ? '?' + query : ''}`;
  }

  // ==================== UTILITY METHODS ====================

  /**
   * Test API connection
   * @returns {Promise} Connection test result
   */
  async testConnection() {
    try {
      const result = await this.request('/health');
      return {
        success: true,
        message: 'Connection successful',
        data: result
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error
      };
    }
  }

  /**
   * Get API information
   * @returns {Promise} API info
   */
  async getApiInfo() {
    return this.request('/');
  }
}

export default DAMClient;