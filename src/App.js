import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calender from "./Pages/Calender/Calender";
import Completed from "./Pages/Completed/Completed";
import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Pages/Homepage/Navbar/Navbar";
import ToDo from "./Pages/ToDos/ToDos";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateToDo from "./Pages/ToDos/UpdateToDo/UpdateToDo";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/complete" element={<Completed />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/update/:id" element={<UpdateToDo />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
