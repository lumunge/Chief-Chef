import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import firebase from '../Config/FirebaseConfig';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const history = useHistory();

    const logout = () => {
        firebase.auth().signOut()
            .then(() => {
                localStorage.clear();
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <nav className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <Link to="/"><span className="navbar-brand text-light js-scroll-trigger">Chief Chef</span></Link>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <Link to="/recipes"><li className="nav-item">Recipes</li></Link>
                    <Link to="/about"><li className="nav-item">About</li></Link>
                    </ul>
                </div>
                {user ? (
                    <>
                    <p>Welcome {user}</p>
                    <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    null
                )}
            </div>
        </nav>
    )
}

export default Navbar;