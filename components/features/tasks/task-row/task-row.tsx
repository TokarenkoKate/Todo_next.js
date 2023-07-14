import { TaskProps } from "@/types/tasks"
import TaskStatusCheckbox from "@features/task-status-checkbox/task-status-checkbox"
import DeleteTaskButton from "@features/delete-task-button/delete-task-button"

export default function TaskRow({ task }: { task: TaskProps }) {
  return (
    <ul className="tasks-table__row">
      <li className="tasks-table__list-item">
        <p>{task.title}</p>
      </li>
      <li className="tasks-table__list-item">
        <DeleteTaskButton taskId={task.id} />
      </li>
      <li className="tasks-table__list-item">
        <TaskStatusCheckbox task={task} />
      </li>
    </ul>
  )
}
