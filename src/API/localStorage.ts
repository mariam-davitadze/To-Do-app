import Task from "../constants/Task";

const getTasksArray = () => {
  const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
  return tasks;
};
const setUpdatetTasks = (tasks: Task[]) => {
  localStorage["tasks"] = JSON.stringify(tasks);
};

export const addTask = (task: Task) => {
  const tasks: Task[] = getTasksArray();
  if (!tasks.length) {
    localStorage.setItem("tasks", JSON.stringify([task]));
  }
  tasks.push(task);
  setUpdatetTasks(tasks);
};

export const getActiveTasks = () => {
  const activeTasks = getTasksArray().filter((task: Task) => !task.isCompleted);
  return activeTasks;
};

export const getTaskHistory = () => {
  const tasksHistory = getTasksArray().filter((task: Task) => task.isCompleted);
  return tasksHistory;
};

export const editTask = (task: Task) => {
  const updatedTasks = getTasksArray().map((_task) =>
    _task.id === task.id ? task : _task
  );
  setUpdatetTasks(updatedTasks);
};

export const deleteTask = (taskId: string) => {
  const updatedTasks = getTasksArray().filter((task) => taskId !== task.id);
  setUpdatetTasks(updatedTasks);
};

export const clearActiveTasks = () => {
  const updatedTasks = getTasksArray().filter((task) => !task.isCompleted);
  setUpdatetTasks(updatedTasks);
};

export const clearTasksHistory = () => {
  const updatedTasks = getTasksArray().filter((task) => task.isCompleted);
  setUpdatetTasks(updatedTasks);
};
