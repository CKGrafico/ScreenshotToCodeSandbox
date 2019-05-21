import worker from 'tesseract.js';
import { bus, BusEvent } from './bus';

function processCode(code) {
  // TODO: Process the result to improve it
  return code;
}

export function processImage(image) {
  bus.emit(BusEvent.HideResults);
  bus.emit(BusEvent.ShowLoading);

  worker
    .recognize(image)
    .then(result => {
      const processedCode = processCode(result.text);

      bus.emit(BusEvent.ImageProcessed, null, processedCode);
    });
}
