// Part 1 – Flattening an array
export const getFlattenedArray = <T>(nestedArray: unknown): T[] => {
  if (!Array.isArray(nestedArray)) {
    throw new TypeError('Parameter is not an array.');
  }

  let flattenedArray: T[] = [];
  for (const element of nestedArray as T[]) {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(getFlattenedArray(element));
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};
