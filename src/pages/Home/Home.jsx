import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import News from '../../components/News/News';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
    <FeaturedProducts type="featured"/>
    <FeaturedProducts type="trending"/>
    <FeaturedProducts type="arrival"/>
    <News/>
  </div>
  );
};

export default Home;
