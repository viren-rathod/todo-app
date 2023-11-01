import { Container } from "@mui/material";
import Todo from "./pages/Todo";
import { containerStyle } from "./theme/style";

function App() {
  return (
    <>
      <Container sx={containerStyle}>
        <Todo />
      </Container>
    </>
  );
}

export default App;
