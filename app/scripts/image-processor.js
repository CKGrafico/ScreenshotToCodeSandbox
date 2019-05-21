import worker from 'tesseract.js';
import { bus, BusEvent } from './bus';
import { templateString, emptyArray } from './post-processors';

const postProcessors = [
  templateString,
  emptyArray
];

function postProcessCode(code) {
  postProcessors.forEach(x => (code = x(code)));

  return code;
}

export function processImage(image) {
  bus.emit(BusEvent.HideResults);
  bus.emit(BusEvent.ShowLoading);

  worker
    .recognize(image)
    .then(result => {
      const processedCode = postProcessCode(result.text);

      bus.emit(BusEvent.ImageProcessed, null, processedCode);
    });
}
