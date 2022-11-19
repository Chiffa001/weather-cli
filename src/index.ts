import { errorLog, infoLog, successLog } from './services/log.service';
import { getArgs } from './helpers/args';
import { Keys } from './constants';
import { writeToFile } from './services/fs.service';
import { FileWritingMode } from './types';

const main = (): void => {
  const args = getArgs(process.argv);

  (async () => {
    await writeToFile({
      token: '123',
    });

    await writeToFile({
      append: '321',
    }, FileWritingMode.APPEND_MODE);

    await writeToFile({
      append: '3214',
    }, FileWritingMode.APPEND_MODE);

    if (args[Keys.CITY_KEY]) {
      successLog(String(args[Keys.CITY_KEY]));
    }

    if (args[Keys.TOKEN_KEY]) {
      errorLog(String(args[Keys.TOKEN_KEY]));
    }

    if (args[Keys.HELP_KEY]) {
      infoLog();
    }
  })();
};

main();
