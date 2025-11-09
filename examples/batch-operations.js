//import { DAMClient } from 'dam-js-sdk';
//import { DAMClient } from '../src/index.js';
// examples/batch-operations.js
//const { DAMClient, DAMError } = require('../src/index.js');
import { DAMClient, DAMError } from '../src/index.js';




const client = new DAMClient({
  apiUrl: 'http://localhost:55055',
  keyId: 'your-key-id',
  keySecret: 'your-key-secret'
});

// Batch delete old files
async function deleteOldFiles() {
  const { files } = await client.listFiles({ limit: 1000 });
  const oldFiles = files.filter(f => {
    const age = Date.now() - new Date(f.created_at).getTime();
    return age > 30 * 24 * 60 * 60 * 1000; // 30 days
  });
  
  const ids = oldFiles.map(f => f.id);
  await client.deleteFiles(ids);
  console.log(`Deleted ${ids.length} old files`);
}

// Batch move files
async function moveToArchive() {
  const { files } = await client.listFiles({ folderId: 'temp-folder' });
  for (const file of files) {
    await client.moveFile(file.id, 'archive-folder');
  }
  console.log(`Moved ${files.length} files to archive`);
}

deleteOldFiles();