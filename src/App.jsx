import { useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css'

import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';


function App() {
  useEffect(() => {}, [] );

  return (
    <>
      <Routes>
        <Route path="/signup" element={<AuthForm formType="signup" />} />
        <Route path="/signin" element={<AuthForm formType="signin" />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
