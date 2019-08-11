import React from 'react';

const Signup = () => {
  return (
    <div>
      <form>
        <input type="text" name="firstname" placeholder="Firstname" />
        <input type="text" name="lastname" placeholder="Lastname" />
        <input type="text" name="email" placeholder="Email" /> 
        <input type="text" name="password" placeholder="Password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default Signup;