"use client"
import React from "react"
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

const position = [13.822129, 100.514449]

export default function Map() {
  return (
  <div style={{width: '100%', height: '100%', aspectRatio:1}}>
  <MapContainer style={{width: '100%', height: '100%' }} center={position} zoom={20} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
  </div>
  )
}

