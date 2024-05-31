import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl" mb={6}>
          Todo App
        </Heading>
        <Link to="/login">
          <Button colorScheme="teal" variant="outline" mt={4}>
            Go to Login
          </Button>
        </Link>
        <Flex w="100%" mb={4}>
          <Input
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            mr={2}
          />
          <Button onClick={handleAddTodo} colorScheme="teal">
            Add
          </Button>
        </Flex>
        <List spacing={3} w="100%">
          {todos.map((todo, index) => (
            <ListItem
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bg="gray.100"
              p={2}
              borderRadius="md"
            >
              <Checkbox
                isChecked={todo.completed}
                onChange={() => handleToggleComplete(index)}
                mr={2}
              >
                <Text as={todo.completed ? "s" : "span"}>{todo.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete todo"
                icon={<FaTrash />}
                size="sm"
                colorScheme="red"
                onClick={() => handleDeleteTodo(index)}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;