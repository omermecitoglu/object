import { Prettify } from "../types/prettify";

/**
 * Creates a new object by picking specific properties from the given object.
 * 
 * @param object The source object from which properties will be picked.
 * @param keys The list of keys to pick from the source object.
 * @returns A new object containing only the picked properties, with the types preserved.
 */
export function pick<T extends object, K extends keyof T>(object: T, ...keys: K[]): Prettify<Pick<T, K>> {
  const entries = Object.entries(object).filter(([key]) => keys.includes(key as K))
  return Object.fromEntries(entries) as Prettify<Pick<T, K>>;
}
