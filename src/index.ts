import { splitWords, capitalize, lowerFirst } from './utils';
import type { CaseType } from './types';

/**
 * Converts an input string to camelCase.
 * e.g., "hello world" -> "helloWorld"
 * @param input The string to convert.
 * @returns The camelCased string.
 * @throws {TypeError} If input is not a string.
 */
export function toCamelCase(input: string): string {
  if (typeof input !== 'string') throw new TypeError('Input must be a string');
  if (input === '') return '';
  const words = splitWords(input);
  if (words.length === 0) return '';
  return [lowerFirst(words[0]), ...words.slice(1).map(capitalize)].join('');
}

/**
 * Converts an input string to PascalCase (UpperCamelCase).
 * e.g., "hello world" -> "HelloWorld"
 * @param input The string to convert.
 * @returns The PascalCased string.
 * @throws {TypeError} If input is not a string.
 */
export function toPascalCase(input: string): string {
  if (typeof input !== 'string') throw new TypeError('Input must be a string');
  if (input === '') return '';
  const words = splitWords(input);
  if (words.length === 0) return '';
  return words.map(capitalize).join('');
}

/**
 * Converts an input string to snake_case.
 * e.g., "hello world" -> "hello_world"
 * @param input The string to convert.
 * @returns The snake_cased string.
 * @throws {TypeError} If input is not a string.
 */
export function toSnakeCase(input: string): string {
  if (typeof input !== 'string') throw new TypeError('Input must be a string');
  if (input === '') return '';
  const words = splitWords(input);
  if (words.length === 0) return '';
  return words.map((w) => w.toLowerCase()).join('_');
}

/**
 * Converts an input string to kebab-case.
 * e.g., "hello world" -> "hello-world"
 * @param input The string to convert.
 * @returns The kebab-cased string.
 * @throws {TypeError} If input is not a string.
 */
export function toKebabCase(input: string): string {
  if (typeof input !== 'string') throw new TypeError('Input must be a string');
  if (input === '') return '';
  const words = splitWords(input);
  if (words.length === 0) return '';
  return words.map((w) => w.toLowerCase()).join('-');
}

/**
 * Converts an input string to CONSTANT_CASE (SCREAMING_SNAKE_CASE).
 * e.g., "hello world" -> "HELLO_WORLD"
 * @param input The string to convert.
 * @returns The CONSTANT_CASED string.
 * @throws {TypeError} If input is not a string.
 */
export function toConstantCase(input: string): string {
  if (typeof input !== 'string') throw new TypeError('Input must be a string');
  if (input === '') return '';
  const words = splitWords(input);
  if (words.length === 0) return '';
  return words.map((w) => w.toUpperCase()).join('_');
}

export type { CaseType };
