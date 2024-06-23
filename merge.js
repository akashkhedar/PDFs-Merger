const PDFMerger = require('pdf-merger-js');
const fs = require("fs");
const path = require("path");

const mergePDF = async(filePaths) => {
  const merger = new PDFMerger();
  for(const filePath of filePaths){
    await merger.add(filePath)
  }

  const mergredPDFPath = path.join(__dirname, 'public', 'Merged.pdf')
  await merger.save(mergredPDFPath);
  return mergredPDFPath;
}

module.exports = {
  mergePDF
};