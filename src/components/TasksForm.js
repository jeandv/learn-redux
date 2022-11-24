import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { addTask } from '../features/tasks/taskSlice';

export const TasksForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addTask({
      ...task,
      id: uuid()
    }));

    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Title'
        onChange={handleChange} />

      <textarea
        name='description'
        placeholder='Description'
        onChange={handleChange}>
      </textarea>

      <button>Save</button>
    </form>
  )
}