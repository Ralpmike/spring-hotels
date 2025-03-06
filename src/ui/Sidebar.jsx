import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border: solid 1px var(--color-grey-100);
  grid-row: 1 / span 2;
`;

function Sidebar() {
  return <StyledSidebar>SideBar</StyledSidebar>;
}

export default Sidebar;
