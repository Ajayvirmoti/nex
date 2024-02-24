import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import styles from './LoginForm.css';
// import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });

    return () => {
      unregisterAuthObserver();
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful!');
      // Redirect to dashboard after successful login
      history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <>
      {
        isSignedIn ? <Navigate to="/dashboard" /> : (
          <div className={styles.loginForm}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        )
      }
    </>
  );
};

export default LoginForm;
