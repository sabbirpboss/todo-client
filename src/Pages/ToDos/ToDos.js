import { useEffect, useState } from "react";
import ToDo from "./ToDo/ToDo";

const ToDos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState([]);
  useEffect(() => {
    fetch("https://todo-list-wa.herokuapp.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://todo-list-wa.herokuapp.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => setTodos([...todos, data]));
    setText("");
  };

  return (
    <div>
      <div className="flex justify-center">
        {/* input field  */}
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered focus:border-0 lg:w-[600px]"
              placeholder="Take a Note..."
              name="text"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button className="btn btn-square w-16" onClick={handleSubmit}>
              ENTER
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        {todos.map((todo) => (
          <ToDo key={todo._id} todo={todo}></ToDo>
        ))}
      </div>
    </div>
  );
};

export default ToDos;
