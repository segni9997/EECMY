"use client"

import Logo from "./Logo"
import { useLanguage } from "../context/LanguageContext"
import "../styles/TopBar.css"

export default function TopBar({ onLogout, onToggleSidebar, user, activeSector, onSectorChange }) {
  const { t, language, changeLanguage, theme, toggleTheme } = useLanguage()

  const handleLogout = () => {
    if (window.confirm(t("logout") + "?")) {
      onLogout()
    }
  }

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="hamburger-btn" onClick={onToggleSidebar} title="Toggle sidebar">
          ☰
        </button>
        <Logo size="small" />
        <h1 className="topbar-title">{t("dashboard")}</h1>
      </div>
      <div className="topbar-right">
        {user.sectors.length > 1 && (
          <div className="topbar-sector-switcher">
            <label>{t("sector")}:</label>
            <select value={activeSector} onChange={(e) => onSectorChange(e.target.value)}>
              {user.sectors.map((sector) => (
                <option key={sector} value={sector}>
                  {t(sector)}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="topbar-controls">
          <div className="language-switcher">
            <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="am">አማርኛ</option>
              <option value="or">Afan Oromo</option>
            </select>
          </div>
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={t(theme === "light" ? "darkMode" : "lightMode")}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <div className="user-greeting">
          <span>
            {t("welcome")}, <strong>{user.name}</strong>
          </span>
          <div className="user-role-badge">{user.role}</div>
        </div>
        <button className="logout-btn" onClick={handleLogout} title={t("logout")}>
          🚪 {t("logout")}
        </button>
      </div>
    </header>
  )
}
