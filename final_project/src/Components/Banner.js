import './Banner.css'

//Top row that includes the Log In button and title/logo


function Banner(props) {
    let admin = props.isLoggedIn;
    let logInText ="";
    if (!admin) logInText = "Log In";
    if (admin) logInText = "Log Out";
   // if (!admin)  {
    return(
    <div className='banner'>
        <h2 className='title'>Hawks Roster</h2>
        <button onClick={props.handleClick} className='login'>{logInText}</button>
    </div>
    );
}

export default Banner;