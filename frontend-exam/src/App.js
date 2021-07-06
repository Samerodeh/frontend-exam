/* import logo from './logo.svg'; */
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Favorite from './Components/Favorite';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/Favorite">
            <Favorite />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
