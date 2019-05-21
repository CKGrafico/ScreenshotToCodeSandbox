/**
 * Description: When the code have an empty array returns [1;
 * Input: const a = [];
 * Output: const a = [1;
 */
export function emptyArray(code) {

  return code.replace(/\[1;/g, '[];');
}
