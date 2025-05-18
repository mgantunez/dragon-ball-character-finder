import { useState, useEffect } from 'react';

import Header from './layout/Header';
import SearchForm from './search/SearchForm';
import Footer from './layout/Footer';

import '../styles/App.scss';

const baseApiUrl = 'https://www.dragonball-api.com/api';


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

    let url = `${baseApiUrl}?`;

    if (filters.name) {
      url += `name=${encodeURIComponent(filters.name)}&`;
    }

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Error en la respuesta de la API');
        return res.json();
      })
      .then((data) => {
        // Aquí filtras localmente por rango de ki
        const filtered = data.filter((char) => {
          const ki = Number(char.ki) || 0;
          return ki >= Number(filters.kiMin) && ki <= Number(filters.kiMax);
        });
        setCharacters(filtered);
      })
      .catch((err) => {
        setError(err.message);
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
      </main>

      <Footer />
    </div>
  )
}

export default App;




