import { describe, it, expect } from 'vitest';
import { toCamelCase, toPascalCase, toSnakeCase, toKebabCase, toConstantCase } from '../src/index';
import { splitWords, capitalize, lowerFirst } from '../src/utils';

const cases = [
  // [input, camel, pascal, snake, kebab, constant]
  ['hello world', 'helloWorld', 'HelloWorld', 'hello_world', 'hello-world', 'HELLO_WORLD'],
  ['HelloWorld', 'helloWorld', 'HelloWorld', 'hello_world', 'hello-world', 'HELLO_WORLD'],
  ['helloWorld', 'helloWorld', 'HelloWorld', 'hello_world', 'hello-world', 'HELLO_WORLD'],
  ['hello_world', 'helloWorld', 'HelloWorld', 'hello_world', 'hello-world', 'HELLO_WORLD'],
  ['hello-world', 'helloWorld', 'HelloWorld', 'hello_world', 'hello-world', 'HELLO_WORLD'],
  ['HELLO_WORLD', 'helloWorld', 'HelloWorld', 'hello_world', 'hello-world', 'HELLO_WORLD'],
  [
    'XMLHttpRequest',
    'xmlHttpRequest',
    'XmlHttpRequest',
    'xml_http_request',
    'xml-http-request',
    'XML_HTTP_REQUEST',
  ],
  [
    'myNASAProject',
    'myNasaProject',
    'MyNasaProject',
    'my_nasa_project',
    'my-nasa-project',
    'MY_NASA_PROJECT',
  ],
  ['HTMLParser', 'htmlParser', 'HtmlParser', 'html_parser', 'html-parser', 'HTML_PARSER'],
  [
    'parseJSONData',
    'parseJsonData',
    'ParseJsonData',
    'parse_json_data',
    'parse-json-data',
    'PARSE_JSON_DATA',
  ],
  ['APIResponse', 'apiResponse', 'ApiResponse', 'api_response', 'api-response', 'API_RESPONSE'],
  ['version1_2_3', 'version123', 'Version123', 'version1_2_3', 'version1-2-3', 'VERSION1_2_3'],
  ['item007', 'item007', 'Item007', 'item007', 'item007', 'ITEM007'],
  ['  hello   world  ', 'helloWorld', 'HelloWorld', 'hello_world', 'hello-world', 'HELLO_WORLD'],
  ['--hello__world--', 'helloWorld', 'HelloWorld', 'hello_world', 'hello-world', 'HELLO_WORLD'],
  [
    'hello--world__foo',
    'helloWorldFoo',
    'HelloWorldFoo',
    'hello_world_foo',
    'hello-world-foo',
    'HELLO_WORLD_FOO',
  ],
  [
    'foo_bar-baz qux',
    'fooBarBazQux',
    'FooBarBazQux',
    'foo_bar_baz_qux',
    'foo-bar-baz-qux',
    'FOO_BAR_BAZ_QUX',
  ],
  ['foo@bar#baz!', 'fooBarBaz', 'FooBarBaz', 'foo_bar_baz', 'foo-bar-baz', 'FOO_BAR_BAZ'],
  ['', '', '', '', '', ''],
  ['_', '', '', '', '', ''],
  ['-', '', '', '', '', ''],
  [' ', '', '', '', '', ''],
  ['___', '', '', '', '', ''],
  ['---', '', '', '', '', ''],
  ['   ', '', '', '', '', ''],
  ['foo', 'foo', 'Foo', 'foo', 'foo', 'FOO'],
];

