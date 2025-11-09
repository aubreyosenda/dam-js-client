/**
 * Complete JavaScript SDK Usage Examples
 * Demonstrates all major features of the DAM JavaScript SDK
 */

//import { DAMClient } from 'dam-js-sdk';
import { DAMClient } from '../src/index.js';


// ==================== CONFIGURATION ====================

const client = new DAMClient({
  apiUrl: 'http://localhost:55055',
  keyId: 'your-key-id-here',
  keySecret: 'your-key-secret-here',
  timeout: 30000,
  retries: 3
});

// ==================== EXAMPLE 1: UPLOAD FILES ====================

async function example1_uploadFiles() {
  console.log('\n=== Example 1: Upload Files ===\n');

  // Upload single file with progress
  const fileInput = document.querySelector('#fileInput');
  const file = fileInput.files[0];

  try {
    const uploadedFile = await client.upload(file, {
      folderId: 'my-folder-id',
      metadata: {
        category: 'product',
        tags: ['featured', 'new']
      },
      onProgress: (percent) => {
        console.log(`Upload progress: ${percent}%`);
        // Update your UI progress bar here
      }
    });

    console.log('File uploaded successfully:', uploadedFile);
    console.log('File ID:', uploadedFile.id);
    console.log('File URL:', uploadedFile.public_url);
  } catch (error) {
    console.error('Upload failed:', error.message);
  }
}

// ==================== EXAMPLE 2: BATCH UPLOAD ====================

async function example2_batchUpload() {
  console.log('\n=== Example 2: Batch Upload ===\n');

  const fileInput = document.querySelector('#multipleFiles');
  const files = Array.from(fileInput.files);

  try {
    const results = await client.uploadMultiple(files, {
      folderId: 'my-folder-id'
    });

    console.log(`Upload complete: ${results.counts.success}/${results.counts.total} files uploaded`);
    
    results.uploaded.forEach(file => {
      console.log(`✓ ${file.original_name}`);
    });

    results.failed.forEach(failure => {
      console.log(`✗ ${failure.filename}: ${failure.error}`);
    });
  } catch (error) {
    console.error('Batch upload failed:', error.message);
  }
}

// ==================== EXAMPLE 3: IMAGE GALLERY ====================

async function example3_imageGallery() {
  console.log('\n=== Example 3: Image Gallery ===\n');

  try {
    // Fetch images from a folder
    const { files, pagination } = await client.listFiles({
      folderId: 'gallery-folder-id',
      mimeType: 'image/*',
      limit: 20,
      offset: 0
    });

    console.log(`Found ${pagination.total} images`);

    // Create gallery HTML
    const gallery = document.querySelector('#gallery');
    gallery.innerHTML = '';

    files.forEach(file => {
      // Generate different sizes for responsive images
      const thumbnail = client.getTransformUrl(file.id, {
        width: 300,
        height: 300,
        fit: 'cover',
        format: 'webp',
        quality: 80
      });

      const fullSize = client.getTransformUrl(file.id, {
        width: 1200,
        format: 'webp',
        quality: 90
      });

      // Create image card
      const card = document.createElement('div');
      card.className = 'image-card';
      card.innerHTML = `
        <img 
          src="${thumbnail}" 
          alt="${file.original_name}"
          loading="lazy"
          onclick="viewFullSize('${fullSize}')"
        />
        <div class="info">
          <h3>${file.original_name}</h3>
          <p>${file.size_formatted}</p>
        </div>
      `;
      
      gallery.appendChild(card);
    });
  } catch (error) {
    console.error('Failed to load gallery:', error.message);
  }
}

// ==================== EXAMPLE 4: FILE MANAGEMENT ====================

async function example4_fileManagement() {
  console.log('\n=== Example 4: File Management ===\n');

  const fileId = 'your-file-id';

  try {
    // Get file details
    const file = await client.getFile(fileId);
    console.log('File details:', file);

    // Update file metadata
    const updated = await client.updateFile(fileId, {
      originalName: 'renamed-file.jpg',
      metadata: {
        ...file.metadata,
        edited: true,
        lastModified: new Date().toISOString()
      },
      isPublic: true
    });
    console.log('File updated:', updated);

    // Add tags
    await client.addTag(fileId, 'important');
    await client.addTag(fileId, 'reviewed');
    console.log('Tags added');

    // Move file to another folder
    await client.moveFile(fileId, 'target-folder-id');
    console.log('File moved');

    // Delete file (uncomment to actually delete)
    // await client.deleteFile(fileId);
    // console.log('File deleted');
  } catch (error) {
    console.error('File management failed:', error.message);
  }
}

