import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../components/redux/Slice';
import bcrypt from 'bcryptjs';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const loginEmail = email;
    const loginPassword = password.toString();

    if (localStorage.getItem(loginEmail)) {
      const storedHashedPassword = localStorage.getItem(loginEmail);
      if (storedHashedPassword) {
        bcrypt.compare(
          loginPassword,
          storedHashedPassword,
          function (err, result) {
            if (err) {
              console.error('Error comparing passwords:', err);
            } else {
              if (result) {
                const user = {
                  isLoggedIn: true,
                  user: {
                    username: name,
                    password: loginPassword,
                  },
                };
                dispatch(login(user));
                navigate('/mainpage');
                setPassError(false);
              } else {
                setPassError(true);
              }
            }
          }
        );
      } else {
        setPassError(true);
      }
    } else {
      setEmailError(true);
    }
  }

  return (
    <section className="Login">
      <form action="" className="Login-form" onSubmit={handleSubmit}>
        <h2>Welcome here</h2>
        <input
          type="text"
          placeholder="YOUR NAME"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="YOUR EMAIL"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <div>Invalid Email</div>}

        <input
          type="password"
          placeholder="YOUR PASSWORD"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passError && <div>Incorrect password!</div>}
        <button type="submit">LOGIN IN</button>

        <span className="Login-span">New user? Click on register </span>
      </form>
    </section>
  );
}

export default Login;
