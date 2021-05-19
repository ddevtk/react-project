import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [key, setKey] = useState(0);
  const sendingData = async () => {
    const res = await fetch(
      'https://tabs-p-data-default-rtdb.asia-southeast1.firebasedatabase.app/tabs.json'
    );
    const dataObj = await res.json();
    const loadedData = [];
    for (const key in dataObj) {
      loadedData.push(...dataObj[key]);
    }
    console.log(loadedData);
    setTabs(loadedData);
    setIsLoading(false);
  };
  useEffect(() => {
    sendingData();
  }, []);
  if (isLoading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  } else {
    const { title, company, dates, duties } = tabs[key];
    return (
      <section className='section'>
        <div className='title'>
          <h2>Experiences</h2>
          <div className='underline' />
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {tabs.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setKey(idx);
                  }}
                  className={`job-btn ${idx === key && 'active-btn'}`}
                >
                  {tab.company}
                </button>
              );
            })}
          </div>
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, idx) => {
              return (
                <div className='job-desc' key={idx}>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    );
  }
}

export default App;
