import './App.css'
import Players from './Players'
import React from 'react';
import PlayersList from './PlayersList';
import Player from './Player';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {

  return (
    <>
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <Players />
      <Player />
      <PlayersList />
    </div>

    </>
  )
}

export default App
