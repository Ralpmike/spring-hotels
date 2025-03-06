import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border: solid 1px var(--color-grey-100);
`;

export default function Header() {
  return <StyledHeader>Header</StyledHeader>;
}
