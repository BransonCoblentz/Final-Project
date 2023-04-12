import './Banner.css'
//Top row that includes the Log In button and title/logo
function Banner() {
    return(
    <div className='banner'>
        <h2 className='title'>Hawks Depth Chart</h2>
        <button className='login'>Log In</button>
    </div>
    )
}

export default Banner;