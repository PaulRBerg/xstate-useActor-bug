import { ReactElement } from "react";
import styled from "styled-components";

import Header from "./components/Header";

const AppWrapper = styled.div`
  align-items: stretch;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;

const BodyWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

function App(): ReactElement {
  return (
    <AppWrapper>
      <BodyWrapper>
        <Header />
      </BodyWrapper>
    </AppWrapper>
  );
}

export default App;
