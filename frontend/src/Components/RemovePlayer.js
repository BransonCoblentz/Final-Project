import axios from 'axios';
import './RemovePlayer.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from 'react';

function RemovePlayer(props) {
    const navigate = useNavigate();
    const {id} = useParams();
    const deletePlayer = () => {
        if (props.isLoggedIn) {
        axios
            .delete(`http://localhost:3001/api/items/${id}`)
            .then((res) => {
                console.log('Deleted item');
                props.handleListChange();
            })
            .catch((err) => {
                console.log('Error from deleteItem');
            });

            axios
                .get(`http://localhost:3001/api/items`)
                .then((res) => {
                    props.setItems(res.data);
                })
            navigate('/');

        } else {
            alert('You do not have access to delete this player! Please sign in.');
            navigate('/');
        }
    }
    return(
        <div>
            <h2 className='remove'>Are you sure you want to remove this player?</h2>
            <div className='buttons'>
            <Link to='/'>
            <button className='yes' onClick={deletePlayer}>Yes</button>
             <button className='no'>No</button>
             </Link>
             </div>
        </div>)

}

export default RemovePlayer;