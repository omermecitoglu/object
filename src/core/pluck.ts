/**
 * Extracts a specific property from each item in a collection of objects.
 * 
 * @param collection An array of objects from which the property will be extracted.
 * @param key The key of the property to be extracted from each object.
 * @returns An array of values corresponding to the specified key from each object in the collection.
 */
export function pluck<T, K extends keyof T>(collection: T[], key: K) {
  return collection.map(item => item[key]) as T[K][];
}
