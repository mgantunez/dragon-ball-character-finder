import PropTypes from 'prop-types';

function SearchForm({ filters, onInputChange, onSearch }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch();
    };

    // Opciones para los selects de Ki 
    const kiOptions = [
        { value: 'Select', label: 'Select', disabled: true },
        { value: '0', label: '0' },
        { value: '1000000', label: '1.000.000' },
        { value: '50000000', label: '50.000.000' },
        { value: '100000000', label: '100.000.000' },
        { value: '150000000', label: '150.000.000' },
        { value: '200000000', label: '200.000.000' },
        { value: '250000000', label: '250.000.000' },
        { value: '300000000', label: '300.000.000' },
    ];

    // Deshabilitar botón si no hay filtros aplicados
    const isButtonDisabled = filters.kiMin === 'Select' || filters.kiMax === 'Select';



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
                <label className="searchForm__label" htmlFor="kiMin">*Search by Ki</label>

                <select
                    id="kiMin"
                    name="kiMin"
                    value={filters.kiMin}
                    onChange={onInputChange}
                    className="searchForm__select"
                >
                    {kiOptions.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}>
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
                        <option key={option.value}
                            value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <button
                    type="submit"
                    className="searchForm__button"
                    disabled={isButtonDisabled}>
                    Search
                </button>
                <p className="searchForm__requirement">*Please select both Ki Min and Ki Max values.</p>
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