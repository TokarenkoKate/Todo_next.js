import FilterButtons from "@features/filter-buttons/filter-buttons"
import SeparatorLine from "@ui/separator-line/separator-line"
import AddTodo from "@features/add-todo/add-todo"
import Tasks from "@features/tasks/tasks"

export default function Home() {
  return (
    <main className="main">
      <FilterButtons />
      <SeparatorLine />
      <AddTodo />
      <Tasks />
    </main>
  )
}
