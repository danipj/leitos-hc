import React from "react";
import ValidatedLoginForm from "./components/ValidatedLoginForm";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  function handleLogin(token){
    localStorage.setItem('token', token);
    history.push('main');
  }

  return (
    <div>
      <h1>Mapa de Leitos</h1>
      <ValidatedLoginForm onLogin={(token) => handleLogin(token)}/>
    </div>
  );
}

export default LoginPage;
