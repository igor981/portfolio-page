import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import gitlogo from './images/githubwhite.png'
import linkedlogo from './images/linkedinwhite.png'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content-front'>
      <div className='sidelinks'>
        <ul className='photo-links link-ul' >
        
          <li >
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/igor-doroshkevich-104722203/?locale=es_ES'>
            <img className='link-icons'src={linkedlogo} alt='linkedin'></img>
            </a>
          </li>
          <li >
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/igor981'>
            <img className='link-icons' src={gitlogo} alt='github'></img>            </a>
          </li>

        </ul>
      </div>
      <div className='content'>
        <Home />
    

      </div>

      </div>
    </div>
    
  );
}

export default App;
