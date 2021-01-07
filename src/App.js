import React from 'react';
import Fetch from '../src/components/Fetch';
import './App.css';

function App() {
  return (
    <>
      <div data-netlify-identity-menu></div>
      <Fetch />
    </>
  );
}

export default App;