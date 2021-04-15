// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';

function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        address= "50 California St."
        image= "50-california-st.jpg"
      />
      <POPOSSpace
        name="101 California Street"
        address= "101 California St."
        image= "101-california.jpg"
        />
      <POPOSSpace
      name="555 California Street"
      address= "555 California St."
      image= "555-california.jpg"
      />
      <POPOSSpace
      name="525 Market Street Plaza"
      address= "525 Market St."
      image= "525-market-street-plaza.jpg"
      />
      <POPOSSpace
      name="Garden Terrace"
      address= "150 California St."
      image= "garden-terracee-at-150-california.jpg"
      />
      <POPOSSpace
      name="Embarcadero Center"
      address= "Embarcadero Center"
      image= "embarcadero-center.jpg"
      />
      <h1>Keep your eye on this space for future content...</h1>
    </div>
  )
}

export default POPOSList
