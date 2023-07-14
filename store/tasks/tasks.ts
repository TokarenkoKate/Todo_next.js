import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import { NameSpace } from "../../constants/constants"
import { TasksData } from "@/types/state"
import { tasksMockData } from "@/mocks/tasks-mock-data"

export const initialState: TasksData = {
  tasks: tasksMockData,
  filters: [
    {
      title: "Complete tasks",
      filterValue: "complete",
      selected: false,
    },
    {
      title: "Incomplete tasks",
      filterValue: "incomplete",
      selected: false,
    },
  ],
}

export const tasksData = createSlice({
  name: NameSpace.Tasks,
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const id = uuidv4()
      const newTask = { title: action.payload, complete: false, id: id }
      state.tasks.unshift(newTask)
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      const tasks = state.tasks
      state.tasks = tasks.filter((task) => task.id !== action.payload.id)
    },
    changeTaskCompleteStatus: (
      state,
      action: PayloadAction<{ complete: boolean; id: string }>
    ) => {
      const currentTask = state.tasks.find(
        (task) => task.id === action.payload.id
      )
      if (currentTask) {
        currentTask.complete = action.payload.complete
      }
    },
    setFilterActive: (
      state,
      action: PayloadAction<{ filterValue: string }>
    ) => {
      state.filters.map((filter) => {
        if (filter.filterValue === action.payload.filterValue) {
          filter.selected = true
        } else {
          filter.selected = false
        }
      })
    },
    resetFilters: (state) => {
      state.filters.map((filter) => (filter.selected = false))
    },
  },
})

export const {
  addTask,
  deleteTask,
  changeTaskCompleteStatus,
  setFilterActive,
  resetFilters,
} = tasksData.actions
