
import './App.css';
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router-dom';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

export const history = createBrowserHistory()


function App() {

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <HomeTemplate path='/' exact Component={Home} />
          <HomeTemplate path="/home" exact Component={Home} />
          <HomeTemplate path="/login" exact Component={Login} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
