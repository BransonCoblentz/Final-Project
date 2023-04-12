import Card from './Card';
import PlayerItem from './PlayerItem';

// Converts the array in App into Player Items


function Player(props) {
    const currentPlayers = props;
    return (
    <Card className="player">
        {
            props.players.map(() => (
                <PlayerItem
                    id = {currentPlayers.id}
                    name = {currentPlayers.name}
                    position = {currentPlayers.position}
                    stats = {currentPlayers.stats}
                    image = {currentPlayers.image}
                    />
            ))}
    </Card>
    )
        
}

export default Player;