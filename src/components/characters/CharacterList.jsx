import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {

    return (
        <ul className="characterList">
            {characters.map((char) => (
                <li key={char.id || char.name}>
                    <CharacterCard character={char} />
                </li>
            ))}
        </ul>
    );
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            name: PropTypes.string.isRequired,
            ki: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            image: PropTypes.string,
            description: PropTypes.string,
        })
    ).isRequired,
};
export default CharacterList;


