// fs - Works with file system. Manage file and folders.
// There is no need to install fs package. It is installed by default.

// const fs = require('fs');
const fs = require('fs/promises');

// Write to a file
// Callback Version - For this use, const fs = require('fs')
fs.writeFile('file1.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File 1 Created!');
});

// Promise Version - For this use, const fs = require('fs/promises')
fs.writeFile('file2.txt', 'Hello World!')
  .then(() => console.log('File 2 Created!'))
  .catch((err) => console.log(err));

// Sync Version - For this use, const fs = require('fs')
fs.writeFileSync('file3.txt', 'Hello World');
console.log('File 3 Created!');

// Async/Await
async function createFile(fileName, content) {
  try {
    await fs.writeFile(fileName, content);
    console.log(`File ${fileName} created!`);
  } catch (err) {
    console.log(err);
  }
}

// Read from a file
async function readFile(fileName) {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    console.log(`${fileName} is read.`);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// Delete a file
async function deleteFile(fileName) {
  try {
    await fs.unlink(fileName);
    console.log(`File ${fileName} deleted!`);
  } catch (err) {
    console.log(err);
  }
}

// Rename a file
async function renameFile(oldFileName, newFileName) {
  try {
    await fs.rename(oldFileName, newFileName);
    console.log(`File ${oldFileName} renamed to ${newFileName}!`);
  } catch (err) {
    console.log(err);
  }
}

// Create a folder
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${folderName} created!`);
  } catch (err) {
    console.log(err);
  }
}
