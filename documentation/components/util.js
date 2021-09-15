/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const cssVariable = (token) => `var(--${token.path.join('-')})`;

export const styleDictionaryRef = (token) => `{${token.path.join('.')}.value}`;
