import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>

        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
