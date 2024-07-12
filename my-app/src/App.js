import {Box, container, Flex} from '@chakra-ui/react';
import './App.css';
import Main from './components/main'

function App() {
  return (
    <container bg={'#f8fafd'} maxW={'container.3xl'} height={'100vh'} p={'0'}>
      <Flex height={'full'}>
        <Box height={'full'} flex={5} w={['20%','30%','20%','50%','60%']}>
            <Main/>
        </Box>
      </Flex>
      
    </container>
  );
}

export default App;
