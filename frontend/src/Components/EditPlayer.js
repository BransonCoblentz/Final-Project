import './EditPlayer.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios'

function EditPlayer(props) {
    const navigate = useNavigate();
    const {id} = useParams();
    return(
        <div>
            <h2>Edit Player</h2>
        <form className='form'>
            <label className='name'>
                Name:
                <input type='text'/>
            </label>
            <label className='position'>
                Position:
                <input type='text'/>
            </label>
            <label className='stats'>
                Stats:
                <input type='text'/>
            </label>
            <label className='image'>
                Image:
                <input type='text'/>
            </label>
        </form>
        </div>
        )
}

export default EditPlayer;