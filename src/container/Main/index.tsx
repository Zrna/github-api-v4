import * as React from 'react';
import { useState, useRef } from 'react';

import Profile from '../Profile';

const Main = () => {
  const [ user, setUser ] = useState('');
  const inputElement = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (inputElement.current) setUser(inputElement.current.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type='text' ref={inputElement} placeholder='Type Github username' />
        <button type='submit'>submit</button>
      </form>
      <Profile user={user} />
    </>
  );
};

export default Main;
