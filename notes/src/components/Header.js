import React from 'react';
import Logo from "../assets/img/logo.svg";

const Header = ({ handleToggleDarkMode }) => {

    return (
        <div className='header'>
            <img src={Logo} alt="Logo du site" />
            <h2> Notes </h2>
            <button
                className='save'
                onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
                >
                Mode Sombre
            </button>
        </div>
    )
}

export default Header