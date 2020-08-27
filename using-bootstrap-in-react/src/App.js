import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header'

function App() {
 
  return (
  <div>
 <Header></Header>
 <Shop></Shop>
  </div>
  );
}

export default App;
