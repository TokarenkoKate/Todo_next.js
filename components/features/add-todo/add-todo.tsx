"use client"

import "./add-todo.css"
import { FormEvent, useState } from "react"
import { useAppDispatch } from "@/hooks/redux"
import { addTask } from "@/store/tasks/tasks"
import AddIconOutline from "@ui/icons/add-icon-outline"
import CustomButton from "@ui/custom-button/custom-button"
import AddIcon from "@ui/icons/add-icon"

export default function AddTodo() {
  const [newTask, setNewTast] = useState("")
  const dispatch = useAppDispatch()

  const handleSubmitNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!newTask) {
      return
    }

    dispatch(addTask(newTask))
    setNewTast("")
  }

  return (
    <section className="page__container add-todo">
      <div className="add-todo__container">
        <form
          className="add-todo__form"
          onSubmit={handleSubmitNewTask}
        >
          <label className="add-todo__input-group">
            <AddIconOutline className="add-todo__add-icon" />
            <input
              type="text"
              value={newTask}
              onChange={(event) => setNewTast(event.target.value)}
              className="add-todo__input"
              placeholder="F.e. have a good rest in the weekend"
              required
            />
          </label>
          <CustomButton
            title="Add"
            size="medium"
            color="green"
            btnType="submit"
            textStyles="hidden sm:inline text-white"
            isDisabled={!newTask}
            leftIcon={<AddIcon />}
          />
        </form>
      </div>
    </section>
  )
}
