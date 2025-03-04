import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: rgba(199, 20, 20, 0.5);
  padding: 10px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading>Spring Hotels</Heading>
        <Button
          onClick={() => {
            console.log("Jesus is the best");
          }}
        >
          Submit
        </Button>
        <Input />
        <Button onClick={() => alert("Cancel")}>Cancel</Button>
      </StyledApp>
    </>
  );
}

export default App;
