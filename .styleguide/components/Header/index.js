import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Header = ({ version = '', description = '' }) => {
  return (
    <header className='bf--header'>
      <div className='bf--header-meta'>
        <div className='bf--logo'>
          <NavLink to='/'>
            <div className='bf-logo bf-logo_sm'>
              <img src="assets/images/visitfinland.png" alt="logo"></img>
              <div className='bf-logo-business'>Visit Finland</div>
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