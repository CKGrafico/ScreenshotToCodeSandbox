import { getParameters } from 'codesandbox/lib/api/define';


//////////
import worker from 'tesseract.js';
import * as FilePond from 'filepond';

// Create a multi file upload component
const pond = FilePond.create({
  multiple: true,
  name: 'filepond'
});

// Add it to the DOM
document.body.appendChild(pond.element);

const pond2 = document.querySelector('.filepond--root');
pond2.addEventListener('FilePond:addfile', e => {

  const myImage = pond.getFile().file;


  worker
    .recognize(myImage)
    .then(function (result) {
      console.log(result);

      const parameters = getParameters({
        files: {
          'index.js': {
            content: result.text
          },
          'package.json': {
            content: { dependencies: {} }
          }
        }
      });

      const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

      document.body.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
});

