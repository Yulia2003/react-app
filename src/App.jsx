import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';  // Замените на другие компоненты по мере необходимости

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Главная страница */}
        <Route path="/about" element={<About />} />  {/* Страница About */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
