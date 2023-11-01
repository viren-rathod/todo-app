import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box textAlign="center" p={1}>
      <Box component="figure">
        <Box component="img" width={{ sm: 0.5 }} src="../../src/assets/img/todo.svg" />
      </Box>
    </Box>
  );
};

export default Home;
