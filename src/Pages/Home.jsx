import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Main from '../Components/Main';
import About from '../Components/About';
import Footer from '../Components/Footer';


export default function Home(){
  return(
    <div>
        <Navbar/>
        <Header/>
        <Main />
        <About />
        <Footer />
    </div>
  )
}