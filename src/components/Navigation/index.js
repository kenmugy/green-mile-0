import React from 'react';

import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className=' light-green darken-3 z-depth-0'>
      <div className='container nav-wrapper'>
        {/*  eslint-disable-next-line */}
        <a href='#' id='logo' className='brand-logo left'>
          The G M
        </a>
        {/*  eslint-disable-next-line */}
        {/* <a href='#' data-target='mobile-demo' className='sidenav-trigger right'>
          <i className='material-icons'>menu</i>
        </a> */}
        <ul className='right hide-on-med-and-down'>
          <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGNIN}>Signin</Link>
          </li>
          <li>
            <Link to={ROUTES.SUPPLIER}>Supplier</Link>
          </li>
          <li>
            <Link to={ROUTES.LOADER}>Loader</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
          <li>
            <Link to={ROUTES.RECIPIENT}>Recipient</Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
        </ul>
        {/* <ul className='sidenav' id='mobile-demo'>
          <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGNIN}>Signin</Link>
          </li>
          <li>
            <Link to={ROUTES.LOGOUT}>Logout</Link>
          </li>
          <li>
            <Link to={ROUTES.SUPPLIER}>Supplier</Link>
          </li>
          <li>
            <Link to={ROUTES.LOADER}>Loader</Link>
          </li>
          <li>
            <Link to={ROUTES.RECIPIENT}>Recipient</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navigation;
