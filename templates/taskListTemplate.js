import { refs, tasks } from "../utils/consts";
import * as storageService from "../services/storage";

let taskId = 0;

function createTaskItem({ text, taskId: id = taskId, isDone = false }) {
  const taskData = {
    text,
    taskId: id,
    isDone,
  };

  taskId += 1;
  tasks.push(taskData);

  return `<li data-id="${taskData.taskId}" class="${
    isDone ? "line-through" : ""
  }"><span>${text}</span> <button>Delete</button></li>`;
}

function fillTasksFromLS() {
  // підвантажуємо збережені задачі з локального сховку
  const tasksFromLS = storageService.loadTasks();

  // перевіряємо що задачі не існують або масив задач є пустим
  if (tasksFromLS === null || tasksFromLS.length === 0) {
    return;
  }

  const tasksMarkup = tasksFromLS.map(createTaskItem).join("");

  // оновлюємо айді наступної задачі. Залежить від айді останньої задачі яка прийла з локального сховку. Айді наступної = Айді останної + 1 (таким чином зберігається унікальність айді задачі, без дублікацій)
  taskId = tasks[tasks.length - 1].taskId + 1;

  refs.list.innerHTML = tasksMarkup;
}

export { createTaskItem, fillTasksFromLS };
