/**
 * Description: Tempalte string quotes are wrong
 * Input: const a = `1`;
 * Output: const a = ‘1‘;
 */
export function templateString(code) {
  return code.replace(/‘/g, '`');
}
