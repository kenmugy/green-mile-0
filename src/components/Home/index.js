import React from 'react';
import img from '../../assets/images/lydia7.jpg';

const Home = () => {
  return (
    <div className='card-panel light-green lighten-4'>
      <h1>Home Component</h1>
      <div class='chip'>
        <img src={img} alt='Contact Person' />
        Lydia j
      </div>
    </div>
  );
};

export default Home;
