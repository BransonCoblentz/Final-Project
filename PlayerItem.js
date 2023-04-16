import React, { useState } from 'react';
import Card from './Card';
import './PlayerItem.css';

function PlayerItem(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card className={`playerItem ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className='player-item-front'>
        <h2 className='player-item-name'>{props.name}</h2>
        <br></br>
        <img src={props.image} alt={props.name} className='player-item-image' />
        <h3 className='player-item-pos'>{props.position}</h3>
        <h3 className='player-item-stats'>{props.stats}</h3>
      </div>
      <div className='player-item-back'>
        <h2>{isFlipped ? 'Test' : ''}</h2>
      </div>
    </Card>
  );
}

export default PlayerItem;
