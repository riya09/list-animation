import TodoItem from "./TodoItem"
import './todo.scss'

const TodoList = () => {
  const tasks = ['Try a new hobby', 'Meditate', 'Buy groceries']
  return (
    <div className="todo-list-container">
      {
        tasks.map((task, t) => (
          <TodoItem key={t} task={task} />
        ))
      }
    </div>
  )
}
export default TodoList
