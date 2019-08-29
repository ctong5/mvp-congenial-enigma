import React from 'react';

const Landing = (props) => {
  const {
    handleSearch,
    submitSearch,
    searchTerm
  } = props;

  return(
    <div>
      <h2>It's a beautiful day. Find your next outdoor adventure...</h2>
      <form>
        <input type="text" placeholder="Where to next?" value={searchTerm} onChange={(e)=>handleSearch(e)}/>
        <input type="submit" value="Submit" onClick={(e, searchTerm)=>submitSearch(e, searchTerm)}/>
      </form>
    </div>
  )
};

export default Landing;