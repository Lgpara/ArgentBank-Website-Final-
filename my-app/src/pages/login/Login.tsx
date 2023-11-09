import Axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { storeToken } from "../../app/slices/TokenSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logForm = useRef();

  const token = useSelector((state) => state.token);

  function handleSubmit(e) {
    e.preventDefault();
    const logs = {
      email: logForm.current[0].value,
      password: logForm.current[1].value,
    };
    Axios.post('http://localhost:3001/api/v1/user/login', logs)
      .then(response => {
        localStorage.setItem("token", response.data.body.token);
        dispatch(storeToken(response.data.body.token));

        console.log(token);
        navigate("/profile");
      })
      .catch(error => {
        window.alert("Vos identifiants de connexion sont incorrects, veuillez réessayer.");
        console.log(error);
      });
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={logForm} onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="mail" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
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
  );
}
