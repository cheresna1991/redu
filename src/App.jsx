import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks } from './features/tasks/tasksSlice';
import { selectFilteredTasks } from './features/tasks/tasksSelectors';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import Stats from './components/Stats';

function App() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Получаем отфильтрованные задачи через селектор
  const filteredTasks = useSelector((state) => 
    selectFilteredTasks(state, searchTerm)
  );

  // Загружаем задачи при монтировании компонента
  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="container">
        <h1>📝 Менеджер задач</h1>
        
        <Stats />
        
        <TaskForm />
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <TaskList tasks={filteredTasks} />
      </div>
    </div>
  );
}

export default App;