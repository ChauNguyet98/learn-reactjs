import logo from "./logo.svg";
// import "./App.css";
import TodoFeature from "./features/todo";
import AlbumFeature from "./features/album";

function App() {
  return (
    <div className="App">
      {/* <TodoFeature/> */}
      <AlbumFeature />
    </div>
  );
}

export default App;
