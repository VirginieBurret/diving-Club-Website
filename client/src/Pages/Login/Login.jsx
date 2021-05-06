import React from 'react';
import './login.scss';

const Login = () => {
    return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                 <h4 style={{ fontSize:"50px",fontWeight:"800",color:"#1f55b3",marginBottom:"10px"}}className="loginLogo">SEHVO</h4>
                 <span className="loginDescription">
                     Bienvenue sur l'espace membres du SEHVO
                 </span>
              </div>

              <div className="loginRight">
                 <div className="loginBox">
                    <input placeholder="Email" type="email" className="loginInput"/>
                    <input placeholder="Mot de Passe" type="password" className="loginInput"/>
                    <button className="loginButton">Connexion</button>
                    <span className="loginForgot">Mot de passe oublié</span>
                    <button className="loginRegisterButton">Créer un nouveau compte</button>
                 </div>
              </div>
          </div>
      </div>


    )
}

export default Login;
