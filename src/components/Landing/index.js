import React from 'react';

const Landing = () => {
  return (
    <div className='card-panel light-green lighten-4'>
      <h1>Landing Component</h1>
      <form action=''>
        <select className='browser-default'>
          <option value='' disabled selected>
            Choose your option
          </option>
          <option value='1'>Admin</option>
          <option value='2'>Supplier</option>
          <option value='3'>Loader</option>
        </select>
        <div className='input-field'>
          <input type='password' name='' id='pw' />
          <label htmlFor='pw'>Password</label>
        </div>
        <div className='input-field'>
          <input id='text' type='text' className='validate' />
          <label for='text'>Track ID</label>
        </div>
      </form>
    </div>
  );
};

export default Landing;
