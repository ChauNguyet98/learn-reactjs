import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/todo-list';
import {
  createSearchParams,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import queryString from 'query-string';

TodoListPage.propTypes = {};

function TodoListPage(props) {
  let searchParamsDefault = createSearchParams({
    status: 'name',
  });
  let [searchParams, setSearchParams] = useSearchParams(searchParamsDefault);

  const location = useLocation();
  const initTodoList = [
    { id: 1, title: 'Eat', status: 'new' },
    { id: 2, title: 'Sleep', status: 'completed' },
    { id: 3, title: 'Code', status: 'new' },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);

    return params?.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params?.status || 'all');
  }, [searchParams, setSearchParams]);

  const handleTodoClick = (todo, index) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    // toggle status
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };

    // update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setSearchParams({ status: 'all' });
  };

  const handleShowCompletedClick = () => {
    setSearchParams({ status: 'completed' });
  };

  const handleShowNewClick = () => {
    setSearchParams({ status: 'new' });
  };

  const filteredTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filterStatus === 'all' || filterStatus === todo.status
    );
  }, [todoList, filterStatus]);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList
        todoList={filteredTodoList}
        onTodoClick={handleTodoClick}
      ></TodoList>

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoListPage;
