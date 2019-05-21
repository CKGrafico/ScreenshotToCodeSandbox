import { getParameters } from 'codesandbox/lib/api/define';
// import { js } from 'js-beautify';

export function generateSandbox(code, callback) {
  const parameters = getParameters({
    files: {
      'index.js': {
        content: code
      },
      'package.json': {
        content: { dependencies: {} }
      }
    }
  });

  callback(`https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`);
}