describe('string-case-converter', () => {
  describe('toCamelCase', () => {
    cases.forEach(([input, camel]) => {
      it(`converts "${input}" to camelCase: "${camel}"`, () => {
        expect(toCamelCase(input)).toBe(camel);
      });
    });
    it('throws TypeError for non-string input', () => {
      // @ts-expect-error
      expect(() => toCamelCase(null)).toThrow(TypeError);
      // @ts-expect-error
      expect(() => toCamelCase(undefined)).toThrow(TypeError);
      // @ts-expect-error
      expect(() => toCamelCase(123)).toThrow(TypeError);
    });
  });

  describe('toPascalCase', () => {
    cases.forEach(([input, , pascal]) => {
      it(`converts "${input}" to PascalCase: "${pascal}"`, () => {
        expect(toPascalCase(input)).toBe(pascal);
      });
    });
    it('throws TypeError for non-string input', () => {
      // @ts-expect-error
      expect(() => toPascalCase(null)).toThrow(TypeError);
      // @ts-expect-error
      expect(() => toPascalCase(undefined)).toThrow(TypeError);
      // @ts-expect-error
      expect(() => toPascalCase(123)).toThrow(TypeError);
    });
  });

  describe('toSnakeCase', () => {
    cases.forEach(([input, , , snake]) => {
      it(`converts "${input}" to snake_case: "${snake}"`, () => {
        expect(toSnakeCase(input)).toBe(snake);
      });
    });
    it('throws TypeError for non-string input', () => {
      // @ts-expect-error
      expect(() => toSnakeCase(null)).toThrow(TypeError);
      // @ts-expect-error
      expect(() => toSnakeCase(undefined)).toThrow(TypeError);
      // @ts-expect-error
      expect(() => toSnakeCase(123)).toThrow(TypeError);
    });
  });

  describe('toKebabCase', () => {
    cases.forEach(([input, , , , kebab]) => {
      it(`converts "${input}" to kebab-case: "${kebab}"`, () => {
        expect(toKebabCase(input)).toBe(kebab);
      });
    });
    it('throws TypeError for non-string input', () => {
      // @ts-expect-error
      expect(() => toKebabCase(null)).toThrow(TypeError);
      // @ts-expect-error
      expect(() => toKebabCase(undefined)).toThrow(TypeError);
      // @ts-expect-error
      expect(() => toKebabCase(123)).toThrow(TypeError);
    });
  });

  describe('toConstantCase', () => {
    cases.forEach(([input, , , , , constant]) => {
      it(`converts "${input}" to CONSTANT_CASE: "${constant}"`, () => {
        expect(toConstantCase(input)).toBe(constant);
      });
    });
    it('throws TypeError for non-string input', () => {
      // @ts-expect-error
      expect(() => toConstantCase(null)).toThrow(TypeError);
      // @ts-expect-error
      expect(() => toConstantCase(undefined)).toThrow(TypeError);
      // @ts-expect-error
      expect(() => toConstantCase(123)).toThrow(TypeError);
    });
  });
});

describe('utils', () => {
  describe('splitWords', () => {
    it('splits camelCase and PascalCase', () => {
      expect(splitWords('fooBarBaz')).toEqual(['foo', 'bar', 'baz']);
      expect(splitWords('FooBarBaz')).toEqual(['foo', 'bar', 'baz']);
    });
    it('splits snake_case, kebab-case, and space', () => {
      expect(splitWords('foo_bar-baz qux')).toEqual(['foo', 'bar', 'baz', 'qux']);
    });
    it('handles acronyms and numbers', () => {
      expect(splitWords('HTMLParser')).toEqual(['html', 'parser']);
      expect(splitWords('APIResponse')).toEqual(['api', 'response']);
      expect(splitWords('version1_2_3')).toEqual(['version1', '2', '3']);
      expect(splitWords('item007')).toEqual(['item007']);
    });
    it('returns [] for empty or only delimiters', () => {
      expect(splitWords('')).toEqual([]);
      expect(splitWords('___')).toEqual([]);
      expect(splitWords('   ')).toEqual([]);
    });
    it('throws TypeError for non-string input', () => {
      // @ts-expect-error
      expect(() => splitWords(null)).toThrow(TypeError);
    });
    it('handles single-character words (should not lowercase)', () => {
      expect(splitWords('A B C')).toEqual(['A', 'B', 'C']);
      expect(splitWords('X')).toEqual(['X']);
      expect(splitWords('a b c')).toEqual(['a', 'b', 'c']);
    });
    it('handles multi-character words (should lowercase)', () => {
      expect(splitWords('FOO')).toEqual(['foo']);
      expect(splitWords('BarBaz')).toEqual(['bar', 'baz']);
    });
    it('handles mixed alphanumeric words', () => {
      expect(splitWords('foo123bar')).toEqual(['foo', '123', 'bar']);
      expect(splitWords('abc123def456')).toEqual(['abc', '123', 'def', '456']);
    });
  });
  describe('capitalize', () => {
    it('capitalizes the first letter and lowercases the rest', () => {
      expect(capitalize('foo')).toBe('Foo');
      expect(capitalize('FOO')).toBe('Foo');
      expect(capitalize('fOO')).toBe('Foo');
      expect(capitalize('f')).toBe('F');
      expect(capitalize('')).toBe('');
    });
  });
  describe('lowerFirst', () => {
    it('lowercases the first letter and leaves the rest', () => {
      expect(lowerFirst('Foo')).toBe('foo');
      expect(lowerFirst('FOO')).toBe('fOO');
      expect(lowerFirst('F')).toBe('f');
      expect(lowerFirst('')).toBe('');
    });
  });
});
