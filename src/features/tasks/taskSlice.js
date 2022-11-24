import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'task 1',
    description: 'task 1 description',
    completed: true
  },
  {
    id: '2',
    title: 'task 2',
    description: 'task 2 description',
    completed: false
  },
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => { state.push(action.payload) },
    deleteTask: (state, action) => {

      const taskFound = state.find(task => task.id === action.payload);

      if (taskFound) state.splice(state.indexOf(taskFound), 1);
    },
    editTask: (state, action) => {

      const { id, title, description } = action.payload;

      const taskFound = state.find(task => task.id === id);

      if (taskFound) {
        taskFound.title = title;
        taskFound.description = description;
      }

    }
  }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer