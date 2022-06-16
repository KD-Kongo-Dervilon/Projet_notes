import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

const Search = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchNote = (e) => {
        setSearchText(e.target.value);
    }


    return (
        <div className='search'>
			<MdSearch  className='search-icons' size='1.3em' />
			<input
                onChange={handleSearchNote}
				type='text'
				placeholder='entre ta recherche...'
			/>
		</div>
    )
}

export default Search