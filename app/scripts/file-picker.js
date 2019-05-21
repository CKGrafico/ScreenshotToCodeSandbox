import * as FilePond from 'filepond';

export function createFilePicker($container, callback) {
  const file = FilePond.create({
    multiple: true,
    name: 'file'
  });

  $container.appendChild(file.element);

  $container.querySelector('.filepond--root').addEventListener('FilePond:addfile', () => callback(file.getFile().file));
}
