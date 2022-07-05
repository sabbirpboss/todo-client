import { useState } from "react";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ToDo = ({ todo }) => {
  const { text, title, id } = todo;
  const [remain, setRemain] = useState([]);

  const handleDeleteToDo = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this ToDo?"
    );
    if (proceed) {
      console.log("deleting todo by id", id);
      fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = remain.filter((todo) => todo._id !== id);
          setRemain(remaining);
          // alert("ToDo deleted successfully");
          toast.success("ToDo deleted successfully");
        });
    }
  };

  return (
    <div className="relative my-4">
      <input
        type="checkbox"
        defaultChecked="checked"
        className="checkbox absolute top-1/3 left-0 w-5 h-5"
      />
      <div className="flex justify-between bg-slate-100 m-2 ml-6 p-2 rounded-xl border-l-4 border-cyan-700">
        <div className="my-4 mx-4">
          <h3 title={title} className="flex text-xl font-bold border-b-2  mr-7">
            {title?.length <= 35 ? `${title}` : title?.slice(0, 35) + "..."}
            <Link to={`/update/${todo._id}`}>
              <sup>
                <MdOutlineEditNote className="ml-2 hover:text-info rounded-full cursor-pointer text-xl p-[2px]" />
              </sup>
            </Link>
          </h3>
          <p className="mt-2 pr-7 text-justify">{text}</p>
        </div>
        <div className="relative">
          {/* <MdOutlineEditNote className="mb-3 absolute top-0 right-0 hover:text-info rounded-full cursor-pointer text-2xl" /> */}
          <MdDelete
            className="absolute bottom-0 right-0 hover:text-red-500 rounded-full cursor-pointer text-2xl"
            onClick={() => handleDeleteToDo(todo._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
