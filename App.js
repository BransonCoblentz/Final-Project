import './App.css';
import Player from './Components/Player';
import Banner from './Components/Banner';

function App() {
  const starterPlayers = [
    {
      id: 'p1',
      name: 'Saddiq Bey',
      position: 'Forward',
      stats: '12.2 4.5 1.5',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630180.png'
    },
    {
      id: 'p2',
      name: 'Bogdan Bogdanovic',
      position: 'Shooting Guard',
      stats: '16.4 3.4 3.8',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203992.png'
    },
    {
      id: 'p3',
      name: 'Clint Capela',
      position: 'Center',
      stats: '12.6 12.2 0.6',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203991.png'
    },
    {
      id: 'p4',
      name: 'John Collins',
      position: 'Power Forward',
      stats: '18.3 7.7 1.3',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628381.png'
    },
    {
      id: 'p5',
      name: 'Bruno Fernando',
      position: 'Center',
      stats: '4.0 3.0 0.6',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628981.png'
    },
    {
      id: 'p6',
      name: 'Trent Forrest',
      position: 'Guard',
      stats: '1.5 0.5 0.5',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630235.png'
    },
    {
      id: 'p7',
      name: 'AJ Griffin',
      position: 'Forward',
      stats: 'N/A',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631100.png'
    },
    {
      id: 'p8',
      name: 'Aaron Holiday',
      position: 'Guard',
      stats: '9.9 2.0 1.9',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628988.png'
    },
    {
      id: 'p9',
      name: "De'Andre Hunter",
      position: 'Small Forward',
      stats: '9.9 4.8 2.2',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629631.png'
    },
    {
      id: 'p10',
      name: 'Jalen Johnson',
      position: 'Forward',
      stats: 'N/A',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630552.png'
    },
    {
      id: 'p11',
      name: 'Vit Krejci',
      position: 'Guard',
      stats: 'N/A',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630249.png'
    },
    {
      id: 'p12',
      name: 'Tyrese Martin',
      position: 'Guard',
      stats: 'N/A',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631213.png'
    },
    {
      id: 'p13',
      name: 'Garrison Matthews',
      position: 'Guard',
      stats: '6.7 1.3 0.7',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629726.png'
    },
    {
      id: 'p14',
      name: 'Dejounte Murray',
      position: 'Guard',
      stats: '22.4 8.6 7.1',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627749.png'
    },
    {
      id: 'p15',
      name: 'Onyeka Okongwu',
      position: 'Center',
      stats: '3.6 2.6 0.6',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630168.png'
    },
    {
      id: 'p16',
      name: 'Donovan Williams',
      position: 'Guard',
      stats: 'N/A',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631495.png'
    },
    {
      id: 'p17',
      name: 'Trae Young',
      position: 'Point Guard',
      stats: '25.3 3.9 9.3',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png'
    }
]

  return (
    <div>
      <Banner banner/>
      <div class="roster">
        <Player players = {starterPlayers} />
      </div>
    </div>
  );
}

export default App;
