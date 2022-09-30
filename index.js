import { parseArgs } from "./helpers.js";

class Vrgs {
  static vrgs = parseArgs(process.argv);
}

export const { vrgs } = Vrgs;
