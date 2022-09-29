import { parseArgs } from "./helpers.js";

class Yvrgs {
  static vrgs = parseArgs(process.argv);
}

export const { vrgs } = Yvrgs;