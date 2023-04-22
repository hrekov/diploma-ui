export type CarInfoResult = Array<CarInfoItem>;

export type RecognizedData = [string, string | number][] | null;

export interface CarInfoItem {
  name: string,
  value: string | number,
  dataSource: string,
}
