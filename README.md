# dark-args
Pronounced 'args'. A Node.js library to assist in parsing opstrings. Built because I was tired of typing two lines to access args with a popular npm package. vrgs only needs one.

---
#### Usage
###### In Node.js
```
import { vrgs } from '../index.js';

const example = async (run, name, id) => {
  if (run) console.log('Run!');
  if (name === 'Chris') console.log('Hello Chris');
  if (id < 20) console.log('Less than 20');
};

(async () => {
  await test(vrgs.run, vrgs.name, vrgs.id);
  process.exit(0);
})();
```

###### In terminal
```
λ node scripts/test.js --run  --name=Chris  --id=10
  Run!
  Hello Chris
  Less than 20

```
