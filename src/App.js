import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import SignIn from './pages/SignIn';
import Contact from './pages/ContactUs';

function App ()
{
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/blogs' element={ <Blogs /> } />
        <Route path='/sign-up' element={ <SignIn /> } />
      </Routes>
    </Router>
  );
}

export default App;
