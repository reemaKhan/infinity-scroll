import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import PrivateRoute from './PrivateRoute';
import Hats from "./components/Hat";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

const theme = createTheme();

function App() {

  console.log(theme);
  const setIsAuthenticated = (val) => {
    sessionStorage.setItem('isAuthenticated', true);
  }


  const LoginComp = (props) => <Login {...props} setIsAuthenticated={setIsAuthenticated} />
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route
          exact
          path="/"
          render={
            (props) => {
              return (
                isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />
              )
            }
          }
        />
        <PrivateRoute path="/home" comp={Home} />
        <Route path="/login" component={LoginComp} />
        <PrivateRoute path="/hats" comp={Hats} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
