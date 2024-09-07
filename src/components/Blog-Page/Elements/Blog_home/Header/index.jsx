import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='home-header'>
    <h2>Hello Fellas!</h2>
    <h1>
      <span>“</span> Let's learn and grow Together <span>”</span>
    </h1>
    <p>
      If you have got something <br /> Enlighten your peers and Alma-Better 
    </p>
    <Link to="/write">
        <button className=' rounded py-2 px-10 font-semibold text-white bg-indigo-400 mt-3'>
          Write a Blog
        </button>
    </Link>
    
  </header>
);

export default Header;
