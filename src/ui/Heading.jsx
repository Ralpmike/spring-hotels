import styled, { css } from "styled-components";

// Declaring an external styled component

const text = css`
  text-align: center;
  ${10 > 5 && "background-color: yellow"}
`;

const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 20px;
  margin-block: 12px;
  ${text}
`;

export default Heading;
