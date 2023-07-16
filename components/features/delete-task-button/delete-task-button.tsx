"use client"

import { deleteTask } from "@/store/tasks/tasks"
import { useAppDispatch } from "@/hooks/redux"
import CustomButton from "@/components/ui/custom-button/custom-button"
import DeleteIcon from "@/components/ui/icons/delete-icon"

export default function DeleteTaskButton({ taskId }: { taskId: string }) {
  const dispatch = useAppDispatch()
  
  const handleDeleteTask = () => {
    dispatch(deleteTask({ id: taskId }))
  }

  return (
    <CustomButton
      title="Delete"
      size="small"
      color="gray"
      textStyles="text-auxiliary-text hidden md:inline"
      leftIcon={<DeleteIcon />}
      onClick={handleDeleteTask}
    />
  )
}
