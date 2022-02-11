import React from 'react';
import { Nav } from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

const Router = () => {

    return (
        <BrowserRouter>
            <Nav>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Profile'>Profile</Link>
            </Nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
