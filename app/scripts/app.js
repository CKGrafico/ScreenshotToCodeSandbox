import { createFilePicker } from './file-picker';
import { processImage } from './image-processor';
import { generateSandbox } from './sandbox';
import { bus, BusEvent } from './bus';

const $picker = document.querySelector('.js-picker');
const $result = document.querySelector('.js-result');
const $link = document.querySelector('.js-link');
const $loading = document.querySelector('.js-loading');

const HIDDEN_CLASS = 'is-hidden';

bus.on(BusEvent.ShowLoading, () => $loading.classList.remove(HIDDEN_CLASS));
bus.on(BusEvent.HideLoading, () => $loading.classList.add(HIDDEN_CLASS));
bus.on(BusEvent.ShowResults, () => $result.classList.remove(HIDDEN_CLASS));
bus.on(BusEvent.HideResults, () => $result.classList.add(HIDDEN_CLASS));

createFilePicker($picker);
bus.on(BusEvent.FileAdded, processImage);
bus.on(BusEvent.ImageProcessed, generateSandbox);
bus.on(BusEvent.LinkGenerated, url => {
  $link.href = url;
  bus.emit(BusEvent.ShowResults);
  bus.emit(BusEvent.HideLoading);
});
