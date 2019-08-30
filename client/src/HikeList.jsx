import React from 'react';
import HikeItem from './HikeItem';

const HikeList = (props) => {
  const { hikeResults } = props;
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
    {list}
    </div>
  )

}

export default HikeList;