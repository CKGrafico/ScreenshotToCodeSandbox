import { createFilePicker } from './file-picker';
import { processImage } from './image-processor';
import { generateSandbox } from './sandbox';

const $picker = document.querySelector('.js-picker');
const $result = document.querySelector('.js-result');
const $link = document.querySelector('.js-link');
const $loading = document.querySelector('.js-loading');

const HIDDEN_CLASS = 'is-hidden';

createFilePicker($picker, image => {
  processImage(image, code => {
    $result.classList.add(HIDDEN_CLASS);
    $loading.classList.remove(HIDDEN_CLASS);

    generateSandbox(code, url => {
      setTimeout(() => {
        $link.href = url;
        $result.classList.remove(HIDDEN_CLASS);
        $loading.classList.add(HIDDEN_CLASS);
      }, 3000);
    });
  });
});
