import './RemovePlayer.css'

function RemovePlayer() {
    return(
        <div>
            <h2 className='remove'>Are you sure you want to remove this item?</h2>
            <div className='buttons'>
            <button className='yes'>Yes</button>
             <button className='no'>No</button>
             </div>
        </div>)

}

export default RemovePlayer;