import React from 'react';
import Navbar from './components/Navbar'; 
import News from './components/News';

function App() {
  return (
    <div>
      <Navbar />
      <News pageSize={6} country="us" />
    </div>
  );
}

export default App;
