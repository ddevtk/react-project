import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [value, setValue] = useState();
  const [title, setTitle] = useState();
  const [person, setPerson] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPerson = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    const person = data.results[0];
    const {
      phone,
      email,
      login: { password },
      picture: { large: image },
      name: { first, last },
      location: {
        street: { name, number },
      },
      dob: { date },
    } = person;
    const birthday = new Date(date);
    const newPerson = {
      image,
      name: `${first} ${last}`,
      email,
      birthday: `${birthday.getDate()}/${birthday.getMonth()}/${birthday.getFullYear()}`,
      address: `${number} ${name}`,
      phone,
      password,
    };
    setPerson(newPerson);
    setIsLoading(false);
    setTitle('name');
    setValue(newPerson.name);
  };

  useEffect(() => {
    getPerson();
  }, []);

  const handleValue = e => {
    if (e.target.classList.contains('icon')) {
      const value = e.target.dataset.label;
      setTitle(value);
      setValue(person[value]);
    }
  };

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(person && person.image) || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button
              className='icon'
              onMouseOver={handleValue}
              data-label='name'
            >
              <FaUser />
            </button>
            <button
              className='icon'
              onMouseOver={handleValue}
              data-label='email'
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className='icon'
              onMouseOver={handleValue}
              data-label='birthday'
            >
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              onMouseOver={handleValue}
              data-label='address'
            >
              <FaMap />
            </button>
            <button
              className='icon'
              onMouseOver={handleValue}
              data-label='phone'
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              onMouseOver={handleValue}
              data-label='password'
            >
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' onClick={() => getPerson()}>
            {isLoading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
