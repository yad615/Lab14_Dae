import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { loginService } from "../services/LoginService";
import './login.css';

const initData = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [data, setData] = useState(initData);

  const onChangeUserName = (e) => {
    setData({ ...data, username: e.target.value });
  };

  const onChangePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await loginService(data);
      login(resp.data);
      navigate("/series");
    } catch (error) {
      window.alert("El usuario o contraseña no es correcto");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              id="username"
              type="text"
              value={data.username}
              onChange={onChangeUserName}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={data.password}
              onChange={onChangePassword}
              required
            />
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input
                id="remember"
                type="checkbox"
              />
              <label htmlFor="remember">Recordarme</label>
            </div>
            <a href="#" className="forgot-password">
              Recuperar Contraseña?
            </a>
          </div>

          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>

        <div className="copyright">
          Copyright © Tecsup 2024
        </div>
      </div>
    </div>
  );
};

export default LoginPage;