import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AppPage from './AppPage';

const App = () => (
    <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/app" element={<AppPage />} />
        <Route path='/' element={<SignIn />} />
    </Routes>
);

export default App;
