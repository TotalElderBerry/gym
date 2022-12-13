import './App.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { blue,pink } from '@mui/material/colors';

import LoginPage from "./admin/Pages/LoginPage"
import SignUpPage from "./admin/Pages/SignUpPage"
import HomePage from "./admin/Pages/HomePage"
import AddMemberPage from "./admin/Pages/AddMemberPage"
import MemberFormPage from "./admin/Pages/MemberFormPage"
import MemberRenewPage from "./admin/Pages/MemberRenewPage"
import WalkInFormPage from "./admin/Pages/WalkInFormPage"
import RevenuePage from "./admin/Pages/RevenuePage"
import MembershipPlanPage from "./admin/Pages/MembershipPlanPage"

import NavbarLayout from './Components/NavbarLayout';

import ForgotPassword from "./user/ForgotPassword"
import UserLogin from "./user/UserLogin"
import UserWalkInFormPage from "./user/WalkInFormPage"


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
    <Router>
      <Routes>
        <Route exact path='/admin/login' element={<LoginPage />}></Route>
        <Route exact path='/admin/signup' element={<SignUpPage />}></Route>
      </Routes>
    </Router>

    <Router>
      <Routes>
        <Route exact path='/' element={<UserLogin />}></Route>
        <Route exact path='/forgot' element={<ForgotPassword />}></Route>
        <Route exact path='/form' element={<UserWalkInFormPage />}></Route>
      </Routes>
    </Router>


      <Router>

        <Routes>
          <Route element={<NavbarLayout />}>
            <Route exact path='/admin/' element={<HomePage />}></Route>
            <Route exact path='/admin/members' element={<AddMemberPage />}></Route>
            <Route exact path='/admin/select' element={<MembershipPlanPage />}></Route>
            <Route exact path='/admin/add-member' element={<MemberFormPage />}></Route>
            <Route exact path='/admin/renew' element={<MemberRenewPage />}></Route>
            <Route exact path='/admin/walkin-payment' element={<WalkInFormPage />}></Route>
            <Route exact path='/admin/revenue' element={<RevenuePage />}></Route>
            </Route>
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
