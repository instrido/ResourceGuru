import {getFlattenedArray} from '../src/flatten';

test('getFlattenedArray function', () => {
  expect(getFlattenedArray([1, [2, [3]], 4])).toEqual([1, 2, 3, 4]);
  expect(getFlattenedArray([1, [2, [3]], 4, [5, [6]]])).toEqual([
    1, 2, 3, 4, 5, 6,
  ]);
});
