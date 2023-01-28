import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

export const TaskForm = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.task);

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const disptach = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setTask((prev) => ({
      ...prev,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      disptach(editTask(task));
    }
    if (!id) {
      disptach(addTask({ id: id || uuid(), ...task }));
    }
    navigate('/');
  };

  useEffect(() => {
    if (id) {
      setTask(tasks.find((task) => task.id === id));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' id='title' onChange={handleChange} defaultValue={task.title} />
      <textarea name='description' id='description' onChange={handleChange} defaultValue={task.description}></textarea>
      <button type='submit'>Create</button>
    </form>
  );
};
