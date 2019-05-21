import * as FilePond from 'filepond';
import { bus, BusEvent } from './bus';


export function createFilePicker($container) {
  const file = FilePond.create({
    multiple: true,
    name: 'file'
  });

  $container.appendChild(file.element);

  $container.querySelector('.filepond--root').addEventListener('FilePond:addfile', () => {
    bus.emit(BusEvent.FileAdded, null, file.getFile().file);
  });
}
