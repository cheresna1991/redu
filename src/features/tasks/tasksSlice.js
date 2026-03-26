import { createSlice } from '@reduxjs/toolkit';

// Загрузка начальных задач из localStorage
const loadTasksFromStorage = () => {
  try {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error('Ошибка загрузки задач:', error);
    return [];
  }
};

// Начальное состояние
const initialState = {
  tasks: loadTasksFromStorage(),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Добавление задачи
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        createdAt: new Date().toLocaleString('ru-RU'),
        category: action.payload.category,
      };
      state.tasks.push(newTask);
      // Сохраняем в localStorage
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    
    // Переключение статуса задачи (выполнено/не выполнено)
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        // Сохраняем в localStorage
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    
    // Удаление задачи
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      // Сохраняем в localStorage
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    
    // Очистка всех выполненных задач
    clearCompletedTasks: (state) => {
      state.tasks = state.tasks.filter(task => !task.completed);
      // Сохраняем в localStorage
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    
    // Загрузка задач из localStorage (инициализация)
    loadTasks: (state) => {
      state.tasks = loadTasksFromStorage();
    },
  },
});

// Экспорт action creators
export const { 
  addTask, 
  toggleTask, 
  deleteTask, 
  clearCompletedTasks,
  loadTasks 
} = tasksSlice.actions;

// Экспорт редьюсера
export default tasksSlice.reducer;