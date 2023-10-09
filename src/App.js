import './App.css';
import MainPage from './Pages/MainPage';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Loading from './Components/Loading';
import React from 'react';
import OAuth2Redirect from './Pages/OAuth2Redirect';
import Login from './Pages/Login';
import PrivateRoute from './MIsc/PrivateRoute';
import LoadingPage from './Pages/LoadingPage';
const SolvedProblemPage = React.lazy(() => import('../src/Pages/SolvedProblemPage/SolvedProblemPage'));
const AIPage = React.lazy(() => import('../src/Pages/AIPage/AIpage'));
const RevisionPage = React.lazy(() => import('../src/Pages/RevisionPage/index'))



function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<MainPage />}></Route>
        <Route path="/submitted" element={<React.Suspense fallback={<LoadingPage />}>
          < PrivateRoute > <SolvedProblemPage /></PrivateRoute>
        </React.Suspense >} />
        < Route path="/revision" element={< React.Suspense fallback={< LoadingPage />}>
          <PrivateRoute><RevisionPage /></PrivateRoute>
        </React.Suspense >} />
        < Route path="/ai" element={< React.Suspense fallback={< LoadingPage />}>
          <PrivateRoute><AIPage /></PrivateRoute>
        </React.Suspense >} />
        < Route path="/authorized" element={< OAuth2Redirect />} />
        < Route path="/login" element={< Login />} />
      </Routes >
    </>
  );
}

export default App;
