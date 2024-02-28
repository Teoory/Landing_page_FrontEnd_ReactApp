import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

const DefRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default DefRoutes