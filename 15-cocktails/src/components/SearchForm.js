import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const changedHandler = () => {
    setSearchTerm(searchRef.current.value);
  };
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={e => e.preventDefault()}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchRef}
            onChange={changedHandler}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
