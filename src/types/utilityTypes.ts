export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;
export type Require<T> = T extends null | undefined ? never : T;
export type NonNullableArray<T> = Array<Require<T>>;