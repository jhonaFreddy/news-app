/* 'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import fetchByCategory from './api/news/fetchByCategory';
import fetchByQuery from './api/news/fetchByQuery'; 
import NavBar from '@/components/NavBar';


export default function HomePage() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    'Business',
    'Entertainment',
    'General',
    'Health',
    'Science',
    'Sports',
    'Technology'
  ];

  const fetchDefaultNews = async () => {
    try {
      const defaultNews = await fetchByCategory('general');
      console.log('Default news:', defaultNews);
      setNews(defaultNews);
    } catch (error) {
      console.error('Error fetching default news:', error.message);
      alert('Hubo un problema al cargar las noticias, por favor verifica tu conexión o la API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDefaultNews();
  }, []);

  const handleSearch = async (query) => {
    if (!query) {
      setSelectedCategory('general');
      setLoading(true);
      await fetchDefaultNews();
    } else {
      setLoading(true);
      try {
        const searchResults = await fetchByQuery(query);
        setNews(searchResults);
      } catch (error) {
        console.error('Error searching news:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCategoryClick = async (category) => {
    setLoading(true);
    setSelectedCategory(category);

    try {
      const categoryNews = await fetchByCategory(category.toLowerCase());
      setNews(categoryNews);
    } catch (error) {
      console.error(`Error fetching news for category ${category}:`, error);
    } finally {
      setLoading(false);
    }

    setIsAsideVisible(false);
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div className=" flex flex-col">
      <NavBar onSearch={handleSearch} />
      {!isAsideVisible && (
        <button
          className="top-0 left-0 bg-gray-200 px-3 text-black text-2xl py-5 rounded justify-start flex font-bold items-center"
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
        <h1 className="text-4xl bg-gray-200 font-bold py-5 px-6 flex justify-center">
          {selectedCategory ? selectedCategory : 'Noticias Generales'}
        </h1>
        {loading ? (
          <p>Cargando noticias...</p>
        ) : (
          <div className="bg-gray-200 px-10 pb-10 rounded-lg flex gap-10 flex-wrap">
            {news.length > 0 ? (
              news.map((article, index) => (
                <div
                  key={index}
                  onClick={() => handleArticleClick(article)}
                  className="w-[600px] mx-auto my-3 rounded-lg overflow-hidden flex shadow-lg ease-in duration-300 hover:scale-105 cursor-pointer"
                >
                  <div
                    className="relative w-full h-96 bg-cover bg-center bg-black"
                    style={{
                      backgroundImage: `url(${article.urlToImage ? article.urlToImage : '/logo-news.png'})`
                    }}
                  >
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
        )}
      </div>

      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-3xl">
            <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
              &times;
            </button>
            <div className='flex justify-center'>
            <img
              src={selectedArticle.urlToImage ? selectedArticle.urlToImage : '/logo-news.png'}
              width={600}
              height={400}
              alt={selectedArticle.title}
              className="mb-4 bg-black"
            />
            </div>
            <h2 className="text-2xl font-bold mb-2">{selectedArticle.title}</h2>
            <p className="mb-4">{selectedArticle.description}</p>
            <a
              href={selectedArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Leer más
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
 */
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import fetchByCategory from './api/news/fetchByCategory';
import fetchByQuery from './api/news/fetchByQuery'; 
import NavBar from '@/components/NavBar';

export default function HomePage() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [visibleArticles, setVisibleArticles] = useState(10); // Estado para controlar cuántos artículos mostrar

  const categories = [
    'Business',
    'Entertainment',
    'General',
    'Health',
    'Science',
    'Sports',
    'Technology'
  ];

  const fetchDefaultNews = async () => {
    try {
      const defaultNews = await fetchByCategory('general');
      console.log('Default news:', defaultNews);
      setNews(defaultNews);
    } catch (error) {
      console.error('Error fetching default news:', error.message);
      alert('Hubo un problema al cargar las noticias, por favor verifica tu conexión o la API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDefaultNews();
  }, []);

  const handleSearch = async (query) => {
    if (!query) {
      setSelectedCategory('general');
      setLoading(true);
      await fetchDefaultNews();
    } else {
      setLoading(true);
      try {
        const searchResults = await fetchByQuery(query);
        setNews(searchResults);
      } catch (error) {
        console.error('Error searching news:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCategoryClick = async (category) => {
    setLoading(true);
    setSelectedCategory(category);

    try {
      const categoryNews = await fetchByCategory(category.toLowerCase());
      setNews(categoryNews);
    } catch (error) {
      console.error(`Error fetching news for category ${category}:`, error);
    } finally {
      setLoading(false);
    }

    setIsAsideVisible(false);
    setVisibleArticles(10); // Reinicia el número de artículos visibles al cambiar de categoría
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisible) => prevVisible + 10);
  };

  return (
    <div className="flex flex-col">
      <NavBar onSearch={handleSearch} />
      {!isAsideVisible && (
        <button
          className="top-0 left-0 bg-gray-200 px-3 text-black text-2xl py-5 rounded justify-start flex font-bold items-center"
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
        <h1 className="text-4xl bg-gray-200 font-bold py-5 px-6 flex justify-center">
          {selectedCategory ? selectedCategory : 'Noticias Generales'}
        </h1>
        {loading ? (
          <p className='flex justify-center text-xl items-center p-20'> 
          <span><img src="/loading.svg" alt="" className='animate-spin w-10' /></span>
          Cargando noticias...</p>
        ) : (
          <div className="bg-gray-200 px-10 pb-10 rounded-lg flex gap-10 flex-wrap">
            {news.slice(0, visibleArticles).map((article, index) => (
              <div
                key={index}
                onClick={() => handleArticleClick(article)}
                className="w-[600px]  mx-auto my-3 rounded-lg overflow-hidden flex shadow-lg ease-in duration-300 hover:scale-105 cursor-pointer"
              >
                <div
                  className="relative w-full h-96 bg-cover bg-center bg-black"
                  style={{
                    backgroundImage: `url(${article.urlToImage ? article.urlToImage : '/logo-news.png'})`
                  }}
                >
                  <div className="absolute inset-0 flex items-end justify-center text-white bg-black bg-opacity-25">
                    <h2 className="font-bold text-lg text-center">{article.title}</h2>
                  </div>
                </div>
              </div>
            ))}
            {visibleArticles < news.length && (
              <button
                onClick={loadMoreArticles}
                className="mt-5 mx-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                Siguiente
              </button>
            )}
          </div>
        )}
      </div>

      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg relative max-w-3xl">
            <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
              &times;
            </button>
            <div className='flex justify-center'>
              <img
                src={selectedArticle.urlToImage ? selectedArticle.urlToImage : '/logo-news.png'}
                width={600}
                height={400}
                alt={selectedArticle.title}
                className="mb-4 bg-black"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{selectedArticle.title}</h2>
            <p className="mb-4">{selectedArticle.description}</p>
            <a
              href={selectedArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Leer más
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
