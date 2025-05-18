import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function CharacterCard({ character }) {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => setShowDetails(!showDetails);

    return (
        <div className="characterCard">
            <div className="characterCard__header" onClick={toggleDetails} role="button">
                <span className="characterCard__name">{character.name}</span>
                <span className="characterCard__ki">{character.ki}</span>
                <FontAwesomeIcon
                    icon={showDetails ? faCaretUp : faCaretDown}
                    className="characterCard__caret"
                    aria-label={showDetails ? "Hide details" : "Show details"}
                />
            </div>

            {showDetails && (
                <div className="characterCard__details">
                    {character.image && (
                        <img src={character.image} alt={character.name} className="characterCard__image" />
                    )}
                    <p className="characterCard__description">{character.description}</p>
                </div>
            )}
        </div>
    );
}

CharacterCard.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string.isRequired,
        ki: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        image: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
};

export default CharacterCard;
