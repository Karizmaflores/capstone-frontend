import { useEffect, useState} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const checkAuth = (token) => {
  if(token.length) {
    return true;
  }

  return false;
};

const ProtectedRoute = (props) => {
  const {component: Component, token, ...rest} = props;

  return checkAuth(token) === true ? (
  <Component {...rest} />
   ) : ( 
   <Navigate to="/signin" />
   );
};

function App() {
  const [token, setToken] = useState("");

  return (
    <>
    <Header />
      <Routes>
        <Route path="/signup" element={<AuthForm formType="signup" />} />
        <Route path="/signin" element={<AuthForm setToken={setToken} formType="signin" />} />
        <Route path="/" element={<ProtectedRoute 
        component={Dashboard} token={token} />} />
      </Routes>
    </>
  )
}

export default App
