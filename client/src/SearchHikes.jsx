import React from 'react';
import HikeList from './HikeList';

const SearchHikes = (props) => {
  const {
    handleSearch,
    submitSearch,
    searchTerm,
    hikeResults,
    currentUser,
  } = props;

  return(
    <div>
      <h2>Welcome {currentUser}!</h2>
      <h4>It's a beautiful day. Find your next outdoor adventure...</h4>
      <form>
        <input type="text" placeholder="Where to next?" value={searchTerm} onChange={(e)=>handleSearch(e)}/>
        <input type="submit" value="Submit" onClick={(e, searchTerm)=>submitSearch(e, searchTerm)}/>
      </form>

      <div>
        <HikeList hikeResults={hikeResults} />
      </div>
    </div>
  )
};

export default SearchHikes;