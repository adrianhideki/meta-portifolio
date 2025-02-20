import "./App.css";
import { Box, Stack } from "@chakra-ui/react";
import Header from "./Header";
import Profile from "./Profile";
import Portifolio from "./Portifolio";
import ContactMe from "./ContactMe";

function App() {
  return (
    <Box>
      <Header />
      <Stack as="main" marginTop={2} gap={0}>
        <Profile />
        <Portifolio />
        <ContactMe />
      </Stack>
    </Box>
  );
}

export default App;
