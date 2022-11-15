export const getArgs = (args: string[]): Record<string, string | boolean> =>
  args.slice(2).reduce<Record<string, string | boolean>>((acc, value, index, array) => {
    if (value.charAt(0) !== '-') {
      return acc;
    }

    if (index === array.length - 1 || array[index + 1].charAt(0) === '-') {
      return { ...acc, [value.slice(1)]: true };
    }

    return { ...acc, [value.slice(1)]: array[index + 1] };
  }, {});
