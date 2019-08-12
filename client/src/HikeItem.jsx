import React from 'react';

const HikeItem = (props) => {
  const {
    name,
    imgSmall,
    location,
    stars,
    summary,
  } = props;
  return (
    <div>
      <div>{name}</div>
      <div>{imgSmall}</div>
      <div>{location}</div>
      <div>{stars}</div>
      <div>{summary}</div>
    </div>
  )
}

export default HikeItem;