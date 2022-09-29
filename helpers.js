export const parseArgs = (rawArgs) => {
  const args = rawArgs.slice(2);
  const cleanArgs = {};

  args.forEach((arg) => {
    // Confirm the arg starts with '--' // ! BUG: This can be marked as 'valid': 'name--Chris'
    const valid = /(--)\w/.test(arg);
    if (valid) {
      const [key, value] = arg.split('=');

      // Disregard opening '--'
      const cleanKey = key.slice(2);

      // If value has been provided, use it, else default value to true
      cleanArgs[cleanKey] = value ? value : key;
    }
  })
  return cleanArgs;
}
