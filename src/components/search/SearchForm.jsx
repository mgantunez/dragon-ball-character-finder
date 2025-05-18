import PropTypes from 'prop-types';

function SearchForm({ filters, onInputChange, onSearch }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch();
    };

    // Opciones para los selects de Ki 
    const kiOptions = [
        { value: '', label: 'Select' },
        { value: '0', label: '0' },
        { value: '1000000', label: '1,000,000' },
        { value: '10000000', label: '10,000,000' },
        { value: '20000000', label: '20,000,000' },
        { value: '40000000', label: '40,000,000' },
        { value: '60000000', label: '60,000,000' },
        { value: '80000000', label: '80,000,000' },
        { value: '100000000', label: '100,000,000' },
    ];

    return (

        <form className="searchForm" onSubmit={handleSubmit}>
            <h2 className="searchForm__title">What Dragon Ball character are you looking for?</h2>

            <div className="searchForm__fields">


                {/* Nombre del personaje */}
                <label className="searchForm__label" htmlFor="name">Search by name</label>
                <input
                    className="searchForm__input"
                    type="text"
                    name="name"
                    placeholder="Goku"
                    value={filters.name}
                    onChange={onInputChange}
                />

                {/* Rango de KI */}
                <label className="searchForm__label" htmlFor="kiMin">Search by Ki</label>

                <select
                    id="kiMin"
                    name="kiMin"
                    value={filters.kiMin}
                    onChange={onInputChange}
                    className="searchForm__select"
                >
                    {kiOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <select
                    id="kiMax"
                    name="kiMax"
                    value={filters.kiMax}
                    onChange={onInputChange}
                    className="searchForm__select"
                >
                    {kiOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <button type="submit" className="searchForm__button">
                    Search
                </button>
            </div>
        </form>
    );
}

SearchForm.propTypes = {
    filters: PropTypes.shape({
        name: PropTypes.string.isRequired,
        kiMin: PropTypes.string.isRequired,
        kiMax: PropTypes.string.isRequired,
    }).isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default SearchForm;