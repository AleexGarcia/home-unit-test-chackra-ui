import {
  ChakraProvider,
  Flex,
  Box
} from '@chakra-ui/react'

import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <ChakraProvider>
      <Box minH='100vh' display='flex' flexDirection='column' justifyContent='space-between'>
          <Header />
          <Card  />
          <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
