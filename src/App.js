import React from 'react';
import "./App.css"

function App() {

  function handleLogin() {
    console.log("Clicked")
  }

  return (
    <div className='container'>
      <div className='title'>
        <h1>Fake Twitter</h1>
        <button className='login-button' onClick={handleLogin}>Sign in</button>
      </div>
    </div>
  );
}

export default App;
