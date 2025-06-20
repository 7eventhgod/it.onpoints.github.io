"use client"

import { Map, Marker, Overlay } from "pigeon-maps"
import { useRef, useState, useEffect } from 'react'

const darkProvider = (x: number, y: number, z: number, dpr?: number): string => {
  return `https://a.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}${dpr && dpr >= 2 ? '@2x' : ''}.png`
}

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
        <Map height={height} provider={darkProvider} defaultCenter={position} defaultZoom={13} attribution={false}>
          <Marker width={40} anchor={position} color={'#06b6d4'} />
          <Overlay anchor={position} offset={[0, -25]}>
            <div className="bg-black/70 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm">
              Click to open in Google Maps
            </div>
          </Overlay>
        </Map>
      )}
    </div>
  )
}

export default PigeonMap
