import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login  from './pages/Login'; 
import { Error404 } from './pages/Error404';
import Dashboard from './pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <React.StrictMode>
            
        </React.StrictMode>
    <Routes>
        <Route path="/" exact element={<App/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/dashboard" exact element={<Dashboard/>}/>
        <Route path="*" element={<Error404/>}/>
    </Routes>
    </Router>
);
