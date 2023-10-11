import { useNavigate } from 'react-router-dom';
import './register.css';
import { useState } from 'react';
import bcrypt from 'bcryptjs';

function Register() {
  const [id, setId] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (localStorage.getItem(formData.email)) {
      setEmailExists(true);
      console.log('Email already exists');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setPasswordMismatch(true);
      console.log('Passwords do not match');
      return;
    }
    const saltRounds = 10;

    // Hash the password
    bcrypt.hash(formData.password, saltRounds, function (err, hash) {
      if (err) {
        console.error('Error hashing password:', err);
      } else {
        // Save the hashed password in local storage
        localStorage.setItem(formData.email, hash);
        console.log('Registration successful');
      }
    });
    setId(id + 1);
    navigate('/login');
  };

  return (
    <section className="Register">
      <form action="" className="register-form" onSubmit={handleRegistration}>
        <h2>Create Account</h2>
        <input
          type="text"
          name="name"
          placeholder="YOUR NAME"
          value={formData.name}
          onChange={handleInputChange}
          required // Mark the input as required
        />
        <input
          type="email"
          name="email"
          placeholder="YOUR EMAIL"
          value={formData.email}
          onChange={handleInputChange}
          required // Mark the input as required
        />
        {emailExists && <div>Email already exists</div>}
        <input
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={formData.password}
          onChange={handleInputChange}
          required // Mark the input as required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="REPEAT YOUR PASSWORD"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required // Mark the input as required
        />
        {passwordMismatch && <div>Passwords do not match</div>}
        <button type="submit">SIGN UP</button>
        <span className="register-span">Already have an account? Login</span>
      </form>
    </section>
  );
}

export default Register;
