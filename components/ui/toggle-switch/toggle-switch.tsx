"use client"

import { motion } from "framer-motion"
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
      <motion.div
        className="toggle-switch__pin"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </div>
  )
}
