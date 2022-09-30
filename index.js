import { parseArgs } from "./helpers.js";

class DarkArgs {
  static vrgs = parseArgs(process.argv);
}

export const { vrgs } = DarkArgs;
