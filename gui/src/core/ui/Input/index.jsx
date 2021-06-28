import PropTypes from "prop-types";
import React, { memo } from "react";

import Styled from "./styles";

const InputBase = ({ placeholder, onChange, name, style, type }) => (
  <Styled.Input
    style={style}
    placeholder={placeholder}
    onChange={onChange}
    name={name}
    id={name}
    type={type}
  />
);

InputBase.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

InputBase.defaultProps = {
  style: null,
};

export const Input = memo(InputBase);
