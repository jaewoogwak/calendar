import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Box from "./components/Box";

const Wrapper = styled.div`
  background-color: beige;
  width: 60vw;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  const [today, setToday] = useState();

  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
}

export default App;
