"use client"

import { useEffect, useRef, useState } from "react"
import { useData } from "../../context/DataContext"
import "../../styles/MemberMap.css"

export default function MemberMap() {
  const { data } = useData()
  const mapContainerRef = useRef(null)
  const mapRef = useRef(null)
  const markersRef = useRef([])
  const [selectedMember, setSelectedMember] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredMembers, setFilteredMembers] = useState([])

  useEffect(() => {
    // Load Leaflet CSS and JS from CDN
    if (!window.L) {
      const leafletCSS = document.createElement("link")
      leafletCSS.rel = "stylesheet"
      leafletCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      document.head.appendChild(leafletCSS)

      const leafletScript = document.createElement("script")
      leafletScript.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"
      leafletScript.onload = initializeMap
      document.body.appendChild(leafletScript)
    } else {
      initializeMap()
    }
  }, [])

  const initializeMap = () => {
    if (!mapContainerRef.current || mapRef.current) return

    const L = window.L

    // Initialize map centered on average of member locations
    const members = data.members.filter((m) => m.latitude && m.longitude)
    if (members.length === 0) {
      mapContainerRef.current.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;">No member locations available</div>'
      return
    }

    const avgLat = members.reduce((sum, m) => sum + m.latitude, 0) / members.length
    const avgLon = members.reduce((sum, m) => sum + m.longitude, 0) / members.length

    const map = L.map(mapContainerRef.current).setView([avgLat, avgLon], 4)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map)

    mapRef.current = map

    // Add markers for each member
    members.forEach((member) => {
      const marker = L.marker([member.latitude, member.longitude], {
        title: member.name,
      })

      marker.bindPopup(
        `<div style="width:200px;">
          <img src="${member.photo || "/placeholder.svg"}" style="width:100%;height:150px;object-fit:cover;border-radius:4px;margin-bottom:10px;" />
          <h4 style="margin:0 0 5px 0;color:#111;">${member.name}</h4>
          <p style="margin:0 0 5px 0;color:#0f766e;font-size:12px;">${member.career}</p>
          <p style="margin:0 0 5px 0;color:#666;font-size:12px;">📍 ${member.location}</p>
          <button onclick="window.selectedMemberId = ${member.id}" style="width:100%;padding:8px;background:#0f766e;color:white;border:none;border-radius:4px;cursor:pointer;margin-top:8px;">View Details</button>
        </div>`,
      )

      marker.on("click", () => {
        setSelectedMember(member)
      })

      markersRef.current.push(marker)
      marker.addTo(map)
    })
  }

  useEffect(() => {
    const members = data.members.filter((m) => m.latitude && m.longitude)

    if (searchQuery.trim() === "") {
      setFilteredMembers(members)
      // Show all markers
      markersRef.current.forEach((marker) => {
        marker.setOpacity(1)
      })
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = members.filter((m) => m.name.toLowerCase().includes(query))
    setFilteredMembers(filtered)

    // Update marker visibility
    const filteredIds = filtered.map((m) => m.id)
    markersRef.current.forEach((marker, index) => {
      const memberIds = data.members.filter((m) => m.latitude && m.longitude).map((m) => m.id)
      const memberId = memberIds[index]

      if (filteredIds.includes(memberId)) {
        marker.setOpacity(1)
      } else {
        marker.setOpacity(0.2)
      }
    })

    // Focus on first result
    if (filtered.length > 0) {
      const firstMember = filtered[0]
      if (mapRef.current) {
        mapRef.current.setView([firstMember.latitude, firstMember.longitude], 10)
      }
    }
  }, [searchQuery, data.members])

  return (
    <div className="member-map-container">
      <div className="map-header">
        <h2>Member Location Map</h2>
        <p>Geographic distribution of member inauguration locations</p>
      </div>

      <div className="map-search-bar">
        <input
          type="text"
          placeholder="Search members by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
            ✕
          </button>
        )}
        {searchQuery && filteredMembers.length > 0 && (
          <span className="search-results-count">{filteredMembers.length} result(s)</span>
        )}
      </div>

      <div className="map-content">
        <div ref={mapContainerRef} className="map-canvas" id="leaflet-map" />

        {selectedMember && (
          <div className="member-info-card">
            <button className="close-btn" onClick={() => setSelectedMember(null)}>
              ×
            </button>
            <div className="member-card-content">
              <img
                src={selectedMember.photo || "/placeholder.svg"}
                alt={selectedMember.name}
                className="member-card-photo"
              />
              <div className="member-card-info">
                <h3>{selectedMember.name}</h3>
                <p className="career">{selectedMember.career}</p>
                <p className="location">📍 {selectedMember.location}</p>
                <p className="coords">
                  {selectedMember.latitude.toFixed(4)}, {selectedMember.longitude.toFixed(4)}
                </p>
                <button className="view-details-btn">View Full Details</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
