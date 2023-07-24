
import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, FormLabel, Input, Button, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {

  Flex,
  IconButton,
  useColorMode,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Switch,

} from '@chakra-ui/react'
import ImgProduct from '../image/products.png'
const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

   //Function การ Login
  const handleLogin = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3001/login', {username,password})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
//Form สำหรับหน้า Login
  <Flex h="100vh" alignItems="center" justifyContent="center" fontFamily={"KanitRegular"}>
    <Image src={ImgProduct}/>
  <Flex
    flexDirection="column"
    bg={formBackground}
    p={12}
    borderRadius={8}
    boxShadow="lg"
  >
    <Heading mb={6}>Log In</Heading>
    <form onSubmit={handleLogin}>
    <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input  Input
            type="text"
            value={username}
            placeholder='Enter Username'
            onChange={(e) => setUsername(e.target.value)}
            required />
                  
                </FormControl>

                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input  Input
            type="text"
            value={password}
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
            required />
                  
                </FormControl>
                <Button mt={4} type="submit" bgColor={"#38A169"} _hover={{borderColor:"#38A169" ,border:"2px" ,bgColor:"white" ,color:"#38A169"}}  width='full'  color="white" >
       <Link to="/create">Login</Link>
          
    </Button>

    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="dark_mode" mt="1rem">
        Enable Dark Mode?
      </FormLabel>
      <Switch
        id="dark_mode"
        colorScheme="teal"
        size="lg"
        onChange={toggleColorMode}
      />
    </FormControl>
    </form>
    
  </Flex>
  </Flex>
  );
};

export default Login;
