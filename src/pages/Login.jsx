import React from 'react';
import { Box, Button, Container, Flex, Heading, Input, Text, VStack, Link } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box bg="#F3FFF3" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="container.lg" p={10} display="flex" justifyContent="space-between">
        {/* Left Section */}
        <Box p={10} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box mb={5}>
            <img src="/path/to/illustration.png" alt="Illustration" width="300" height="300" />
          </Box>
          <Heading as="h2" size="lg" color="#333333" mb={2} textAlign="center">
            Welcome Back!
          </Heading>
          <Text fontSize="md" color="#666666" textAlign="center">
            Please login to your account
          </Text>
        </Box>

        {/* Right Section */}
        <Box
          width="400px"
          p={10}
          bg="#FFFFFF"
          borderRadius="8px"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <VStack spacing={4} align="stretch">
            <Box>
              <Text fontSize="16px" color="#333333" mb={1}>
                Username or email
              </Text>
              <Input
                type="text"
                placeholder="Enter your username or email"
                height="50px"
                padding="10px"
                fontSize="16px"
                border="1px solid #CCCCCC"
                borderRadius="4px"
                mb={4}
              />
            </Box>
            <Box>
              <Text fontSize="16px" color="#333333" mb={1}>
                Password
              </Text>
              <Input
                type="password"
                placeholder="Enter your password"
                height="50px"
                padding="10px"
                fontSize="16px"
                border="1px solid #CCCCCC"
                borderRadius="4px"
                mb={4}
              />
            </Box>
            <Button
              width="100%"
              height="50px"
              bg="#333333"
              color="#FFFFFF"
              fontSize="16px"
              fontWeight="bold"
              borderRadius="4px"
              mb={4}
              _hover={{ cursor: 'pointer' }}
            >
              Sign In
            </Button>
            <Link
              fontSize="14px"
              color="#666666"
              textDecoration="none"
              mb={4}
              _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              Forgot password?
            </Link>
            <Button
              width="100%"
              height="50px"
              bg="#FFFFFF"
              border="1px solid #DDDDDD"
              fontSize="16px"
              fontWeight="bold"
              color="#333333"
              borderRadius="4px"
              mb={4}
              _hover={{ cursor: 'pointer' }}
            >
              Sign in with Google
            </Button>
            <Link
              fontSize="14px"
              color="#00AA00"
              textDecoration="none"
              mt={4}
              _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
              textAlign="center"
            >
              Are you new? Create an Account
            </Link>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;