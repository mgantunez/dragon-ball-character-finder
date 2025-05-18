import { useEffect, useState } from 'react';

import Header from './layout/Header';
import SearchForm from './search/SearchForm';
import CharacterList from './characters/CharacterList';
import Footer from './layout/Footer';

import '../styles/App.scss';

const baseApiUrl = 'https://dragonball-api.com/api/characters';

function App() {

  const [filters, setFilters] = useState({
    name: '',
    kiMin: '0',
    kiMax: '100000000000',
  });

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSearch = () => {

    let url = baseApiUrl;
    const params = [];

    if (filters.name) {
      params.push(`name=${encodeURIComponent(filters.name)}`);
    }

    if (params.length > 0) {
      url += `?&${params.join('&')}`;
    }

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Error in API response');
        return res.json();
      })
      .then((data) => {
        // Aquí filtro por rango de ki
        const filtered = data.filter((char) => {
          const nameMatch = char.name.toLowerCase().includes(filters.name.toLowerCase());
          const ki = Number(char.ki) || 0;
          const kiMatch = ki >= Number(filters.kiMin) && ki <= Number(filters.kiMax);
          return nameMatch && kiMatch;
        });
        setCharacters(filtered);
      })
      .catch((err) => {
        setError(err.message);
        setCharacters([]); // limpia lista si hay error
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (

    <div>
      <Header />

      <main>
        <SearchForm
          filters={filters}
          onInputChange={onInputChange}
          onSearch={onSearch}
        />

        {loading && <p>Loading characters...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <>
            {characters.length === 0 ? (
              <h3>No results found.</h3>
            ) : (
              <h3>{characters.length} result{characters.length > 1 ? 's' : ''} found</h3>
            )}
            <CharacterList characters={characters} />
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App;




