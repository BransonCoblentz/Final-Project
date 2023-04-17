import './EditPlayer.css'

function EditPlayer(props) {
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