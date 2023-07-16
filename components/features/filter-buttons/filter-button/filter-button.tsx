import "./filter-button.css"
import { motion } from "framer-motion"

export default function FilterButton({
  value,
  title,
  activeButtonValue,
  onClickSetButtonActive,
}: {
  value: string
  title: string
  activeButtonValue: string
  onClickSetButtonActive: (value: string) => void
}) {
  const active = value === activeButtonValue
  return (
    <button
      className={`filter-button ${active ? "filter-button_active" : ""} `}
      type="button"
      onClick={() => onClickSetButtonActive(value)}
    >
      <span className="filter-button__text">{title}</span>
      {active && (
        <motion.span
          layoutId="underline"
          className="filter-button__underline"
        />
      )}
    </button>
  )
}
