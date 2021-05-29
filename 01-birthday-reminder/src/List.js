/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const List = ({ people }) => {
  // const { id, name, age, image } = people;
  return (
    <div>
      {people.map(person => {
        return (
          <article key={person.id} className='person'>
            <img src={person.image} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
