export const parseArgs = (rawArgs) => {
  const args = rawArgs.slice(2);
  const cleanArgs = {};

  args.forEach((arg) => {
    // Confirm the arg starts with '--' // TODO: This can be marked as 'valid': 'name--Chris'
    const valid = /(--)\w/.test(arg);
    if (valid) {
      const [key, value] = arg.split('=');
      const cleanKey = key.slice(2);

      // If value has been provided, use it
      if (value) cleanArgs[cleanKey] = value;

      // If no value is provided, default the key's value to 'true'
      else cleanArgs[cleanKey] = true;
    }
  })
  return cleanArgs;
}
