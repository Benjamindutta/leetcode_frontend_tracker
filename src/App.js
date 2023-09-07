import './App.css';
import MainPage from './Pages/MainPage';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import RevisionPage from './Pages/RevisionPage';
import SolvedProblemPage from './Pages/SolvedProblemPage/SolvedProblemPage'
import AIpage from './Pages/AIPage/AIpage';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<MainPage />}></Route>
        <Route path="/submitted" element={<SolvedProblemPage />} />
        <Route path="/revision" element={<RevisionPage />} />
        <Route path="/ai" element={<AIpage />} />
      </Routes>
    </>
  );
}

export default App;
