import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (<main>
    <section className="container">
      <h3>
        {people.length} birthdays today
        <List people={people}/>
      </h3>
      <button type='button' className='btn btn-block' onClick={() => setPeople([])}>
        clear list
      </button>
    </section>
  </main>)
}

export default App;
