import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <NavLink
        style={(isActive) => ({ color: isActive ? 'red' : '#fff' })} to={'/todo'}    
      >
        TodoList
      </NavLink>
       | 
      <NavLink
        style={(isActive) => ({ color: isActive ? 'red' : '#fff' })} to={'/todo'}    
      >
        Flex
      </NavLink>
    </>
  )
}

export default Nav;