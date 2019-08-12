import React from 'react';
import HikeItem from './HikeItem';

const HikeList = (props) => {
  const { hikeResults } = props;
  let list;
  if (hikeResults) {
    list = (
      <div>
        {hikeResults.map(hike => (
          <HikeItem 
            key={hike.id}
            name={hike.name}
            imgSmallMed={hike.imgSmallMed}
            location={hike.location}
            stars={hike.stars}
            summary={hike.summary}
          />
        ))}
      </div>
    )
    // list=<p>TSTING</p>
  } else {
    list=<div></div>
  }
  return (
    <div>
    {list}
    </div>
  )

}

export default HikeList;