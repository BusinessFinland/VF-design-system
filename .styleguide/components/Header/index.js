import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Header = ({ version = '', description = '' }) => {
  return (
    <header className='styleguide--header'>
      <div className='styleguide--header-meta'>
        <div className='styleguide--logo'>
          <NavLink to='/'>
            <div className='vf-logo-container'>
              <div className='vf-logo'>
                <img src="assets/images/visitfinland.png" alt="logo"></img>
                <div className='vf-logo-text'>Visit Finland</div>
              </div>
            </div>
          </NavLink>
        </div>
        <div className='styleguide--meta-description'>{description}</div>
      </div>
      <div className='styleguide--header-meta'>
        <div className='styleguide--meta-version'>Version: {version}</div>
      </div>
    </header>
  );
};

export default Header;
