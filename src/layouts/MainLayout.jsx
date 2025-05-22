import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <Box height="100vh" width="100vw">
      <NavBar />
      <Flex direction="column" height="calc(100vh - 64px)" width="100%">
        {children}
      </Flex>
    </Box>
  );
};

export default MainLayout;