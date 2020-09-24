/* eslint-disable no-underscore-dangle */

import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', 'plain', filename);

test('json', () => {
  const expected = fs.readFileSync(getFixturePath('result')).toString();
  const actual = genDiff(getFixturePath('json-1.json'), getFixturePath('json-2.json'), 'plain');
  expect(actual).toBe(expected);
});

test('border case', () => {
  const expected = fs.readFileSync(getFixturePath('result-border-case')).toString();
  const actual = genDiff(getFixturePath('json-border-case-1.json'), getFixturePath('json-border-case-2.json'), 'plain');
  expect(actual).toBe(expected);
});