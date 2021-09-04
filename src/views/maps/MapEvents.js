import { useState, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const MapEvents = () => {
  const [hasLocation, setHasLocation] = useState(false)
  const [latLng, setLatLng] = useState({
    lat: 51.505,
    lng: -0.09
  })

  const mapRef = useRef()

  const handleClick = () => {
    const map = mapRef.current
    if (map !== null) {
      map.leafletElement.locate()
    }
  }

  const handleLocationFound = e => {
    setHasLocation(true)
    setLatLng(e.latlng)
  }

  const marker = hasLocation ? (
    <Marker position={latLng}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Event Handling</CardTitle>
      </CardHeader>
      <CardBody>
        <p>Click on map to get to your current location.</p>
        <Map
          center={latLng}
          length={4}
          onClick={handleClick}
          onLocationfound={handleLocationFound}
          ref={mapRef}
          zoom={13}
          className='leaflet-map'
        >
          <TileLayer
            attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {marker}
        </Map>
      </CardBody>
    </Card>
  )
}
export default MapEvents
