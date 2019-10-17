/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable eol-last */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' /> Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div><img src={googleIcon} alt='Inicia sesión con Google' /> Inicia sesión con Google</div>
        <div><img src={twitterIcon} alt='Inicia sesión con Twitter' /> Inicia sesión con Twitter</div>
      </section>
      <p className='login__container--register'>No tienes ninguna cuenta
        <Link to='/register'>
          Regístrate
        </Link>
      </p>
    </section>
  </section>
);

export default Login;