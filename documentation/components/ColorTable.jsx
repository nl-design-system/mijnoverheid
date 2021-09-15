/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs';
import { cssVariable, styleDictionaryRef } from './util';

export const ColorTable = ({ tokens }) => (
  <ColorPalette>
    {Object.entries(tokens)
      .filter(([, { value }]) => typeof value === 'string')
      .map(([name, token]) => (
        <ColorItem
          key={name}
          title={name}
          subtitle={
            <>
              <code>{cssVariable(token)}</code>
              <br />
              <code>{styleDictionaryRef(token)}</code>
            </>
          }
          colors={[token.value]}
        />
      ))}
  </ColorPalette>
);

ColorTable.propTypes = {
  tokens: PropTypes.object.isRequired,
};
