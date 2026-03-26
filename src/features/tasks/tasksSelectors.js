// Селектор для получения всех задач
export const selectAllTasks = (state) => state.tasks.tasks;

// Селектор для получения активных задач (не выполненных)
export const selectActiveTasks = (state) => 
  state.tasks.tasks.filter(task => !task.completed);

// Селектор для получения выполненных задач
export const selectCompletedTasks = (state) => 
  state.tasks.tasks.filter(task => task.completed);

// Селектор для получения количества задач
export const selectTasksCount = (state) => ({
  total: state.tasks.tasks.length,
  active: state.tasks.tasks.filter(task => !task.completed).length,
  completed: state.tasks.tasks.filter(task => task.completed).length,
});

// Селектор для получения статистики по категориям
export const selectCategoriesStats = (state) => {
  return state.tasks.tasks.reduce((acc, task) => {
    acc[task.category] = (acc[task.category] || 0) + 1;
    return acc;
  }, {});
};

// Селектор для поиска задач по тексту
export const selectFilteredTasks = (state, searchTerm) => {
  if (!searchTerm) return state.tasks.tasks;
  return state.tasks.tasks.filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
};