import PropTypes from 'prop-types';

function CharacterList({ characters }) {
    if (!characters.length) {
        return <p>No characters found.</p>;
    }

    return (
        <ul className="character-list">
            {characters.map((char) => (
                <li key={char.id || char.name}>
                    <h3>{char.name}</h3>
                    <p>Ki: {char.ki}</p>

                </li>
            ))}
        </ul>
    );
}

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
};

export default CharacterList;


