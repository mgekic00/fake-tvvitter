import PropTypes from "prop-types";
import React, { memo } from "react";

import Styled from "./styles";

const UsernameBase = ({ children }) => (
  <Styled.Username>{children}</Styled.Username>
);

UsernameBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Username = memo(UsernameBase);
