import { getParameters } from 'codesandbox/lib/api/define';
import { bus, BusEvent } from './bus';
// import { js } from 'js-beautify';

export function generateSandbox(code) {
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

  bus.emit(BusEvent.LinkGenerated, null, `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`);
}
