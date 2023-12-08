import TodoItem from "./TodoItem"
import './todo.scss'

const TodoList = () => {
  return (
    <div className="todo-list-container">
      <TodoItem task="Eat, Pray and Love"/>
      <TodoItem task="Hello"/>
    </div>
  )
}
export default TodoList
