import Card from './Card';

function PlayerItem(props) {
    return(
    <Card className = 'playerItem'>
        <h2 className='player-item-name'>{props.name}</h2>
        <img src={props.image} alt={props.name} className='player-item-image'/>
        <h3 className='player-item-pos'>{props.position}</h3>
        <h3 className='player-item-stats'>{props.stats}</h3>

    </Card>
    )
}


export default PlayerItem;