import TickIcon from "../icons/tick-icon"

export interface CustomCheckboxProps {
  id: string
  label: string
  checked: boolean
  toggleCheckbox: () => void
}

export default function CustomCheckbox({
  id,
  label,
  checked,
  toggleCheckbox,
}: CustomCheckboxProps) {
  return (
    <div className="w-full flex gap-2">
      <input
        id={id}
        className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-accent-red rounded-sm bg-white mt-1 checked:bg-accent-green checked:border-0"
        type="checkbox"
        checked={checked}
        onChange={toggleCheckbox}
      />
      <TickIcon className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none" />
      <label
        htmlFor={id}
        className="hidden md:inline text-base font-semibold text-accent-red peer-checked:text-accent-green"
      >
        {label}
      </label>
    </div>
  )
}
