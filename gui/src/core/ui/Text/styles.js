import styled, { css } from 'styled-components';

const addVariants = (variants) => ({ variant }) => variants[variant];

const Styled = {
  Text: styled.span`
    font-family: Arial;
    font-size: 16px;

    ${addVariants({
      link: css`
        color: #074ee8;
        text-decoration: underline;

        &:hover {
          opacity: 0.7;
          cursor: pointer;
        }
      `,
    })}
  `,
};

export default Styled;
