"use client"

import { useAuth } from "../context/AuthContext"
import { useLanguage } from "../context/LanguageContext"
import "../styles/Sidebar.css"

const MENU_ITEMS = {
  congregation: [
    { id: "dashboard", label: "dashboard", icon: "📊" },
    { id: "members", label: "memberManagement", icon: "👥" },
    { id: "membermap", label: "memberLocations", icon: "🗺️" },
    { id: "memberids", label: "Member ID Cards", icon: "🎫" },
    { id: "payments", label: "paymentRecords", icon: "💳" },
    { id: "assets", label: "assetManagement", icon: "🏛️" },
    { id: "employees", label: "Employee Management", icon: "👔" },
    { id: "ledger", label: "General Ledger", icon: "📖" },
    { id: "reports", label: "reports", icon: "📈" },
    { id: "announcements", label: "Announcements", icon: "📢" },
  ],
  development: [
    { id: "dashboard", label: "dashboard", icon: "📊" },
    { id: "payments", label: "paymentRecords", icon: "💳" },
    { id: "assets", label: "assetManagement", icon: "🏛️" },
    { id: "employees", label: "Employee Management", icon: "👔" },
    { id: "ledger", label: "General Ledger", icon: "📖" },
    { id: "reports", label: "reports", icon: "📈" },
  ],
  school: [
    { id: "dashboard", label: "dashboard", icon: "📊" },
    { id: "students", label: "Student Management", icon: "🎓" },
    { id: "studentids", label: "Student ID Cards", icon: "🎫" },
    { id: "grades", label: "Grade Reports", icon: "📊" },
    { id: "certificates", label: "Certificates", icon: "🏆" },
    { id: "fees", label: "School Fees", icon: "💰" },
    { id: "assets", label: "assetManagement", icon: "🏛️" },
    { id: "employees", label: "Staff Management", icon: "👔" },
    { id: "ledger", label: "General Ledger", icon: "📖" },
    { id: "reports", label: "reports", icon: "📈" },
  ],
}

export default function Sidebar({ currentPage, onNavigate, isOpen, onClose, activeSector, onSectorChange }) {
  const { user } = useAuth()
  const { t } = useLanguage()
  const menuItems = MENU_ITEMS[activeSector] || []

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? "active" : ""}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2>{t(activeSector) || "Organization"}</h2>
          <button className="sidebar-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {user.sectors.length > 1 && (
          <div className="sector-switcher">
            <label>{t("sector")}</label>
            <select value={activeSector} onChange={(e) => onSectorChange(e.target.value)}>
              {user.sectors.map((sector) => (
                <option key={sector} value={sector}>
                  {t(sector)}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="user-info">
          <div className="user-avatar">{user.name.charAt(0)}</div>
          <div className="user-details">
            <div className="user-name">{user.name}</div>
            <div className="user-role">{user.role}</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? "active" : ""}`}
              onClick={() => {
                onNavigate(item.id)
                onClose()
              }}
              title={t(item.label) || item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{t(item.label) || item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
