import fastSafeStringify from 'fast-safe-stringify';

export default function getExpectValue<T>(
  data: T,
  replacer?: Parameters<typeof fastSafeStringify>[1],
  space?: Parameters<typeof fastSafeStringify>[2],
  option?: Parameters<typeof fastSafeStringify>[3],
) {
  const stringifiedString = fastSafeStringify(
    data,
    replacer != null
      ? replacer
      : (_key: string, value: unknown) => {
          return value === '[Circular]' ? undefined : value;
        },
    space,
    option,
  );

  return JSON.parse(stringifiedString) as T;
}
