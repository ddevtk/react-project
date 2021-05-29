import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, onRemove, onRefresh }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our tours</h2>
        <div className='underline' />
      </div>
      {tours.length === 0 ? (
        <button className='btn' onClick={onRefresh}>
          Refresh
        </button>
      ) : (
        tours.map(tour => {
          return <Tour key={tour.id} {...tour} onRemoveTour={onRemove} />;
        })
      )}
    </section>
  );
};

export default Tours;
