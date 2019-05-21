import { createFilePicker } from './file-picker';
import { processImage } from './image-processor';
import { generateSandbox } from './sandbox';

const $pickerContainer = document.querySelector('.js-picker');

createFilePicker($pickerContainer, image => {
  processImage(image, code => {
    generateSandbox(code, url => {
      window.open(url, '_blank');
    });
  });
});
