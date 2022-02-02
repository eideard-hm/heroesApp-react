import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/', {replace: true});
  }

  return (
    <div className="container mt-5">
      <h1>Iniciar sesión</h1>
      <hr />

      <button className='btn btn-primary'
        onClick={handleLogin}>
        Iniciar sesión
      </button>

    </div>
  );
};

export default LoginScreen;
