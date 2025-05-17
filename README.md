# text-case-converter

[![CI](https://github.com/venkatajanapareddy/text-case-converter/actions/workflows/main.yml/badge.svg?label=CI)](https://github.com/venkatajanapareddy/text-case-converter/actions/workflows/main.yml)
[![npm version](https://img.shields.io/npm/v/text-case-converter.svg)](https://www.npmjs.com/package/text-case-converter)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![minzipped size](https://badgen.net/bundlephobia/minzip/text-case-converter)](https://bundlephobia.com/result?p=text-case-converter)

A modern TypeScript library to convert strings between various case formats (`camelCase`, `PascalCase`, `snake_case`, `kebab-case`, `CONSTANT_CASE`).

---

## ✨ Features

- Convert between `camelCase`, `PascalCase`, `snake_case`, `kebab-case`, and `CONSTANT_CASE`
- Handles acronyms and numbers correctly
- Smart word boundary detection (e.g. `parseJSONData` → `parse_json_data`)
- Zero runtime dependencies
- Fully typed and tree-shakable
- Thoroughly tested with Vitest
- Strict error handling: throws `TypeError` for invalid input
- Modern dev experience: ESLint, Prettier, GitHub Actions, JSDoc
- Dual ESM + CJS build outputs for maximum compatibility
- Clean, minimal API for clarity and consistency

---

## 🚀 Why use `text-case-converter`?

Most string case conversion libraries fall short when it comes to:

- ❌ Incorrect acronym handling (`XMLHttpRequest` → `x_m_l_http_request`)
- ❌ Weak edge-case support for numbers (`getUser2FA` → `get_user2_f_a`)
- ❌ No input validation — silently processes `undefined` or objects
- ❌ Missing or inaccurate TypeScript types
- ❌ Bloated dependencies or lack of tree-shaking support

`text-case-converter` solves these problems:

- ✅ Smart word segmentation and acronym awareness
- ✅ Strict input handling (throws `TypeError`)
- ✅ Predictable, idempotent transformations
- ✅ TypeScript-first design, no need for `@types/...`
- ✅ Lightweight and tree-shakable
- ✅ Fully tested, including edge cases
- ✅ ESM + CJS builds for universal compatibility

---

## 📦 Installation

```sh
npm install text-case-converter
```

---

## 📚 Usage

```ts
import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toConstantCase,
} from 'text-case-converter';

console.log(toCamelCase('hello world')); // "helloWorld"
console.log(toPascalCase('hello world')); // "HelloWorld"
console.log(toSnakeCase('hello world')); // "hello_world"
console.log(toKebabCase('hello world')); // "hello-world"
console.log(toConstantCase('hello world')); // "HELLO_WORLD"

console.log(toCamelCase('XMLHttpRequest')); // "xmlHttpRequest"
console.log(toSnakeCase('myNASAProject')); // "my_nasa_project"
console.log(toConstantCase('parseJSONData')); // "PARSE_JSON_DATA"
```

---

## 🧪 API Reference

### Types

```ts
export type CaseType = 'camelCase' | 'PascalCase' | 'snake_case' | 'kebab-case' | 'CONSTANT_CASE';
```

### Functions

#### `toCamelCase(input: string): string`

Converts an input string to camelCase.

- Throws `TypeError` if input is not a string.

#### `toPascalCase(input: string): string`

Converts an input string to PascalCase (UpperCamelCase).

- Throws `TypeError` if input is not a string.

#### `toSnakeCase(input: string): string`

Converts an input string to snake_case.

- Throws `TypeError` if input is not a string.

#### `toKebabCase(input: string): string`

Converts an input string to kebab-case.

- Throws `TypeError` if input is not a string.

#### `toConstantCase(input: string): string`

Converts an input string to CONSTANT_CASE (SCREAMING_SNAKE_CASE).

- Throws `TypeError` if input is not a string.

---

## 🆚 How is `text-case-converter` different?

| Feature                 | `text-case-converter` | Other Libraries  |
| ----------------------- | --------------------- | ---------------- |
| Handles acronyms        | ✅ Yes                | ❌ No            |
| Handles numbers         | ✅ Yes                | ❌ No            |
| Throws on invalid input | ✅ Yes                | ❌ No            |
| Fully typed (TS-first)  | ✅ Yes                | ⚠️ Often weak    |
| Tree-shakable           | ✅ Yes                | ⚠️ Sometimes     |
| Zero dependencies       | ✅ Yes                | ❌ No            |
| 100% test coverage      | ✅ Yes                | ❌ Rarely        |
| Modern build tools      | ✅ Yes                | ⚠️ Inconsistent  |
| Dual ESM + CJS output   | ✅ Yes                | ⚠️ Rarely        |
| Clean, minimal API      | ✅ Yes                | ⚠️ Often bloated |

---

## 🛠️ Contributing

Contributions are welcome! Feel free to open issues or pull requests.

---

## 🪪 License

[MIT](./LICENSE)
