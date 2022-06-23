import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'

const Home  = ({handleToggleDarkMode,  handleSearchNote}) => {

    return (
        <div>
            <Header handleToggleDarkMode={handleToggleDarkMode}/>
            <Search handleSearchNote={ handleSearchNote}/>
        </div>
    )
}

export default Home 
