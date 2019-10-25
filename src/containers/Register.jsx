/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../assets/styles/components/Register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input 
            name='name'
            className='input' 
            type='text' 
            placeholder='Nombre' 
            onChange={handleInput}
          />
          <input 
            name='email'
            className='input' 
            type='text' 
            placeholder='Correo' 
            onChange={handleInput}
          />
          <input 
            name='password'
            className='input' 
            type='password' 
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button'>Registrarme</button>
        </form>
        <Link to='/login'>
          Iniciar sesión
        </Link>
      </section>
    </section>
  );
};

export default Register;