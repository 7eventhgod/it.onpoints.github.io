"use client"

import { Map, Marker } from "pigeon-maps"
import { useRef, useState, useEffect } from 'react'

const PigeonMap = () => {
  const position: [number, number] = [40.3515607, 49.8320842] // Coordinates for Sabah Residence
  const googleMapsUrl = `https://www.google.com/maps/place/Sabah+Residence/@40.3506373,49.8368512,14z/data=!4m6!3m5!1s0x40307d01fac64e89:0x84ad7cfa1113f36b!8m2!3d40.3515607!4d49.8320842!16s%2Fg%2F11fgm40hr_?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D`

  const handleMapClick = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(300) // Default height

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ cursor: 'pointer', height: '100%' }} title="Click to open in Google Maps" onClick={handleMapClick}>
      {height > 0 && (
        <Map height={height} defaultCenter={position} defaultZoom={13}>
          <Marker width={50} anchor={position} />
        </Map>
      )}
    </div>
  )
}

export default PigeonMap
