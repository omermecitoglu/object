import { Prettify } from "../types/prettify";

/**
 * Creates a new object by omitting specific properties from the given object.
 * 
 * @param object The source object from which properties will be omitted.
 * @param keys The list of keys to omit from the source object.
 * @returns A new object containing all properties except the omitted ones, with the types preserved.
 */
export function omit<T extends object, K extends keyof T>(object: T, ...keys: K[]): Prettify<Omit<T, K>> {
  const entries = Object.entries(object).filter(([key]) => !keys.includes(key as K))
  return Object.fromEntries(entries) as Prettify<Omit<T, K>>;
}
