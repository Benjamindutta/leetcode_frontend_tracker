import './App.css';
import MainPage from './Pages/MainPage';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import RevisionPage from './Pages/RevisionPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/revision" element={<RevisionPage />} />
      </Routes>
    </>
  );
}

export default App;
