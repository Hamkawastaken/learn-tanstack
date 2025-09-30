import { Route, Routes } from "react-router";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodoDetail } from "./components/TodoDetail";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center mx-auto p-4">
        <div className="title bg-amber-100 p-12 rounded-xl">
          <h1 className="text-4xl font-extrabold">Todo App</h1>
        </div>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path={`/todos/:id`} element={<TodoDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
