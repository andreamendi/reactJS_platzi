/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <section className='error'>
      <h2 tabIndex='0' className='error__title'>4🤬4</h2>
      <p tabIndex='0'>Página no encontrada</p>
    </section>
  </>

);

export default NotFound;
