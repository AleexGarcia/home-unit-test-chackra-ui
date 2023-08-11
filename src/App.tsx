import {
  ChakraProvider,
  Flex,
  Box
} from '@chakra-ui/react'

import { Card } from './components/Card/Card';
import { Layout } from './components/Layout';

function App() {

  return (
    <ChakraProvider>
      <Layout>
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
