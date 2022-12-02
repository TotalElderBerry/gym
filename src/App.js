import './App.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


import LoginPage from "./Pages/LoginPage"
import SignUpPage from "./Pages/SignUpPage"
import HomePage from "./Pages/HomePage"
import AddMemberPage from "./Pages/AddMemberPage"

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
            <Route exact path='/add-member' element={<AddMemberPage />}></Route>
            <Route exact path='/login' element={<LoginPage />}></Route>
            <Route exact path='/signup' element={<SignUpPage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
