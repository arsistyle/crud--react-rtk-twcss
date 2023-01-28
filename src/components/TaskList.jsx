import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

export const TaskList = () => {
  const tasks = useSelector((state) => state.task);
  const disptach = useDispatch();
  const handleDelete = (id) => {
    disptach(deleteTask(id));
  };
  return (
    <div>
      <header>
        <h1>Tasks {tasks.length}</h1>
        <Link className='btn' to='/create-task'>Create task</Link>
      </header>
      {tasks?.map(({ id, title, description, completed }, key) => (
        <div className='' key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <Link className='btn' to={`/edit-task/${id}`}>
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
};
