class DarkArgs {
  static argv = (() => {
    const args = process.argv.slice(2);
    const parsedArgs = {};
  
    args.forEach((arg) => {
      // Confirm the arg starts with '--'
      if (/^--\w/.test(arg)) {
        const [key, value] = arg.split('=');
  
        // Disregard opening '--' for key name
        const cleanKey = key.slice(2);
  
        // If value has been provided, use it, else default value to true
        parsedArgs[cleanKey] = value || true;
      }
    })
    return parsedArgs;
  })()
}

export const { argv } = DarkArgs;
