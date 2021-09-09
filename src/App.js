import TodoList from "./components/TodoList";
import "./App.css"


function App() {
  return (
    <div className="todo-app">
      <h1>Liste des taches</h1>
      <TodoList/>
    </div>
  );
}

export default App;
