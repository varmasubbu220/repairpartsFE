import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import spareslogo from '../asserts/NavRParts.png';  
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate=useNavigate()
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={styles.background}>
      <div className="card p-4 shadow-lg" style={styles.card}>
        <div className="text-center mb-4">
          <img src={spareslogo} alt="Spares Logo" className="img-fluid" style={styles.logo} />
        </div>
        {/* <h3 className="text-center mb-4">{isLogin ? 'Login' : 'Sign Up'}</h3> */}
        {isLogin ? (
          <form>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">Email address</label>
              <input type="email" className="form-control" id="loginEmail" required />
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="loginPassword" required />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2" onClick={()=>navigate('/')}>Login</button>
          </form>
        ) : (
          <form>
            <div className="mb-3">
              <label htmlFor="signupEmail" className="form-label">Email address</label>
              <input type="email" className="form-control" id="signupEmail" required />
            </div>
            <div className="mb-3">
              <label htmlFor="signupPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="signupPassword" required />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" required />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2" onClick={()=>navigate('/')}>Sign Up</button>
          </form>
        )}
        <div className="text-center">
          <button type="button" className="btn btn-link" onClick={toggleForm}>
            {isLogin ? 'Create an account' : 'Already have an account?'}
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    background: 'linear-gradient(135deg, rgba(160, 222, 255, 1) 0%, rgba(0, 123, 255, 1) 100%)',
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    minWidth: '300px',
    maxWidth: '400px',
    width: '100%',
    borderRadius: '10px',
  },
  logo: {
    maxWidth: '150px',
    marginBottom: '20px',
  },
};

export default Login;
