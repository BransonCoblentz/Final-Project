import './App.css';
import Player from './Components/Player';
import Banner from './Components/Banner';

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

  return (
    <div>
      <Banner banner/>
      <Player players = {starterPlayers} />
      </div>
  );
}

export default App;
