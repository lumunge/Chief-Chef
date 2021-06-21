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
                <div className="navRight">
                    <div>
                    {user ? (
                    <>
                    <span className="profile">{user} &nbsp; <button className="logout" onClick={logout}><i class="fas fa-power-off"></i></button></span>
                    </>
                ) : (
                    null
                )}
                    </div>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded ml-4" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <div className="navbar-nav ml-auto">
                    <Link to="/recipes"><span className="nav-item">Recipes</span></Link>
                    <Link to="/about"><span className="nav-item">About</span></Link>
                    </div>
                </div>
                {/* {user ? (
                    <>
                    <span className="profile">{user} &nbsp; <button className="logout" onClick={logout}><i class="fas fa-power-off"></i></button></span>
                    </>
                ) : (
                    null
                )} */}
            </div>
        </nav>
    )
}

export default Navbar;