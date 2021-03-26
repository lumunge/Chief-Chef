import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Footer from './Components/Footer';
import './App.css';


export default function App(){
  return(
    <div className="container">
      <Navbar/>
      <Header/>
      <Main />
      <About />
      <Footer />
    </div>
  )
}