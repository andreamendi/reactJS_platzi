/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const App = () => {

  const API = 'http://localhost:3000/initalState/';

  const InitialState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />

      {InitialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {InitialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {InitialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}

        </Carousel>
      </Categories>

      <Categories title='Originales de Platfix '>
        <Carousel>
          {InitialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};
export default App;
