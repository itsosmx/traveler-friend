import React, { useEffect, useState } from 'react'
import { BaseLineStyle, Root } from './Styled'
import { Map, Header, Sidebar } from './components'
import { getLoctions } from './api'
function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
  const [bounds, setBounds] = useState({ ne: { lat: 0, lng: 0 }, sw: { lat: 0, lng: 0 } })


  // get user coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    getLoctions(bounds.ne, bounds.sw).then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [coordinates, bounds])


  return (
    <Root>
      <BaseLineStyle />
      <Header />
      <Sidebar places={places} />
      <Map
        places={places}
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
      />
    </Root>
  )
}

export default App
