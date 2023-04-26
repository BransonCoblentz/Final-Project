import './App.css';
import Player from './Components/Player';
import Banner from './Components/Banner';
import AddPlayerButton from './Components/AddPlayerButton';
import AddPlayer from './Components/AddPlayer';
import EditPlayer from './Components/EditPlayer'
import RemovePlayer from './Components/RemovePlayer'
import ErrorPage from './Components/ErrorPage';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';


function App() {

 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const handleClick = () => {
  if (!isLoggedIn) {
      setIsLoggedIn(true);
  } else {
      setIsLoggedIn(false);
  }
}

  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/items`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log('Error from Get Item');
      })
  }, []);

const handleListChange = () => {
  axios.get('http://localhos/api/cards')
  .then(res => {
    setItems(res.data);
  })
  .catch(err => console.log("An error occured in list update."));
}

  return (
    <div>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={
            <div>
            <Banner banner isLoggedIn = {isLoggedIn} handleClick = {handleClick}/>
            <div class = "roster">
            <Player players = {items} isLoggedIn = {isLoggedIn}/>
            </div>
            <AddPlayerButton isLoggedIn={isLoggedIn}/> 
            </div>
          }/>
          <Route path='/edit-item/:id' element = {<EditPlayer isLoggedIn={isLoggedIn} handleListChange={handleListChange}/>}/>
          <Route path='/add-item' element={<AddPlayer isLoggedIn={isLoggedIn} handleListChange={handleListChange}/>}/>
          <Route path='/remove-item/:id' element={<RemovePlayer isLoggedIn={isLoggedIn} handleListChange={handleListChange}/>}/>
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </div>
    </Router>
      </div>
      
  );
        
}

export default App;