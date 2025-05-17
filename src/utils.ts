/**
 * Splits a string into words based on spaces, hyphens, underscores, and case transitions.
 * Handles acronyms and numbers.
 * @param input The string to split.
 * @returns Array of words.
 */
export function splitWords(input: string): string[] {
  if (typeof input !== 'string') throw new TypeError('Input must be a string');
  // Normalize delimiters to spaces
  const processed = input
    .replace(/[_\-\s]+/g, ' ')
    .replace(/[^a-zA-Z0-9 ]+/g, ' ')
    .trim();

  // Split by spaces
  const words = processed.length ? processed.split(/\s+/) : [];

  // Further split each word by camelCase, PascalCase, and acronym boundaries
  const result: string[] = [];
  for (const word of words) {
    // Split on transitions from lowercase to uppercase or acronym to normal word
    const parts = word
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1 $2')
      .split(' ');
    for (const part of parts) {
      // Lowercase all words except for single-character words
      if (part.length > 1) {
        result.push(part.toLowerCase());
      } else {
        result.push(part);
      }
    }
  }

  // For version1_2_3, split numbers after underscores only
  const final: string[] = [];
  for (const w of result) {
    // If the word is like 'version1', keep as is; if just numbers, keep as is
    if (/^[a-zA-Z]+[0-9]+$/.test(w) || /^[0-9]+$/.test(w)) {
      final.push(w);
    } else if (/^[a-zA-Z]+$/.test(w)) {
      final.push(w);
    } else {
      // For mixed, split numbers and letters
      const match = w.match(/[a-zA-Z]+|[0-9]+/g);
      if (match) final.push(...match);
    }
  }

  return final;
}

/**
 * Capitalizes the first character of a word and lowercases the rest.
 * @param word The word to capitalize.
 * @returns Capitalized word.
 */
export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Lowercases the first character of a word and leaves the rest as is.
 * @param word The word to modify.
 * @returns Word with first character lowercased.
 */
export function lowerFirst(word: string): string {
  return word.charAt(0).toLowerCase() + word.slice(1);
}
