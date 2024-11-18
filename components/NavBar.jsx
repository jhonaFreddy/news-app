"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function NavBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);
    onSearch(searchValue); // Llama a la función de búsqueda cuando el usuario escribe
  };
  const handleSearch = () => {
    onSearch(query); // Llama a la función de búsqueda al hacer clic en el botón
  };


  return (
    <nav className='flex bg-black justify-center md:justify-between p-3 flex-wrap items-center flex-col md:flex-row md:pr-20'>
      <figure className='w-36 md:w-36 justify-center flex flex-col'>
        <Image className='w-full bg-transparent' src={'/logo-news.png'} width={300} height={200} alt='logo de Funval' priority />
      </figure>
      <div className='items-center rounded flex gap-2'>
        <button className='justify-center flex items-center'>
          <figure>
            <Image className='' src={'/filtro.svg'} width={30} height={10} alt='logo de Funval' priority />
          </figure>
        </button>
        <div className='border-white border'>
          <input
            type="text"
            className='focus:border-black'
            value={query}
            onChange={handleInputChange} // Actualiza el valor al escribir
            placeholder="Buscar noticias..."
          />
          <button
            className='bg-black border border-white text-white px-1'
            onClick={handleSearch} // Llama a la búsqueda al hacer clic
          >
            Search
          </button>
           </div>
      </div>
    </nav>
  );
}