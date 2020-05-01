import * as React from 'react';
import { useState, useRef } from 'react';

import './styles.scss';

import Logo from '../../assets/logo.svg';
import Profile from '../Profile';

const Main = () => {
  const [ user, setUser ] = useState('');
  const [ initialView, setInitialView ] = useState(true);
  const inputElement = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setInitialView(false);
    if (inputElement.current) setUser(inputElement.current.value);
  };

  const resetDataToDefault = () => {
    setInitialView(true);
    setUser('');
  };
  
  return (
    <div className={`${initialView ? 'initial-centered' : 'container'}`}>
      <div className='search-container'>
        <div className='title'>
          <img src={Logo} alt='Github logo' onClick={resetDataToDefault} />
          <span>Github Search</span>
        </div>
        <form onSubmit={handleFormSubmit}>
          <input type='text' ref={inputElement} placeholder='Type Github username' />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='user-profile'>
        <Profile user={user} />
      </div>
    </div>
  );
};

export default Main;
