import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    if (!email || !password) {
      const message = 'Please enter email and password';
      setError(message);
      toast.error(message);
      return;
    }
  
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }
  
      login(data.token, data.user); 
      toast.success('Login successful!');
      navigate('/user');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      console.error('Login error:', err);
    }
  };
  

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login to Your Account</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p className={styles.signupLink}>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
