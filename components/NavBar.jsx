"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function NavBar({ onSearch, onFilterClick }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);
    onSearch(searchValue);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };
  const handleSearch = () => {
    onSearch(query); 
  };


  return (
    <nav className='flex bg-gradient-to-r from-black via-gray-800 to-gray-500 justify-center md:justify-between p-3 flex-wrap items-center flex-col md:flex-row md:pr-20'>
      <figure className='w-36 md:w-36 justify-center flex flex-col'>
        <Image className='w-full bg-transparent' src={'/logo-news.png'} width={300} height={200} alt='logo de Funval' priority />
      </figure>
      <div className='items-center rounded flex gap-2'>
      <button className='justify-center flex items-center' onClick={onFilterClick}>
          <figure>
            <Image className='' src={'/filtro.svg'} width={30} height={10} alt='logo de Funval' priority />
          </figure>
        </button>
        <div className=''>
          <input
            type="text"
            className='focus:border-black p-1'
            value={query}
            onChange={handleInputChange} 
            placeholder="Buscar noticias..."
          />
          <button
            className='bg-black  text-white p-1'
            onClick={handleSearch} 
          >
            Search
          </button>
           </div>
      </div>
    </nav>
  );
}