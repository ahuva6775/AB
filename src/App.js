import logo from './logo.svg';
import './App.css';
import Part1 from './components/Part1';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Hello from './components/Hello';
import Avvvv from './components/Avvvv';
import All from './components/All';
import Login from './components/Login';
import Pizza from './components/Pizza';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AddUser from './components/AddUser';
import Nav from './components/Nav';




function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>


            <Route path='/nav'>
              {/* <Login></Login> */}
              {/* <Login></Login> */}
              <Nav></Nav>
            </Route>

            <Route exact path='/addUser'>

              <AddUser></AddUser>
            </Route>

            <Route exact path='/'>
              <Login></Login>
            </Route>


          </Switch>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
