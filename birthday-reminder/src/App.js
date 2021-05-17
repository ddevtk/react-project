import React, { Fragment, useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [show, setShow] = useState(false);
  return (
    <main>
      <section className='container'>
        {show ? (
          <Fragment>
            <h3>{data.length} birthday today</h3>
            <List people={data} />
          </Fragment>
        ) : (
          ''
        )}
        <button onClick={() => setShow(!show)}>
          {show ? 'Hidden all' : 'Show all'}
        </button>
      </section>
    </main>
  );
}

export default App;
