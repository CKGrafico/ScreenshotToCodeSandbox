import worker from 'tesseract.js';

function processCode(code) {
  return code;
}

export function processImage(image, callback) {
  worker
    .recognize(image)
    .then(result => {
      const processedCode = processCode(result.text);
      callback(processedCode);
    });
}
