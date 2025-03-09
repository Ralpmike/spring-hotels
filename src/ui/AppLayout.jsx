import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./SideBar";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.6rem 6rem;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

const Container = styled.div`
  max-width: 120rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  /* padding-block: 3.2rem; */
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
