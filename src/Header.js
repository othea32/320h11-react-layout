import React from 'react';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className='Header'>
    <h1>Employee Directory</h1>
    <SearchBar />
    </div>
  );
}

export default Header;