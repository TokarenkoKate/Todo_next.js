"use client"
import "./tasks.css"

import { useEffect, useState } from "react"
import { useAppSelector } from "@/hooks/redux"
import { getAllTasks, getFilters } from "@/store/tasks/selectors"
import { TaskProps } from "@/types/tasks"
import { filterTasksByCompleteStatus } from "@/lib/filter-utils"
import TaskRow from "./task-row/task-row"

export default function Tasks() {
  const allTasks = useAppSelector(getAllTasks)
  const filters = useAppSelector(getFilters)

  const [tasks, setTasks] = useState<TaskProps[] | []>([])

  useEffect(() => {
    const activeFilter = filters.filter((filter) => filter.selected)

    let currentTasks = activeFilter.length
      ? filterTasksByCompleteStatus(allTasks, activeFilter[0].filterValue)
      : allTasks

    setTasks(currentTasks)
  }, [allTasks, filters])

  return (
    <section className="page__container tasks">
      <div className="tasks-table">
        <div className="tasks-table__head">
          <ul className="tasks-table__row">
            <li className="tasks-table__list-item">
              <p>Task</p>
            </li>
            <li className="tasks-table__list-item">
              <p>Delete task</p>
            </li>
            <li className="tasks-table__list-item">
              <p>Status</p>
            </li>
          </ul>
        </div>
        <div className="tasks-table__body">
          {tasks.length !== 0 ? (
            tasks.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
              />
            ))
          ) : (
            <ul className="tasks-table__row">
              <li className="tasks-table__list-item">
                <p>Nothing found</p>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
