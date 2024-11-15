import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Layout>
          <Container maxW="1280px" p="2rem" textAlign="center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
