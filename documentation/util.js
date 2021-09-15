export const cssVariable = (token) => `var(--${token.path.join('-')})`;

export const styleDictionaryRef = (token) => `{${token.path.join('.')}.value}`;
