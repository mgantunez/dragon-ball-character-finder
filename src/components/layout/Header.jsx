import headerImage from '../../images/Dragon_Ball_Z_Logo.png';

function Header() {

    return (
        <header className="header">
            <h1 className="header__title">Dragon Ball character finder</h1>
            <img className="header__image" src={headerImage} alt="Dragon Ball Z logo" />
        </header>
    );

}

export default Header;