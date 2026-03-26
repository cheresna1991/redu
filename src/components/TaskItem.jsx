import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <div className="task-info">
          <span className="task-text">{task.text}</span>
          <div className="task-meta">
            <span className="task-category">🏷️ {task.category}</span>
            <span className="task-date">📅 {task.createdAt}</span>
          </div>
        </div>
      </div>
      <button 
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        title="Удалить задачу"
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskItem;  // ← Убедитесь, что эта строка есть!