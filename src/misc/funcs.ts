import { DataSource } from "./constants";

export function getFieldSource(fieldName: string): string {
  const platformFields = ['color_hex', 'color_name', 'number_plate', 'year'];

  console.log(fieldName);

  if (platformFields.includes(fieldName)) {
    return DataSource.PLATFORM;
  }

  return DataSource.DBPEDIA;
}
