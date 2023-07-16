"use client"

import { motion } from "framer-motion"
import { TaskProps } from "@/types/tasks"
import TaskStatusCheckbox from "@features/task-status-checkbox/task-status-checkbox"
import DeleteTaskButton from "@features/delete-task-button/delete-task-button"

let base = 4
let t = (d: number) => d * base

export default function TaskRow({ task }: { task?: TaskProps }) {
  return (
    <motion.ul
      className="tasks-table__row"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: 60,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.3,
          opacity: { delay: t(0.025) },
        },
      }}
      exit={{
        height: 0,
        opacity: 0,
      }}
      transition={{
        duration: t(0.015),
        type: "spring",
        bounce: 0,
        opacity: {
          duration: t(0.03),
        },
      }}
    >
      {task ? (
        <>
          <li
            className={`tasks-table__list-item ${
              task.complete ? "task-table__list-item_active" : ""
            }`}
          >
            <p>{task.title}</p>
          </li>
          <li className="tasks-table__list-item">
            <DeleteTaskButton taskId={task.id} />
          </li>
          <li className="tasks-table__list-item">
            <TaskStatusCheckbox task={task} />
          </li>
        </>
      ) : (
        <li className="tasks-table__list-item">Notion found</li>
      )}
    </motion.ul>
  )
}
