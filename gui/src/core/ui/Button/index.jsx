import PropTypes from 'prop-types';
import React, { memo } from 'react';

import Styled from './styles';

const ButtonBase = ({ onClick, name, label, style, disabled }) => (
  <Styled.Button style={style} onClick={onClick} name={name} disabled={disabled} id={name}>
    {label}
  </Styled.Button>
);

ButtonBase.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.shape({}),
};

ButtonBase.defaultProps = {
  style: null,
  disabled: false,
};

export const Button = memo(ButtonBase);
