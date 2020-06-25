import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Header = ({ version = '', description = '' }) => {
  return (
    <header className='bf--header'>
      <div className='bf--header-meta'>
        <div className='bf--logo'>
          <NavLink to='/'>
            <div className='vf-logo'>
              <img src="assets/images/visitfinland.png" alt="logo"></img>
              <div className='vf-logo-text'>Visit Finland</div>
            </div>
          </NavLink>
        </div>
        <div className='bf--meta-description'>{description}</div>
      </div>
      <div className='bf--header-meta'>
        <div className='bf--meta-version'>Version: {version}</div>
      </div>
    </header>
  );
};

export default Header;
