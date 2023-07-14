"use client"

import "./custom-button.css"
import clsx from "clsx"

const buttonSizes = {
  small: "h-9 py-2 px-3.5",
  medium: "h-10 py-3 px-3.5",
}

const buttonColors = {
  green: "bg-accent-green",
  gray: "bg-components-bg",
}

interface CustomButtonProps {
  title?: string
  size: "small" | "medium"
  color: "green" | "gray"
  containerStyles?: string
  btnType?: "button" | "submit" | "reset"
  isDisabled?: boolean
  textStyles?: string
  onClick?: () => void
  leftIcon?: React.ReactNode
}

export default function CustomButton({
  title,
  size,
  color,
  containerStyles,
  btnType = "button",
  isDisabled = false,
  textStyles,
  leftIcon,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      className={clsx(
        "custom-btn",
        buttonSizes[size],
        buttonColors[color],
        containerStyles,
        leftIcon && "gap-1"
      )}
      type={btnType}
      disabled={isDisabled}
      onClick={onClick}
    >
      {leftIcon && leftIcon}
      <span
        className={clsx("flex-1", {
          [textStyles as string]: textStyles,
          ["text-white"]: !textStyles,
        })}
      >
        {title}
      </span>
    </button>
  )
}
