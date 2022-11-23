import { Box, Flex, } from '@chakra-ui/react';
import './App.css';
import Nav from './componentes/Nav';
import Logo from './componentes/Logo';
import InputSearch from "./componentes/InputSearch";
import Footer from './componentes/Footer';
import Botones from './componentes/Botones';

function App() {
  return (
    <div className="App">
      <Flex bgColor="#202124" flexDirection="column" justifyContent="space-between" width="100%" height="100vh">
        <Nav/>
        <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="30px">
          <Logo/>
          <InputSearch/>
          <Botones/>
        </Flex>
        <Box py="10px" />
        <Footer/>
      </Flex>
    </div>
  );
}

export default App;
