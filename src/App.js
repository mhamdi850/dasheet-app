import React from 'react';
import data from './data';

function App() {
  return (
    <div>
      <h1>DA SHEET</h1>
      {
        data.countries.map(country => (
          <div key = {country._id}>
            <a href={`/country/${country._id}`}>
              <h2>{country.country}</h2> 
            </a>
          </div>
        ))
      }
    </div>
     
   
  );
}

export default App;
