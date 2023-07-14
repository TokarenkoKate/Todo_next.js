"use client"

import "./theme-switcher.css"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import ToggleSwitch from "@ui/toggle-switch/toggle-switch"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="theme-switcher">
      <p className="theme-switcher__title">Change to {theme} theme</p>
      <ToggleSwitch
        active={theme === "dark"}
        onClick={toggleTheme}
      />
    </div>
  )
}
