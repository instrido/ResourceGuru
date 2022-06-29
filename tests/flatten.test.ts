import {getFlattenedArray} from '../src/flatten';

test('getFlattenedArray function', () => {
  expect(getFlattenedArray([1, 2, 3])).toEqual([1, 2, 3]);
  expect(getFlattenedArray([1, [2, [3]], 4])).toEqual([1, 2, 3, 4]);
  expect(getFlattenedArray([1, [2, [3]], 4, [5, [6]]])).toEqual([
    1, 2, 3, 4, 5, 6,
  ]);
  expect(() => getFlattenedArray(1)).toThrow(TypeError);
  expect(() => getFlattenedArray(1)).toThrow('Parameter is not an array.');
  expect(() => getFlattenedArray('')).toThrowError(
    'Parameter is not an array.'
  );
});
