import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/not-found';
import AlbumFeature from './features/album';
import TodoFeature from './features/todo';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect } from 'react';
import categoryService from './services/categoryService';

function App() {
  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await categoryService.getAll();
      console.log(categoryList);
    };

    fetchCategories();
  }, []);

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
        <Route path="/todos/*" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
