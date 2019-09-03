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

  let currentUserHandle = currentUser.split('@')[0];

  return(
    <div className='searchContainer'>
      <div className='searchGreeting'>WELCOME {currentUserHandle}!<br/>FIND YOUR NEXT OUTDOOR ADVENTURE</div>
      <form className='searchForm'>
        <input type="text" placeholder="Where to next?" value={searchTerm} onChange={(e)=>handleSearch(e)}/>
        <button type="submit" onClick={(e, searchTerm)=>submitSearch(e, searchTerm)}>SUBMIT</button>
      </form>

      <div>
        <HikeList hikeResults={hikeResults} />
      </div>
    </div>
  )
};

export default SearchHikes;