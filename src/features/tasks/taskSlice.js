import { createSlice, current } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task 1 description',
    completed: false
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task 2 description',
    completed: false
  }
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload }) => [...state, payload],
    editTask: (state, { payload }) => {
      const { id, title, description } = payload;
      let currentTask = state.find((task) => task.id === id);
      if (currentTask) {
        // currentTask = { ...currentTask, title, description };
        currentTask.title = title;
        currentTask.description = description;
      }
    },
    deleteTask: (state, { payload }) => state.filter((task) => task.id !== payload)
  }
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
