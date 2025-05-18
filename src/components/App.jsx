import { useState } from 'react';

import Header from './layout/Header';
import SearchForm from './search/SearchForm';
import CharacterList from './characters/CharacterList';
import Footer from './layout/Footer';

import '../styles/App.scss';

const baseApiUrl = 'https://dragonball-api.com/api/characters';

function App() {

  const [filters, setFilters] = useState({
    name: '',
    kiMin: 'Select',
    kiMax: 'Select',
  });

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSearch = () => {

    setHasSearched(true);

    // Validación: Ambos select deben tener valor válido
    if (filters.kiMin === 'Select' || filters.kiMax === 'Select') {
      setError('Please select both Ki Min and Ki Max values.');
      setCharacters([]);
      return;
    }

    const kiMinNum = Number(filters.kiMin);
    const kiMaxNum = Number(filters.kiMax);

    // Validación: evita buscar si el rango de Ki es incorrecto
    if (kiMinNum > kiMaxNum) {
      setError('Invalid Ki range: Minimum Ki cannot be greater than Maximum Ki.');
      setCharacters([]);
      return;
    }

    let url = baseApiUrl;

    setLoading(true);
    setError(null);

    fetch(url)

      .then((res) => {
        if (!res.ok) throw new Error('Error in API response');
        return res.json();
      })

      .then((data) => {
        const charactersArray = data.items || [];
        // Aquí filtro por nombre y rango de ki
        const filtered = charactersArray.filter((char) => {
          const nameMatch = char.name.toLowerCase().includes(filters.name.toLowerCase());

          // Convierte Ki a número y quita los puntos
          const ki = Number(char.ki.replace(/\./g, ''));

          // Si ki no es un número válido, se descarta el personaje
          if (isNaN(ki)) return false;

          // Filtro entre ki min y ki max
          const kiMatch = ki >= kiMinNum && ki <= kiMaxNum;

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
        {!loading && hasSearched && (
          <>
            {error
              ? (
                <h3 className="characterList__title">{error}</h3>
              )
              : characters.length === 0
                ?
                (
                  <h3 className="characterList__title">No results found.</h3>
                ) : (
                  <>
                    <h3 className="characterList__title">
                      {characters.length} result{characters.length > 1 ? 's' : ''} found:</h3>
                    <CharacterList characters={characters} />
                  </>
                )}
          </>
        )}
      </main>

      <Footer />
    </div >
  )
}

export default App;




