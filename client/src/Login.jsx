import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <input type="text" name="email" placeholder="email"/>
        <input type="text" name="password" placeholder="password"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default Login;