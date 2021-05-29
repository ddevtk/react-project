import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(3);
  const { id, name, job, text, image } = people[index];

  const checkNumber = num => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const preIndexHandler = () => {
    setIndex(preIndex => {
      return checkNumber(preIndex - 1);
    });
  };
  const nextIndexHandler = () => {
    setIndex(preIndex => {
      return checkNumber(preIndex + 1);
    });
  };
  const randomNum = () => {
    let randomNum = Math.trunc(Math.random() * people.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='text'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={preIndexHandler}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextIndexHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomNum}>
        Random
      </button>
    </article>
  );
};

export default Review;
