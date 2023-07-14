import { TaskProps } from "@/types/tasks"

export const filterTasksByCompleteStatus = (
  allTasks: TaskProps[],
  filterValue: string
) => {
  return allTasks.filter((task) =>
    filterValue === "complete" ? task.complete : !task.complete
  )
}