// ==================== EXAMPLE 5: FOLDER OPERATIONS ====================

async function example5_folderOperations() {
  console.log('\n=== Example 5: Folder Operations ===\n');

  try {
    // Create new folder
    const newFolder = await client.createFolder('Projects', {
      parentFolderId: null, // Root level
      description: 'Client project files',
      color: '#3498db'
    });
    console.log('Folder created:', newFolder);

    // List all root folders
    const rootFolders = await client.listFolders({
      parentId: null
    });
    console.log('Root folders:', rootFolders.length);

    // Get folder details with stats
    const folderDetails = await client.getFolder(newFolder.id);
    console.log('Folder stats:', folderDetails.stats);
    console.log('- Files:', folderDetails.stats.fileCount);
    console.log('- Size:', folderDetails.stats.totalSizeFormatted);
    console.log('- Subfolders:', folderDetails.stats.folderCount);

    // Get folder tree structure
    const tree = await client.getFolderTree(newFolder.id);
    console.log('Folder tree:', tree);

    // Update folder
    await client.updateFolder(newFolder.id, {
      name: 'Client Projects',
      color: '#2ecc71'
    });
    console.log('Folder updated');
  } catch (error) {
    console.error('Folder operations failed:', error.message);
  }
}

// ==================== EXAMPLE 6: IMAGE TRANSFORMATIONS ====================

async function example6_imageTransformations() {
  console.log('\n=== Example 6: Image Transformations ===\n');

  const fileId = 'your-image-id';

  // Original image
  const originalUrl = client.getFileUrl(fileId);
  console.log('Original:', originalUrl);

  // Thumbnail
  const thumbnail = client.getTransformUrl(fileId, {
    width: 150,
    height: 150,
    fit: 'cover',
    format: 'webp'
  });
  console.log('Thumbnail:', thumbnail);

  // Medium size
  const medium = client.getTransformUrl(fileId, {
    width: 800,
    format: 'webp',
    quality: 85
  });
  console.log('Medium:', medium);

  // High quality
  const highQuality = client.getTransformUrl(fileId, {
    width: 1920,
    format: 'jpeg',
    quality: 95
  });
  console.log('High quality:', highQuality);

  // Grayscale thumbnail
  const grayscale = client.getTransformUrl(fileId, {
    width: 300,
    grayscale: true,
    format: 'webp'
  });
  console.log('Grayscale:', grayscale);

  // Blurred background
  const blurred = client.getTransformUrl(fileId, {
    width: 1200,
    blur: 20,
    format: 'webp'
  });
  console.log('Blurred:', blurred);

  // Rotated
  const rotated = client.getTransformUrl(fileId, {
    rotate: 90,
    format: 'webp'
  });
  console.log('Rotated:', rotated);

  // Create responsive image HTML
  const responsiveImage = `
    <picture>
      <source 
        media="(max-width: 640px)" 
        srcset="${client.getTransformUrl(fileId, { width: 640, format: 'webp' })}"
      />
      <source 
        media="(max-width: 1024px)" 
        srcset="${client.getTransformUrl(fileId, { width: 1024, format: 'webp' })}"
      />
      <source 
        media="(min-width: 1025px)" 
        srcset="${client.getTransformUrl(fileId, { width: 1920, format: 'webp' })}"
      />
      <img 
        src="${client.getFileUrl(fileId)}" 
        alt="Responsive image"
        loading="lazy"
      />
    </picture>
  `;
  console.log('Responsive image HTML:', responsiveImage);
}

// ==================== EXAMPLE 7: SEARCH AND FILTER ====================

async function example7_searchAndFilter() {
  console.log('\n=== Example 7: Search and Filter ===\n');

  try {
    // Search for files
    const { files: searchResults } = await client.listFiles({
      search: 'product',
      mimeType: 'image/*',
      limit: 10
    });
    console.log(`Found ${searchResults.length} matching files`);

    // Filter by folder
    const { files: folderFiles } = await client.listFiles({
      folderId: 'specific-folder-id',
      sort: 'size',
      order: 'desc'
    });
    console.log('Files in folder:', folderFiles.length);

    // Get images only
    const { files: images } = await client.listFiles({
      mimeType: 'image/*'
    });
    console.log('Total images:', images.length);

    // Get videos only
    const { files: videos } = await client.listFiles({
      mimeType: 'video/*'
    });
    console.log('Total videos:', videos.length);

    // Paginated results
    const { files: page1, pagination } = await client.listFiles({
      limit: 20,
      offset: 0
    });
    console.log('Page 1:', page1.length, 'Total:', pagination.total);
    console.log('Has more:', pagination.hasMore);
  } catch (error) {
    console.error('Search failed:', error.message);
  }
}

