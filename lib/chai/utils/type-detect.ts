/**
 * @param {unknown} obj
 * @returns {string}
 */
export function type(obj: unknown): string {
  if (typeof obj === 'undefined') {
    return 'undefined';
  }

  if (obj === null) {
    return 'null';
  }

  const stringTag = obj[Symbol.toStringTag as keyof typeof obj];
  if (typeof stringTag === 'string') {
    console.log(stringTag)
    return stringTag;
  }
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  return type;
}
