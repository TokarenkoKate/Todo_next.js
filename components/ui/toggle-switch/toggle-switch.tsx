"use client"

import "./toggle-switch.css"

interface ToggleSwitchProps {
  active: boolean
  onClick: () => void
}

export default function ToggleSwitch({ active, onClick }: ToggleSwitchProps) {
  return (
    <div
      className={`toggle-switch ${active ? "toggle-switch_active" : ""}`}
      onClick={onClick}
    >
      <div className="toggle-switch__pin" />
    </div>
  )
}
