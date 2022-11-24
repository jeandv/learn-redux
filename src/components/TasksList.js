import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask } from '../features/tasks/taskSlice';

export const TasksList = () => {

  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteTask(id));

  return (
    <div>
      <header>
        <h1>Task: {tasks.length}</h1>
        <Link to='/create-task'>Create Task!</Link>
      </header>
      {
        tasks.map(({ id, title, description, completed }) => (
          <div key={id}>
            <hr />
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h4><strong>{completed ? 'Completado' : 'Pendiente'}</strong></h4>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <hr />
          </div>
        ))
      }
    </div>
  )
}