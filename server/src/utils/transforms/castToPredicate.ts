
type StatePredicate<T,U> = (item: T) => item is U extends T ? U : never;

export const castToPredicate = <T, U>(
  collection: T[],
  predicate: StatePredicate<T, U>
): U[] => collection.filter(predicate);
