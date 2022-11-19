import { join } from 'path';
import { homedir } from 'os';
import { writeFile, access, readFile } from 'fs/promises';
import { FileWritingMode, FsData } from '../types';

const filePath = join(homedir(), 'weather.json');

const overwriteFile = async (data: FsData): Promise<void> => writeFile(filePath, JSON.stringify(data));

const appendToFile = async (data: FsData): Promise<void> => {
  try {
    await access(filePath);

    const content = (await readFile(filePath)).toString();

    if (!content && typeof JSON.parse(content) !== 'object') {
      return overwriteFile(data);
    }

    return overwriteFile({
      ...JSON.parse(content),
      ...data,
    });
  } catch {
    return overwriteFile(data);
  }
};

export const writeToFile = async (data: FsData, mode: FileWritingMode = FileWritingMode.OVERWRITING_MODE): Promise<void> => {
  switch (mode) {
    case FileWritingMode.APPEND_MODE:
      return appendToFile(data);
    case FileWritingMode.OVERWRITING_MODE:
    default:
      return overwriteFile(data);
  }
};
