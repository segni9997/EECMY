"use client"

import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useLanguage } from "../context/LanguageContext"
import "../styles/LoginPage.css"

export default function LoginPage() {
  const { login, error } = useAuth()
  const { t, language, changeLanguage, theme, toggleTheme } = useLanguage()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      login(username, password)
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="login-container">
      <div className="login-controls">
        <select value={language} onChange={(e) => changeLanguage(e.target.value)} className="login-language-select">
          <option value="en">English</option>
          <option value="am">አማርኛ</option>
          <option value="or">Afan Oromo</option>
        </select>
        <button
          className="login-theme-btn"
          onClick={toggleTheme}
          title={t(theme === "light" ? "darkMode" : "lightMode")}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      <div className="login-box">
        <div className="login-header">
          <h1>Financial & Administrative System</h1>
          <p>Organization Management Platform</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">{t("username") || "Username"}</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              disabled={isLoading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{t("password") || "Password"}</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              disabled={isLoading}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={isLoading} className="login-btn">
            {isLoading ? "Loading..." : t("save") || "Login"}
          </button>
        </form>

        <div className="demo-credentials">
          <h3>{t("welcome") || "Demo Credentials"}</h3>
          <ul>
            <li>
              <strong>Admin:</strong> admin / admin123
            </li>
            <li>
              <strong>Finance:</strong> finance / finance123
            </li>
            <li>
              <strong>HR:</strong> hr / hr123
            </li>
            <li>
              <strong>School:</strong> school / school123
            </li>
            <li>
              <strong>Data Entry:</strong> data / data123
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
