import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateToDo = () => {
  const { id } = useParams();
  const [todoUp, setTodoUp] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTodoUp(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.Title.value;
    const text = e.target.Text.value;

    const updatedTodo = { title, text };

    // send data to the server
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoUp(data);
        // alert("ToDo updated successfully");
        toast.success("ToDo updated successfully", {
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
    <div className="flex justify-center">
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
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToDo;
