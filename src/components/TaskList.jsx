import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/tasks/tasksSlice';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks }) {
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDelete = (id) => {
    if (window.confirm('Удалить задачу?')) {
      dispatch(deleteTask(id));
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>✨ Нет задач. Добавьте первую задачу!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;