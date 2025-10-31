import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let enableNext = (index+1) < sculptureList.length;
  let enablePrevious = index > 0;

  function handleNextClick() {
    if (enableNext) {
      setIndex(index + 1);
    }
  }

  function handlePreviousClick() {
    if (enablePrevious) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <div>
      <button onClick={handlePreviousClick} disabled={!enablePrevious}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={!enableNext}>
        Next
      </button>
      </div>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
