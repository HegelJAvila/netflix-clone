import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signUp } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState("Iniciar Sesión")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {

    event.preventDefault();
    setLoading(true);
    if(signState === "Iniciar Sesión"){
      await login(email, password);
    }else{
      await signUp(name, email, password);
    }
    setLoading(false);
  }

  return (
    loading?<div className="loginSpinner"><img src={netflix_spinner} alt="" /></div>:
    <div className='login'>
      <a href="/"><img src={logo} alt="" className='login-logo' /></a>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Regístrate"?<input value={name} onChange={(e) => {setName(e.target.value)}} type="text" placeholder='Tu Nombre' />:<></>}
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='Email' />
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='Contraseña' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Recuerdame</label>
            </div>
            <p>¿Necesitas Ayuda?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Iniciar Sesión" ?
          <p>¿Primera vez en Netflix? <span onClick={() => {setSignState("Regístrate")}}>Regístrate</span></p> :
          <p>¿Ya tienes una cuenta? <span onClick={() => {setSignState("Iniciar Sesión")}}>Inicia sesión</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
