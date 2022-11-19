import { Keys } from '../constants';

const getGreenMessage = (msg: string): string => `\x1b[32m${msg}\x1b[0m`;
const getRedMessage = (msg: string): string => `\x1b[31m${msg}\x1b[0m`;
const getYellowMessage = (msg: string): string => `\x1b[33m${msg}\x1b[0m`;

export const successLog = (message: string): void => {
  console.log(`${getGreenMessage('SUCCESS:')} ${message}`);
};

export const errorLog = (message: string): void => {
  console.log(`${getRedMessage('ERROR:')} ${message}`);
};

export const infoLog = (): void => {
  console.log(`
    ${getYellowMessage('Info:')}
    -${Keys.TOKEN_KEY}: токен для чего-то там;
    -${Keys.CITY_KEY}: город;
  `);
};
