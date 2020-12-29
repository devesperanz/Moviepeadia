import React from 'react';
import { NavLink } from 'react-router-dom';

function Content() {
  return (
    <div>
      <div className='content'>
        <div className='banner-content'>
          <div className='banner-content-info'>
            <h1>Consonance Club</h1>
            <p className='banner-description'>
              Kate Pierce is reluctantly spending Christmas with her mom’s new
              boyfriend and his son Jack. But when the North Pole and Christmas
              are threatened to ...
            </p>
            <button className='banner-btn'>View</button>
            <button className='banner-btn'>My List</button>
          </div>
          <div className='banner-fade-buttom'></div>
        </div>
        <div className='content-navbar'>
          <NavLink exact activeClassName='active' to='/'>
            Nowshowing
          </NavLink>
          <NavLink activeClassName='active' to='/upcoming'>
            Upcoming
          </NavLink>
          <NavLink activeClassName='active' to='/toprated'>
            TopRated
          </NavLink>
          <NavLink activeClassName='active' to='/popular'>
            Popular
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Content;
