import PropTypes from 'prop-types';
import React, { memo } from 'react';

import Styled from './styles';

const ContainerBase = ({ children }) => <Styled.Container>{children}</Styled.Container>;

ContainerBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Container = memo(ContainerBase);
