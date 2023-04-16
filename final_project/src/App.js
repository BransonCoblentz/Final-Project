import './App.css';
import Player from './Components/Player';
import Banner from './Components/Banner';
import AddPlayerButton from './Components/AddPlayerButton';
import AddPlayer from './Components/AddPlayer';
import EditPlayer from './Components/EditPlayer'
import RemovePlayer from './Components/RemovePlayer'
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const starterPlayers = [
    {
      id: 'p1',
      name: 'Trae Young',
      position: 'Point Guard',
      stats: '26 3 10',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png'
    }
  ]

 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const handleClick = () => {
  if (!isLoggedIn) {
      setIsLoggedIn(true);
  } else {
      setIsLoggedIn(false);
  }
}

  return (
    <div>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={
            <div>
            <Banner banner isLoggedIn = {isLoggedIn} handleClick = {handleClick}/>
            <Player players = {starterPlayers} isLoggedIn = {isLoggedIn}/>
            <AddPlayerButton isLoggedIn={isLoggedIn}/> 
            </div>
          }/>
          <Route path='/edit-item/:id' element = {<EditPlayer/>}/>
          <Route path='/add-item' element={<AddPlayer/>}/>
          <Route path='/remove-item' element={<RemovePlayer/>}/>
        </Routes>
      </div>
    </Router>
      </div>
      
  );
}

export default App;
