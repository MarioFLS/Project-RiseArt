import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { saveUser } from '../service/saveStorage';
import icon from '../image/icon.png';
import '../css/Login.css';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const verifyUser = () => {
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validateEmail.test(email) || password.length <= 5 || name.length <= 2) {
      return true;
    }
  };
  const handleClickLogin = (event) => {
    event.preventDefault();
    saveUser(name, email);
    history.push('/home');
  };
  return (
    <main className="main-login">
      <form className="form-login">
        <img className="icon-login" src={icon} alt="Icone do Site" />
        <div className="container-inputs">
          <input
            type="text"
            placeholder="Digite seu Nome"
            onChange={({ target }) => setName(target.value)}
          />
          <input
            type="email"
            placeholder="Digite seu Email"
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <button
          className="btn-user"
          type="submit"
          disabled={verifyUser()}
          onClick={handleClickLogin}
        >
          Login

        </button>
      </form>
    </main>
  );
}

export default Login;
