import React from 'react';
import './App.css';
import Menu from './components/Menu';
import AppRoutes from './Routes';

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <AppRoutes />
    </>
  )
};

export default App;
