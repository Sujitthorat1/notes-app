import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import "./App.css"
import TodoItems from "./components/TodoItems"

function App() {

  const toDoItems = [
    {
      name: "Buy milk",
      dueDate: "7/02/2024"
    },
    {
      name: "Do revision of ",
      dueDate: "7/02/2024",
    }
  ]
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={toDoItems} />

    </center>

  )
}

export default App
