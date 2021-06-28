import PropTypes from "prop-types";
import React, { memo } from "react";

import Styled from "./styles";

const ProfileCardBase = ({ children }) => (
  <Styled.ProfileCard>{children}</Styled.ProfileCard>
);

ProfileCardBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ProfileCard = memo(ProfileCardBase);
