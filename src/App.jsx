import styled from "styled-components";

const H1 = styled.h1`
  color: red;
  font-size: clamp(1.5rem, 4vw, 3rem);
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  mix-blend-mode: difference;
`;

const Spinner = styled.div`
  /* .loader { */
  width: 20px;
  height: 20px;
  border: 5px solid lightgray;
  border-top: 5px solid blue;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  /* } */
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = styled.button`
  padding: 1.2rem 1.5rem;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px;

  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  return (
    <div>
      <H1>The Spring Oasis</H1>

      <Spinner />

      <Button
        onClick={() => {
          console.log("Jesus is the best");
        }}
      >
        Submit
      </Button>

      <Button onClick={() => alert("Cancel")}>Cancel</Button>
    </div>
  );
}

export default App;
