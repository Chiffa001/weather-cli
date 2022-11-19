export interface FsData {
  [key: string]: string | number
}

export enum FileWritingMode {
  APPEND_MODE,
  OVERWRITING_MODE,
}
