import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import saveUser from '../service/saveStorage';

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
    <main>
      <form>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Digite seu Nome"
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="text"
          placeholder="Digite seu Email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button
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
