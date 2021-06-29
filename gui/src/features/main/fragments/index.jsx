import PropTypes from "prop-types";
import React, { memo } from "react";

import Styled from "./styles";

const AppContainerBase = ({ children }) => (
  <Styled.AppContainer>{children}</Styled.AppContainer>
);

const InnerContainerBase = ({ children }) => (
  <Styled.InnerContainer>{children}</Styled.InnerContainer>
);

AppContainerBase.propTypes = {
  children: PropTypes.node.isRequired,
};

InnerContainerBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AppContainer = memo(AppContainerBase);

export const InnerContainer = memo(InnerContainerBase);
