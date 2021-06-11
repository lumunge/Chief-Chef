import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import './App.css';
import MealPage from './Pages/MealPage';
import About from './Pages/About';


export default function App(){
  return(
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/meal/:id" component={MealPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

