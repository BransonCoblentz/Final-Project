import './App.css';
import Player from './Components/Player';

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
      <h1 className='title'>Hawks Depth Chart</h1>
      <Player players = {starterPlayers} />
      </div>
  );
}

export default App;
