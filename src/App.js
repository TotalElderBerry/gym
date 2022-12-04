import './App.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { blue,pink } from '@mui/material/colors';

import LoginPage from "./Pages/LoginPage"
import SignUpPage from "./Pages/SignUpPage"
import HomePage from "./Pages/HomePage"
import AddMemberPage from "./Pages/AddMemberPage"
import MemberFormPage from "./Pages/MemberFormPage"
import MemberRenewPage from "./Pages/MemberRenewPage"

import NavBar from './Components/NavBar';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});   


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">

      <NavBar>
      <Router>

        <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
            <Route exact path='/members' element={<AddMemberPage />}></Route>
            <Route exact path='/login' element={<LoginPage />}></Route>
            <Route exact path='/signup' element={<SignUpPage />}></Route>
            <Route exact path='/add-member' element={<MemberFormPage />}></Route>
            <Route exact path='/renew' element={<MemberRenewPage />}></Route>

        </Routes>
      </Router>
      </NavBar>
    </div>
    </ThemeProvider>
  );
}

export default App;
