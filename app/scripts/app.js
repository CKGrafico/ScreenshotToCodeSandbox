import { createFilePicker } from './file-picker';
import { processImage } from './image-processor';
import { generateSandbox } from './sandbox';

const $container = document.querySelector('.js-app');
createFilePicker($container, image => {
  processImage(image, code => {
    generateSandbox(code, url => {
      window.open(url, '_blank');
    });
  });
});
