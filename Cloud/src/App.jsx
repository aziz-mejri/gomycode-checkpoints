import React from 'react'

import MapSection from './components/map/Map' 
import FooterSection from './components/footer/Footer'

import './App.css'

const location = {
  address: 'GoMyCode Hackerspace, 1 Place Tahar Haddad, 1 Tunis 1053, Tunis 1053',
  lat: 36.83572299793191,
  lng: 10.238868185136853,
} // our location object from earlier

const App = () => (
  <div className="App">
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    <FooterSection />
  </div>
)

export default App
