import './AddPlayer.css'

function AddPlayer() {
    return(
        <div>
        <h2 className='add-header'>Add Player</h2>
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

export default AddPlayer;