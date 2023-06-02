import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoDetailPage from './pages/todo-detail-page';
import TodoListPage from './pages/todo-list-page';
import NotFound from '../../components/not-found';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>
      <Routes>
        <Route path="" element={<TodoListPage />} />
        <Route path="/:id" element={<TodoDetailPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default TodoFeature;
