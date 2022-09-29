import { vrgs } from '../index.js';

/**
 * Simple test script for Yvrgs
 */
const test = async (run, name, id) => {
  if (run) console.log('Run!');
  if (name === 'Chris') console.log('Hello Chris');
  if (id < 20) console.log('Less than 20');
};

(async () => {
  await test(vrgs.run, vrgs.name, vrgs.id);
  process.exit(0);
})();
