import { BrowserRouter, Route, Switch, Redirect, Link, useHistory } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import { AppStoreProvider } from './Store';
import PrivateRoute from './PrivateRoute';

function App() {
  const history = useHistory();
  const setIsAuthenticated = (val) =>{
    sessionStorage.setItem('isAuthenticated',true);
  }

  const logout = ()=>{
    sessionStorage.removeItem('isAuthenticated');
    history.push('/login');
  }

  const isAuthenticated = sessionStorage.getItem('isAuthenticated');
  if(!isAuthenticated) return <Login  setIsAuthenticated={setIsAuthenticated} />

  return (
    <>
      <AppStoreProvider>
        <BrowserRouter history={history}>
          <Switch>
            <Route 
              exact
              path="/"
              render ={()=>{
                return (
                  isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />
                )
              }}
            >
            </Route>
            <Route path="/home">
              <Home isAuthenticated={isAuthenticated} logout={logout} />
            </Route>

            <Route exact path="/login" component={Login} />
          </Switch>


        </BrowserRouter>
      </AppStoreProvider>
    </>
  );
}

export default App;
