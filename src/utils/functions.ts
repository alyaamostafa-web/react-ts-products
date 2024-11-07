/**
 *
 *
 * @param {string} txt - the input text to be sliced.
 * @param {number} [max=50] - the maximum length before tranction.
 * @return {*} the sliced text, with an ellipsis (...) appended if truncated
 */
export function txtslice(txt: string, max: number = 50) {
  if (txt.length > max) return `${txt.slice(0, max)} ...`;
  return txt;
}


//- JSDoc Comment

export function numberWithCommas(x: string): string {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}