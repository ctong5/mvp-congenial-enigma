import React from 'react';

const NavBar = (props) => {
  const {
    handleSignUpClick,
  } = props;

  return (
    <div>
      <button>Home</button>
      <button onClick={() => handleSignUpClick()}>Sign Up</button>
      <button>Login</button>
    </div>
  );
};

export default NavBar;