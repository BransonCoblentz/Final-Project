import Card from './Card';
import './PlayerItem.css';
import EditButton from './EditButton';
import {Link} from "react-router-dom";

function PlayerItem(props) {
    if (!props.edit) {
        return(
        <Card className = 'playerItem'>
            <h2 className='player-item-name'>{props.name}</h2>
            <img src={props.image} alt={props.name} className='player-item-image'/>
            <h3 className='player-item-pos'>{props.position}</h3>
            <h3 className='player-item-stats'>{props.stats}</h3>
        </Card>
    )
        } else {
            return (
            <Card className = 'playerItem'>
            <h2 className='player-item-name'>{props.name}</h2>
            <img src={props.image} alt={props.name} className='player-item-image'/>
            <h3 className='player-item-pos'>{props.position}</h3>
            <h3 className='player-item-stats'>{props.stats}</h3>
            <EditButton id={props.id}/>
            <Link to="/remove-item">
                <button className='remove-button'>-Remove Player</button>
            </Link>
        </Card>
            )
        }
   
}


export default PlayerItem;