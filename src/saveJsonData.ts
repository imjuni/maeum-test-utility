import fastSafeStringify from 'fast-safe-stringify';
import fs from 'node:fs';
import path from 'node:path';

export async function saveJsonData<T = unknown>(data: T, ...filePaths: string[]): Promise<void> {
  const filePath = path.join(...filePaths);
  await fs.promises.writeFile(filePath, fastSafeStringify(data, undefined, 2));
}

export function saveJsonDataSync<T = unknown>(data: T, ...filePaths: string[]): void {
  const filePath = path.join(...filePaths);
  fs.writeFileSync(filePath, fastSafeStringify(data, undefined, 2));
}
