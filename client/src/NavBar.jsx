import React from 'react';

const NavBar = (props) => {
  const {
    handleClickSignup,
    handleClickHome,
    handleClickLogin,
  } = props;

  return (
    <div>
      <button onClick={() => handleClickHome()}>Home</button>
      <button onClick={() => handleClickSignup()}>Sign Up</button>
      <button onClick={() => handleClickLogin()}>Login</button>
    </div>
  );
};

export default NavBar;