import { MdDelete, MdOutlineEditNote } from "react-icons/md";

const ToDo = ({ todo }) => {
  const { text, id } = todo;
  return (
    <div className="relative my-4">
      <input
        type="checkbox"
        defaultChecked="checked"
        className="checkbox absolute top-1/3 left-0 w-5 h-5"
      />
      <div className="flex justify-between bg-slate-100 m-2 ml-6 p-2 rounded-xl border-l-4 border-cyan-700">
        <p className="my-6 pr-7 text-justify">{text}</p>
        <div className="relative">
          <MdOutlineEditNote className="mb-3 absolute top-0 right-0 hover:text-info rounded-full cursor-pointer text-2xl" />
          <MdDelete className="absolute bottom-0 right-0 hover:text-red-500 rounded-full cursor-pointer text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
