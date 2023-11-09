import { useState } from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import {Box} from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box w="60%" mx="auto">
      <Header />
      <Body />
      <Footer />
    </Box>
  )
}

export default App
