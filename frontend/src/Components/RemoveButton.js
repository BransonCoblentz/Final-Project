import {Link} from "react-router-dom";
import axios from 'axios';

function RemoveButton(props) {
    let route = './edit-item/' + props._id;

    const deleteItem = async() => {
        try {
            await axios.delete(`/api/elements/${props.id}`);
        } catch (err) {
            console.log("Failed to remove item");
        }
    };
    return(
    <Link to={route}>
             <button className='remove-button' onClick={deleteItem}>-Remove Player</button>
        </Link>
    );
}

export default RemoveButton;