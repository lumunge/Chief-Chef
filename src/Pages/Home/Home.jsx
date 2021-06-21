import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import firebase from '../../Config/FirebaseConfig';
import {GoogleProvider} from '../../Config/AuthMethods';
import Auth from '../../Services/Auth';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './Home.css';

const Home = () => {

    // const [user, setUser] = useState("");
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();

    const SignIn = async (provider) => {
        await Auth(provider);
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                localStorage.setItem("profile", JSON.stringify(user.displayName));
                history.push("/recipes");
            }else{
                console.log("Please Sign Up");
            }
        })
    }, []);


    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="title">
                <h3 >Hello Friend, Want To try Some New Recipes ?</h3>
                <small>Click on google to begin</small>
            </div>
            <div className="buttonContainer">
                <button className="google" onClick={() => SignIn(GoogleProvider)}><i class="fab fa-google"></i></button>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Home;