// ==================== EXAMPLE 8: STATISTICS ====================

async function example8_statistics() {
  console.log('\n=== Example 8: Statistics ===\n');

  try {
    // Dashboard stats
    const dashboard = await client.getDashboardStats();
    console.log('Dashboard Stats:');
    console.log('- Files:', dashboard.overview.fileCount);
    console.log('- Folders:', dashboard.overview.folderCount);
    console.log('- Total size:', dashboard.overview.totalSizeFormatted);
    console.log('- Recent files:', dashboard.recentFiles.length);

    // Storage stats
    const storage = await client.getStorageStats();
    console.log('\nStorage Stats:');
    console.log('- Total:', storage.totalSizeFormatted);
    console.log('- Largest files:', storage.largestFiles.length);

    // File stats
    const fileStats = await client.getFileStats({
      period: 'month'
    });
    console.log('\nFile Stats (this month):');
    console.log('- Total files:', fileStats.totalFiles);
    console.log('- Total size:', fileStats.totalSizeFormatted);
    console.log('- File types:', fileStats.fileTypes.length);

    fileStats.fileTypes.forEach(type => {
      console.log(`  - ${type.mimeType}: ${type.count} files (${type.percentage}%)`);
    });
  } catch (error) {
    console.error('Failed to fetch statistics:', error.message);
  }
}

// ==================== EXAMPLE 9: BULK OPERATIONS ====================

async function example9_bulkOperations() {
  console.log('\n=== Example 9: Bulk Operations ===\n');

  try {
    // Get files to process
    const { files } = await client.listFiles({
      folderId: 'temp-folder-id'
    });

    const fileIds = files.map(f => f.id);
    console.log(`Processing ${fileIds.length} files...`);

    // Bulk delete
    const result = await client.deleteFiles(fileIds);
    console.log(`Deleted ${result.deleted} files`);

    // Move multiple files
    for (const id of fileIds) {
      await client.moveFile(id, 'target-folder-id');
    }
    console.log('All files moved');

    // Add tags to multiple files
    for (const id of fileIds) {
      await client.addTag(id, 'processed');
      await client.addTag(id, 'archived');
    }
    console.log('Tags added to all files');
  } catch (error) {
    console.error('Bulk operation failed:', error.message);
  }
}

// ==================== EXAMPLE 10: ERROR HANDLING ====================

async function example10_errorHandling() {
  console.log('\n=== Example 10: Error Handling ===\n');

  try {
    // This will fail if file doesn't exist
    await client.getFile('non-existent-id');
  } catch (error) {
    if (error.statusCode === 404) {
      console.log('File not found');
    } else if (error.statusCode === 401) {
      console.log('Authentication failed - check your API keys');
    } else if (error.statusCode === 403) {
      console.log('Permission denied');
    } else {
      console.error('Unexpected error:', error.message);
    }
  }

  // Handling upload errors
  try {
    const hugeFile = new File(['x'.repeat(200 * 1024 * 1024)], 'huge.txt');
    await client.upload(hugeFile);
  } catch (error) {
    if (error.statusCode === 413) {
      console.log('File too large');
    } else {
      console.error('Upload error:', error.message);
    }
  }
}

// ==================== RUN ALL EXAMPLES ====================

async function runAllExamples() {
  try {
    // Health check first
    const health = await client.healthCheck();
    console.log('API Status:', health.status);
    console.log('API Version:', health.version);

    // Uncomment to run specific examples
    // await example1_uploadFiles();
    // await example2_batchUpload();
    // await example3_imageGallery();
    // await example4_fileManagement();
    // await example5_folderOperations();
    // await example6_imageTransformations();
    // await example7_searchAndFilter();
    // await example8_statistics();
    // await example9_bulkOperations();
    // await example10_errorHandling();

  } catch (error) {
    console.error('Example failed:', error);
  }
}

// Run when DOM is ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', runAllExamples);
} else {
  // Node.js environment
  runAllExamples();
}

export {
  example1_uploadFiles,
  example2_batchUpload,
  example3_imageGallery,
  example4_fileManagement,
  example5_folderOperations,
  example6_imageTransformations,
  example7_searchAndFilter,
  example8_statistics,
  example9_bulkOperations,
  example10_errorHandling
};