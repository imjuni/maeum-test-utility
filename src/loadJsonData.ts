import fs from 'fs';
import { parse } from 'jsonc-parser';
import path from 'node:path';

export async function loadJsonData<T = unknown>(...filePaths: string[]): Promise<T> {
  const filePath = path.join(...filePaths);
  const buf = await fs.promises.readFile(filePath);
  const parsed = parse(buf.toString()) as T;
  return parsed;
}

export async function loadJsonDataSync<T = unknown>(...filePaths: string[]): Promise<T> {
  const filePath = path.join(...filePaths);
  const buf = fs.readFileSync(filePath);
  const parsed = parse(buf.toString()) as T;
  return parsed;
}
