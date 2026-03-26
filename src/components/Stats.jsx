import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompletedTasks } from '../features/tasks/tasksSlice';
import { 
  selectTasksCount, 
  selectCategoriesStats 
} from '../features/tasks/tasksSelectors';
import './Stats.css';

function Stats() {
  const dispatch = useDispatch();
  const { total, active, completed } = useSelector(selectTasksCount);
  const categoriesStats = useSelector(selectCategoriesStats);

  const handleClearCompleted = () => {
    if (window.confirm('Удалить все выполненные задачи?')) {
      dispatch(clearCompletedTasks());
    }
  };

  return (
    <div className="stats">
      <div className="stats-cards">
        <div className="stat-card total">
          <div className="stat-number">{total}</div>
          <div className="stat-label">Всего задач</div>
        </div>
        <div className="stat-card active">
          <div className="stat-number">{active}</div>
          <div className="stat-label">Активных</div>
        </div>
        <div className="stat-card completed">
          <div className="stat-number">{completed}</div>
          <div className="stat-label">Выполнено</div>
        </div>
      </div>

      {Object.keys(categoriesStats).length > 0 && (
        <div className="categories-stats">
          <h3>📊 Статистика по категориям</h3>
          <div className="category-badges">
            {Object.entries(categoriesStats).map(([category, count]) => (
              <span key={category} className="category-badge">
                {category}: {count}
              </span>
            ))}
          </div>
        </div>
      )}

      {completed > 0 && (
        <button className="clear-btn" onClick={handleClearCompleted}>
          🗑️ Очистить выполненные
        </button>
      )}
    </div>
  );
}

export default Stats;