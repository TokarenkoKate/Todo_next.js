"use client"

import "./task-status-checkbox.css"
import { useState } from "react"
import { useAppDispatch } from "@/hooks/redux"
import { changeTaskCompleteStatus, resetFilters } from "@/store/tasks/tasks"
import { TaskProps } from "@/types/tasks"
import CustomCheckbox from "@ui/checkbox/checkbox"

export default function TaskStatusCheckbox({ task }: { task: TaskProps }) {
  const dispatch = useAppDispatch()

  const [checked, setChecked] = useState<boolean>(task.complete)

  const toggleCheckbox = () => {
    dispatch(changeTaskCompleteStatus({ id: task.id, complete: !checked }))
    setChecked(!checked)
  }

  return (
    <div
      className={`task-status-checkbox ${
        checked ? "task-status-checkbox_checked" : ""
      }`}
    >
      <CustomCheckbox
        checked={checked}
        toggleCheckbox={toggleCheckbox}
        id={task.id.toString()}
        label={checked ? "Complete" : "Incomplete"}
      />
    </div>
  )
}
