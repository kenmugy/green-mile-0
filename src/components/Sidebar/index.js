import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='collection'>
        <li className='collapsible-header'>User</li>
        <li className='collection-item'>
          <NavLink to={ROUTES.REGISTER}>Register users</NavLink>
        </li>
        <li className='collection-item'>
          <NavLink to={ROUTES.REGISTER}>Track Packages</NavLink>
        </li>
        <li className='collection-item'>
          <NavLink to={ROUTES.REGISTER}>Process Packages</NavLink>
        </li>
        <li className='collection-item'>
          <NavLink to={ROUTES.REGISTER}>Track Invoices</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
