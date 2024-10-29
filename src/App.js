import { Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Profile' element={<Profile />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
