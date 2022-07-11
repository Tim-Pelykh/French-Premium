import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HomeScreen } from './screens/index.js';

function App() {
  return (
    <BrowserRouter>
      <header></header>
      <main>
        Hi
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
