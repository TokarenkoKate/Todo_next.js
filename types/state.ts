import { store } from "../store/index"
import { TaskProps } from "./tasks"

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type TasksData = {
  tasks: TaskProps[]
  filters: FilterProps[]
}

export type FilterProps = {
  title: string
  filterValue: string
  selected: boolean
}
