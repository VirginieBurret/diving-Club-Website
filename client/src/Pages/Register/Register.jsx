import React from 'react';
import './register.scss';

const Register = () => {
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
                    <input placeholder="Pseudo" type="text" className="loginInput"/>
                    <input placeholder="Email" type="email" className="loginInput"/>
                    <input placeholder="Mot de Passe" type="password" className="loginInput"/>
                    <input placeholder="Confirmer le mot de passe" type="password" className="loginInput"/>
                    <button className="loginButton">Inscription</button>
                    <button className="loginRegisterButton">Connexion</button>
                 </div>
              </div>
          </div>
      </div>


    )
}

export default Register;