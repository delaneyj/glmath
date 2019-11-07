// Common utilities

// Configuration Constants
export const EPSILON = 0.000001;
export const ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
export const RANDOM = Math.random;

export const degree2rad = Math.PI / 180;

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glmath.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
export function approximatelyEquals(a: number, b: number): boolean {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
