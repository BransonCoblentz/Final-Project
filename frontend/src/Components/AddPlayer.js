import './AddPlayer.css';
import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {navLink} from 'react-router-dom';

function AddPlayer() {

    const [name, setName] = useState('');
    const [stats, setStats] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
            const newElement = {
                name,
                stats,
                position,
                image
            };
            axios
                .post('http://localhost:3001/api/items', newElement)
                .then((res) => {
                setName('');
                setStats('');
                setPosition('');
                setImage('');

            })
            .catch((err) =>  {
                console.log('Failed to add player: ', err);
            });
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
    <form className='form'>
        <label className='name'>
            Name:
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label className='position'>
            Position:
            <input type='text' value={position} onChange={(e) => setPosition(e.target.value)}/>
        </label>
        <label className='stats'>
            Stats:
            <input type='text' value={stats} onChange={(e) => setStats(e.target.value)}/>
        </label>
        <label className='image'>
            Image:
            <input type='text' value={image} onChange = {(e) => setImage(e.target.value)}/>
        </label>
        <Link to='/'>
        <button class='back'>Back</button>
        </Link>
        <button onClick={handleSubmit} class='submit' type='submit'>Submit</button>
    </form>
    </div>
    )
}

export default AddPlayer;