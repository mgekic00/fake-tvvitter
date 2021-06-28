import PropTypes from 'prop-types';
import React, { memo } from 'react';

import Styled from './styles';

const TextBase = ({ variant, children, style }) => (
  <Styled.Text style={style} variant={variant}>
    {children}
  </Styled.Text>
);

TextBase.propTypes = {
  variant: PropTypes.oneOf(['link', 'regular']),
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

TextBase.defaultProps = {
  variant: 'regular',
  style: null,
};

export const Text = memo(TextBase);
