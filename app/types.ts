export type BencodedValue = number | string | BencodedList | BencodedDictinary;
export type BencodedList = Array<BencodedValue>;
export type BencodedDictinary = {
  [key: string]: BencodedValue,
};