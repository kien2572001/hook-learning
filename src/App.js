import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const App = ()=> {
  const [name,setName] = useState('Eric');

  const handleEvenClick = (event) => {
    //setName('Hello')
    console.log('Even Click',event.target);
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h5>{name}</h5>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type='text' onChange={(e)=>setName(e.target.value)} />
        <button type='button' onClick={(e)=>{handleEvenClick(e)}}>Click me</button>
      </header>
    </div>
  );
}

export default App;
