import {Link} from 'react-router-dom';

function ErrorPage() {
    return(
        <div>
            <h1>Invalid Route</h1>
            <Link to='/'>
                <button>Back</button>
            </Link>    
        </div>
    )
}

export default ErrorPage;