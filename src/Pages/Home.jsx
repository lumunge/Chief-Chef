import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import firebase from '../Config/FirebaseConfig';
import {GoogleProvider} from '../Config/AuthMethods';
import Auth from '../Services/Auth';
import Navbar from '../Components/Navbar';

const Home = () => {

    const [user, setUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        <br /><br /><br />
        <div>
            <button onClick={() => SignIn(GoogleProvider)}>Sign In With Google</button>
        </div>
        </>
    )
}

export default Home;