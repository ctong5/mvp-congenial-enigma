import React from 'react';

const Signup = () => {
  return (
    <div>
      <form>
        <input type="text" name="firstname" />
        <input type="text" name="lastname" />
        <input type="text" name="email" /> 
        <input type="text" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default Signup;