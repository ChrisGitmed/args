export const parseArgs = (rawArgs) => {
  const args = rawArgs.slice(2);
  const cleanArgs = {};

  args.forEach((arg) => {
    // Confirm the arg starts with '--'
    const valid = /^--\w/.test(arg);
    if (valid) {
      const [key, value] = arg.split('=');

      // Disregard opening '--' for key name
      const cleanKey = key.slice(2);

      // If value has been provided, use it, else default value to true
      cleanArgs[cleanKey] = value || true;
    }
  })
  return cleanArgs;
}
