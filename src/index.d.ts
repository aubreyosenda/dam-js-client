declare module 'dam-js-client' {
  export interface DAMConfig {
    apiUrl: string;
    keyId: string;
    keySecret: string;
    timeout?: number;
  }

  export interface UploadOptions {
    folderId?: string;
    metadata?: Record<string, any>;
  }

  export interface FileListOptions {
    folderId?: string;
    mimeType?: string;
    search?: string;
    limit?: number;
    offset?: number;
  }

  export interface TransformOptions {
    width?: number;
    height?: number;
    fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
    format?: 'jpeg' | 'jpg' | 'png' | 'webp' | 'avif' | 'gif';
    quality?: number;
    blur?: number;
    grayscale?: boolean;
    rotate?: number;
  }

  export interface FileData {
    id: string;
    user_id: string;
    folder_id: string | null;
    filename: string;
    original_name: string;
    mime_type: string;
    size: number;
    storage_path: string;
    metadata: Record<string, any>;
    checksum: string;
    width: number | null;
    height: number | null;
    is_public: boolean;
    download_count: number;
    created_at: string;
    updated_at: string;
    file_url: string;
    is_image: boolean;
    is_video: boolean;
    is_document: boolean;
    extension: string;
    size_formatted: string;
  }

  export interface UploadResult {
    success: boolean;
    message: string;
    data: FileData;
  }

  export interface MultipleUploadResult {
    success: boolean;
    message: string;
    data: {
      uploaded: FileData[];
      failed: Array<{ filename: string; error: string }>;
      counts: {
        total: number;
        success: number;
        failed: number;
      };
    };
  }

  export interface FileListResult {
    success: boolean;
    data: FileData[];
    pagination: {
      total: number;
      limit: number;
      offset: number;
      hasMore: boolean;
    };
  }

  export class DAMError extends Error {
    code: string;
    details: any;
    timestamp: string;
    
    constructor(message: string, code: string, details?: any);
    toString(): string;
    toJSON(): object;
  }

  export class AuthenticationError extends DAMError {}
  export class ValidationError extends DAMError {}
  export class NotFoundError extends DAMError {}
  export class RateLimitError extends DAMError {}
  export class NetworkError extends DAMError {}

  export class DAMClient {
    constructor(config: DAMConfig);
    
    // Upload methods
    uploadFile(file: File, options?: UploadOptions): Promise<UploadResult>;
    uploadMultipleFiles(files: File[], options?: UploadOptions): Promise<MultipleUploadResult>;
    uploadFileWithProgress(file: File, options?: UploadOptions, onProgress?: (percent: number, loaded: number, total: number) => void): Promise<UploadResult>;
    
    // File management
    getFiles(options?: FileListOptions): Promise<FileListResult>;
    getFile(fileId: string): Promise<{ success: boolean; data: FileData }>;
    deleteFile(fileId: string): Promise<{ success: boolean; message: string }>;
    
    // URL generation
    getFileUrl(fileId: string, transformOptions?: TransformOptions): string;
    
    // Utility methods
    testConnection(): Promise<{ success: boolean; message: string; data?: any; error?: DAMError }>;
    getApiInfo(): Promise<any>;
    
    // Internal request method
    request(endpoint: string, options?: any): Promise<any>;
  }

  export const errors: {
    DAMError: typeof DAMError;
    AuthenticationError: typeof AuthenticationError;
    ValidationError: typeof ValidationError;
    NotFoundError: typeof NotFoundError;
    RateLimitError: typeof RateLimitError;
    NetworkError: typeof NetworkError;
  };

  export default DAMClient;
}