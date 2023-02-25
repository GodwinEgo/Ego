import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import SignIn from './pages/SignIn';
import Contact from './pages/ContactUs';
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard/DashBoard';

function App ()
{
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/blogs' element={ <Blogs /> } />
        <Route path='/sign-in' element={ <SignIn /> } />
        <Route path='/sign-up' element={ <SignUp /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
      </Routes>
    </Router>
  );
}

export default App;
