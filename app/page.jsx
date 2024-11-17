/* 'use client';
import { useState } from 'react';
import Image from 'next/image';
import Card from '@/components/Card';

export default function HomePage() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'Business',
    'Entertainment',
    'General',
    'Health',
    'Science',
    'Sports',
    'Technology'
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsAsideVisible(false); 
  };

  return (
    <div className="p-10 flex flex-col">
      {!isAsideVisible && (
        <button
          className=" top-0 left-4 bg-transparent text-black px-4 py-2 rounded justify-start flex font-bold "
          onClick={() => setIsAsideVisible(true)}
        >
          <figure >
              <Image className='' src={'/menu.svg'} width={30} height={10} alt='logo de Funval' priority />
            </figure>
          Categorías
        </button>
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-gray-200 p-4 rounded-lg w-full md:w-64 transform ${
          isAsideVisible ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={() => setIsAsideVisible(false)}
        >
          &times;
        </button>

        <h2 className="font-bold mb-4">Categorías</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className="cursor-pointer p-2 hover:bg-gray-300"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      <div className={`flex-1 ${isAsideVisible ? 'ml-64' : 'ml-0'}`}>
        <h1 className="text-2xl font-bold mb-4">
          {selectedCategory ? selectedCategory : 'Selecciona una categoría'}
        </h1>
        <div className="bg-white p-5 shadow-lg rounded-lg flex gap-10 flex-wrap">
          
          <div className="max-w-sm mx-auto my-3 rounded-lg overflow-hidden shadow-lg">
            <Image
              className="bg-transparent"
              src={'/imagen.jpg'}
              width={800}
              height={700}
              alt="logo de Funval"
              priority
            />
            
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Título de la noticia</h2>
            </div>
          </div>
          <div className="max-w-sm mx-auto my-3 rounded-lg overflow-hidden shadow-lg">
            <Image
              className="bg-transparent"
              src={'/imagen.jpg'}
              width={800}
              height={700}
              alt="logo de Funval"
              priority
            />
            
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Título de la noticia</h2>
              <p className="text-gray-600">Resumen de la noticia...</p>
            </div>
          </div>
          <div className="max-w-sm mx-auto my-3 rounded-lg overflow-hidden shadow-lg">
            <Image
              className="bg-transparent"
              src={'/imagen.jpg'}
              width={800}
              height={700}
              alt="logo de Funval"
              priority
            />
            
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Título de la noticia</h2>
              <p className="text-gray-600">Resumen de la noticia...</p>
            </div>
          </div>
          <div className="max-w-sm mx-auto my-3 rounded-lg overflow-hidden shadow-lg">
            <Image
              className="bg-transparent"
              src={'/imagen.jpg'}
              width={800}
              height={700}
              alt="logo de Funval"
              priority
            />
            
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Título de la noticia</h2>
              <p className="text-gray-600">Resumen de la noticia...</p>
            </div>
          </div>
          <div className="max-w-sm mx-auto my-3 rounded-lg overflow-hidden shadow-lg">
            <Image
              className="bg-transparent"
              src={'/imagen.jpg'}
              width={800}
              height={700}
              alt="logo de Funval"
              priority
            />
            
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Título de la noticia</h2>
              <p className="text-gray-600">Resumen de la noticia...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 */
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [news, setNews] = useState([]);

  const categories = [
    'Business',
    'Entertainment',
    'General',
    'Health',
    'Science',
    'Sports',
    'Technology'
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsAsideVisible(false);
  };

  useEffect(() => {
    // Llama a la API de noticias al cargar la página
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=fb7dbf5f0f1a48bb8b62a3de78678ca4'
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-10 flex flex-col">
      {!isAsideVisible && (
        <button
          className="top-0 left-4 bg-transparent text-black px-4 py-2 rounded justify-start flex font-bold"
          onClick={() => setIsAsideVisible(true)}
        >
          <figure>
            <Image src={'/menu.svg'} width={30} height={10} alt="logo de Funval" priority />
          </figure>
          Categorías
        </button>
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-gray-200 p-4 rounded-lg w-full md:w-64 transform ${
          isAsideVisible ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <button className="absolute top-2 right-2 text-xl" onClick={() => setIsAsideVisible(false)}>
          &times;
        </button>

        <h2 className="font-bold mb-4">Categorías</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className="cursor-pointer p-2 hover:bg-gray-300"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      <div className={`flex-1 ${isAsideVisible ? 'ml-64' : 'ml-0'}`}>
        <h1 className="text-2xl font-bold mb-4">
          {selectedCategory ? selectedCategory : 'Selecciona una categoría'}
        </h1>
        <div className="bg-white rounded-lg flex gap-10 flex-wrap">
          {news.length > 0 ? (
            news.map((article, index) => (
              <div key={index} className="w-[600px] mx-auto my-3 rounded-lg overflow-hidden flex shadow-lg  ease-in duration-300 hover:scale-105 cursor-pointer">
  {/* Contenedor con imagen de fondo */}
  <div
    className="relative w-full h-96 bg-cover bg-center"
    style={{backgroundImage:`url(${article.urlToImage})`}}
  >
    {/* Título centrado sobre la imagen */}
    <div className="absolute inset-0 flex items-end justify-center text-white bg-black bg-opacity-25">
      <h2 className="font-bold text-lg text-center">{article.title}</h2>
    </div>
  </div>  
</div>

            ))
          ) : (
            <p>No se encontraron noticias.</p>
          )}
        </div>
      </div>
    </div>
  );
}
