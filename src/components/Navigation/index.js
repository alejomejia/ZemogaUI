import React from 'react';
import { NavLink } from 'react-router-dom';

import { Root } from './styles';

const Navigation = () => {
  return (
    <Root>
      <ul className="navigation__wrapper">
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/past-trials">
            Past Trials
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/how-it-works">
            How It Works
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/login">
            Login / Sign Up
          </NavLink>
        </li>
        <li className="navigation__item">
          <i className="navigation__icon fas fa-search"></i>
        </li>
      </ul>
    </Root>
  );
};

export default Navigation;
