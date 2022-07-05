import { useEffect, useState } from "react";
import ToDo from "./ToDo/ToDo";
import { toast } from "react-toastify";
import "./ToDos.css";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";

const ToDos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.Title.value;
    const text = e.target.Text.value;

    const todoDetails = { title, text };

    // send data to the server
    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...todos, data]);
        // alert("ToDo added successfully");
        toast.success("ToDo added successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        e.target.reset();
      });
  };

  return (
    <div>
      <div className="flex justify-center">
        {/* input field  */}
        <div className="form-control">
          <div className="input-group">
            <form onSubmit={handleSubmit} className="flex justify-center">
              <input
                type="text"
                placeholder="Search…"
                className="todo-title input input-bordered focus:border-0 lg:w-[200px] ml-4"
                placeholder="Title here"
                name="Title"
              />
              <input
                type="text"
                placeholder="Search…"
                className="todo-text input input-bordered focus:border-0 lg:w-[450px] rounded-none"
                placeholder="Take a Note..."
                name="Text"
                // onChange={(e) => {
                //   setText(e.target.value);
                // }}
              />

              <input
                className="btn btn-square w-16"
                type="submit"
                value="Add"
              />
            </form>
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
