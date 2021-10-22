import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import PaginaPrincipal from './PaginaPrincipal';

function App() {
  let [isLoggedIn,setIsLoggedIn] = useState(false);

  const respuestaGoogle = respuesta => {
    console.log(respuesta);
    setIsLoggedIn(true);
  }

  const respuestaFallidaGoogle = respuesta => {
    console.error(respuesta);
  }

  const renderizacionCondicional = () => {
    if (!isLoggedIn)
      return (<GoogleLogin
        clientId="976259768420-s00hhk4mv0dq0nnpovo5fo0da3iqc23c.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={respuestaGoogle}
        onFailure={respuestaFallidaGoogle}
        cookiePolicy={'single_host_origin'}
      />);
      else 
       return (<PaginaPrincipal/>);
       
  }
  return (
      renderizacionCondicional()
  );
}

export default App;
