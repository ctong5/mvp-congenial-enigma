import React from 'react';

const HikeItem = (props) => {
  const {
    name,
    imgMedium,
    location,
    stars,
    summary,
  } = props;

  return (
    <div className='hikeitemContainer'>
        
        <div className='item'>

          <div className='hikeImgName'>
            <img className='hikeImg' src={imgMedium} alt={`${name}`}/>
            <div className='hikeName'>{name}</div>
          </div>

          <div className='hikeDetails'>
            <div>{location}</div>
            <br/>
            <div>Rating: {stars}</div>
            <br/>
            <div>{summary}</div>
          </div>

        </div>


    </div>
  )
}

export default HikeItem;