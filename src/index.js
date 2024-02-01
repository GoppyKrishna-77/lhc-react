import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Error404 } from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <React.StrictMode>
            
        </React.StrictMode>
    <Routes>
        <Route forceRefresh={true} path="/" exact element={<App/>}/>
        <Route path="*" element={<Error404/>}/>
    </Routes>
    </Router>
);
