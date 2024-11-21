/* import { useState } from 'react';

export default function FilterForm({ onApplyFilters }) {
  const [query, setQuery] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [sortBy, setSortBy] = useState('relevancy');

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyFilters({ query, from, to, sortBy });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="relevancy">Relevancy</option>
        <option value="popularity">Popularity</option>
        <option value="publishedAt">Published At</option>
      </select>
      <button type="submit">Apply Filters</button>
    </form>
  );
} */


  import { useState } from 'react';

  export default function FilterForm({ onApplyFilters, languages, countries, sortOptions }) {
    const [query, setQuery] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [language, setLanguage] = useState('');
    const [country, setCountry] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onApplyFilters({ query, from, to, sortBy, language, country });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Consulta:</label>
          <input
            type="text"
            placeholder="Buscar..."
            value={query}
            className="border p-2 w-full text-black"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Desde:</label>
          <input
            type="date"
            value={from}
            className="border p-2 w-full text-black"
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Hasta:</label>
          <input
            type="date"
            value={to}
            className="border p-2 w-full text-black"
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Ordenar por:</label>
          <select
            value={sortBy}
            className="border p-2 w-full text-black"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Seleccionar</option>
            {sortOptions.map((sort) => (
              <option key={sort} value={sort}>
                {sort}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Idioma:</label>
          <select
            value={language}
            className="border p-2 w-full text-black"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Seleccionar idioma</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">País:</label>
          <select
            value={country}
            className="border p-2 w-full text-black"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Seleccionar país</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Aplicar filtros
        </button>
      </form>
    );
  }
