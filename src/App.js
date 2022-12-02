import './App.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


import LoginPage from "./Pages/LoginPage"
import SignUpPage from "./Pages/SignUpPage"
import HomePage from "./Pages/HomePage"


function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
            <Route exact path='/login' element={<LoginPage />}></Route>
            <Route exact path='/signup' element={<SignUpPage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
