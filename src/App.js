import React, { useState } from 'react';
import LoginForm from './LoginForm';
import LoggedInPage from './LoggedInPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ProblemPage from './ProblemPage';
import {
  BrowserRouter ,
  Routes,
  Link,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  

  return (
    <>
    <BrowserRouter>
    {/* <Link exact="true" to="/">Home</Link>
        <Link to="/SignUp">Sign Up</Link> */}
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginForm />} />
          <Route
         
          path="/LoginForm"
          element={<LoginForm />} />
          <Route
          path="/SignUp"
          element={<SignUp />}/>
          <Route
          path="/SignIn"
          element={<SignIn />}/>
          <Route
          path="/ProblemPage"
          element={<ProblemPage />}/>
           <Route
          path="/LoggedInPage"
          element={<LoggedInPage />}/>
      </Routes>
   
      </BrowserRouter>
      </>
  );
}

export default App;
