import Axios from "axios"
import { useRef } from "react"
import { useNavigate } from 'react-router-dom';


export default function Login(){

  const navigate = useNavigate()
  const logForm = useRef()

  //Envoie de la requete de connexion a l'API avec récupération du token + mise du token dans le local storage
  function handleSubmit(e){
    e.preventDefault()
    const logs = {
      email: logForm.current[0].value,
      password: logForm.current[1].value
    }
    Axios.post('http://localhost:3001/api/v1/user/login', logs)
      .then(response => {
        localStorage.setItem("token", response.data.body.token)
        navigate("/profile")
      })
      .catch(error => {
        window.alert("Vos identifiants de connexion sont incorrects, veuillez réessayer.")
      })
  }
    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form ref={logForm} onSubmit={(e) => handleSubmit(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="mail" id="username"/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password"/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
    )
}

