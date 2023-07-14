import "./separator-line.css"
import clsx from "clsx"

export default function SeparatorLine({ className }: { className?: string }) {
  return <div className={(clsx("separator-line", className))} />
}
