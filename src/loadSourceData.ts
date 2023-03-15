import { get } from 'dot-prop';
import path from 'node:path';

export default async function loadSourceData<T = Record<string, unknown>>(
  module: string,
  ...filePaths: string[]
): Promise<T> {
  const filePath = path.join(...filePaths);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const imported = await import(filePath);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
  return get(imported, module) as T;
}
