import { errorLog, infoLog, successLog } from './services/log.service';
import { getArgs } from './helpers/args';

const main = (): void => {
  const args = getArgs(process.argv);

  if (args.t) {
    successLog(String(args.t));
  }

  if (args.e) {
    errorLog(String(args.e));
  }

  if (args.d) {
    infoLog(String(args.d));
  }
};

main();
