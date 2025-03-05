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
        <Heading as="h1">Spring Hotels</Heading>
        <Heading as="h2">The Oasis Hotels</Heading>
        <Button
          onClick={() => {
            console.log("Jesus is the best");
          }}
        >
          Submit
        </Button>
        <Heading as="h3">Forms</Heading>
        <Input />
        <Button onClick={() => alert("Cancel")}>Cancel</Button>
      </StyledApp>
    </>
  );
}

export default App;
