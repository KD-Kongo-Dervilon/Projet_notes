import React from 'react'
import NoteContainer from './components/NoteContainer/NoteContainer';

import Home from './pages/Home ';

const App = () => {
  return (
    <div className='App'>
      <Home/>
      <NoteContainer/>
    </div>
  )
}

export default App