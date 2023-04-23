import './AddPlayer.css';
import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function AddPlayer() {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        stats: '',
        image:''
    });

    const handleSubmit = async(e) => {
        try {
            const response = await axios.post('/', formData);
        } catch (error) {
            console.error('Unable to add player item: ', error);
        }
    };

/*    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    } */
    return(
        <div>
        <h2 className='add-header'>Add Player</h2>
    <form onSubmit={handleSubmit} className='form'>
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
        <Link to='/'>
        <button class='submit' type='submit'>Submit</button>
        </Link>
    </form>
    </div>
    )
}

export default AddPlayer;