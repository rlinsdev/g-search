import React, { useState } from 'react'

import { Navbar } from './components/Navbar';
import { Routes } from './components/Routes';
import { Footer } from './components/Footer';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
