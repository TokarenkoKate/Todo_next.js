import { combineReducers } from "@reduxjs/toolkit"

import { NameSpace } from "../constants/constants"
import { tasksData } from "./tasks/tasks"

export const rootReducer = combineReducers({
  [NameSpace.Tasks]: tasksData.reducer,
})
