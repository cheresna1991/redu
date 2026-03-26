import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import './TaskForm.css';

function TaskForm() {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');
  const [category, setCategory] = useState('Работа');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask({ text: taskText.trim(), category }));
      setTaskText('');
    }
  };

  const categories = ['Работа', 'Личное', 'Учеба', 'Дом', 'Другое'];

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="task-input"
          placeholder="Что нужно сделать?"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <select 
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit" className="add-btn">
          ➕ Добавить
        </button>
      </div>
    </form>
  );
}

export default TaskForm;