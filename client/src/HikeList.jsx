import React from 'react';
import HikeItem from './HikeItem';

const HikeList = (props) => {
  const {
    hikeResults,
    searchTerm,
    prevSearchTerm,
  } = props;

  let summary;
  if (hikeResults.length) {
    summary = (
      <div>{hikeResults.length} SEARCH RESULTS FOR {prevSearchTerm}</div>
    )
  } else {
    summary = null;
  }

  let list;
  if (hikeResults) {
    list = (
      <div className="hikelist">
        {hikeResults.map(hike => (
          <HikeItem 
            key={hike.id}
            name={hike.name}
            imgMedium={hike.imgMedium}
            location={hike.location}
            stars={hike.stars}
            summary={hike.summary}
          />
        ))}
      </div>
    )
  } else {
    list=<div></div>
  }

  return (
    <div>
      <div>
        {summary}
      </div>

      <div>
        {list}
      </div>
    </div>
  )

}

export default HikeList;