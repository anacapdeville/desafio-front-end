import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Animals from './pages/Animals';
import Admin from './pages/Admin';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/animals" component={ Animals } />
          <Route exact path="/admin" component={ Admin } />
          <Route exact path="/register" component={ Register } />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
