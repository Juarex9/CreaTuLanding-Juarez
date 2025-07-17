import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      minH="80vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      gap={4}
    >
      <Heading fontSize="6xl" color="red.400">404</Heading>
      <Text fontSize="2xl" mb={4}>Página no encontrada</Text>
      <Button colorScheme="teal" onClick={() => navigate("/")}>
        Volver al inicio
      </Button>
    </Box>
  );
};

export default NotFound;