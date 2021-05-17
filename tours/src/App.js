import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTourHandler = id => {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  };

  const sendingData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        'https://tours-c9143-default-rtdb.asia-southeast1.firebasedatabase.app/tours.json'
      );
      const dataObj = await res.json();
      const data = Object.values(dataObj)[0];
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
    }
  };
  useEffect(() => {
    sendingData();
  }, []);
  const refreshPageHandler = () => {
    sendingData();
  };
  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <Tours
          tours={tours}
          onRemove={removeTourHandler}
          onRefresh={refreshPageHandler}
        />
      )}
    </main>
  );
}

export default App;
