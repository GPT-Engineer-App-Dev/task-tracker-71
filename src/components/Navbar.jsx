import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      width="100%"
      bg="#333333"
      height="60px"
      padding="0 20px"
      zIndex="1000"
    >
      <Flex
        justify="space-between"
        align="center"
        height="100%"
      >
        <Text color="#FFFFFF" fontSize="24px" fontWeight="bold">
          BrandName
        </Text>
        <Link
          as={RouterLink}
          to="/login"
          color="#FFFFFF"
          fontSize="16px"
          textDecoration="none"
          _hover={{ textDecoration: "underline" }}
        >
          Login
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;