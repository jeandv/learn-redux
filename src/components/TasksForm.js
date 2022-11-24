import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { addTask, editTask } from '../features/tasks/taskSlice';

export const TasksForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks);

  const handleChange = e => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if (params.id) {

      dispatch(editTask(task));

    } else {

      dispatch(addTask({
        ...task,
        id: uuid()
      }));

    }

    navigate('/');
  }

  useEffect(() => {

    if (params.id) setTask(tasks.find(({ id }) => id === params.id));

  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        onChange={handleChange}
        placeholder='Title'
        type='text'
        value={task.title} />

      <textarea
        name='description'
        onChange={handleChange}
        placeholder='Description'
        value={task.description}>
      </textarea>

      <button>{!params.id ? 'Create' : 'Edit'}</button>
    </form>
  )
}