import logo from "./logo.svg";
// import "./App.css";
import TodoFeature from "./features/todo";
import AlbumFeature from "./features/album";
import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/todos"> Todo </NavLink>
        <br></br>
        <NavLink to="/albums"> Album </NavLink>
      </div>
      <br></br>
      <Routes>
        {/* Redirect */}
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="/" element={<TodoFeature />} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
