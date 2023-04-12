import Card from './Card';
import PlayerItem from './PlayerItem';

// Converts the array in App into Player Items


function Player(props) {
    const currentPlayers = props;
    return (
    <Card className="player">
        {
            props.players.map((player) => (
                <PlayerItem
                    id = {player.id}
                    name = {player.name}
                    position = {player.position}
                    stats = {player.stats}
                    image = {player.image}
                    />
            ))}
    </Card>
    )
        
}

export default Player;