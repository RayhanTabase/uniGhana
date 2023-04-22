import React from 'react';
import { NavLink } from 'react-router-dom';


function NoMatch() {
  return (
    <div className="NoMatch">
      <h1>
        The page you are trying to reach does not exist
      </h1>
      <NavLink
        to="/"
      >
        Home
      </NavLink>
    </div>
  );
}

export default NoMatch;
