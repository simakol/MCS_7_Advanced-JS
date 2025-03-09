import { tasks, refs } from "./consts";
import { createTaskItem } from "../templates/taskListTemplate";
import * as storageService from "../services/storage";

function handleTaskCreate(event) {
  event.preventDefault();

  const form = event.target;
  const taskValue = form.elements.task.value.trim();

  if (!taskValue) {
    alert("Empty field!");
    return;
  }

  form.reset();

  refs.list.insertAdjacentHTML(
    "beforeend",
    createTaskItem({ text: taskValue })
  );

  storageService.updateTasks(tasks);
}

function handleTaskClick(event) {
  if (event.target === event.currentTarget) {
    return;
  } else if (event.target.tagName === "BUTTON") {
    const liEl = event.target.closest("li");
    const liId = Number(liEl.dataset.id);
    const indexToDelete = tasks.findIndex((task) => task.taskId === liId);
    if (indexToDelete !== -1) {
      tasks.splice(indexToDelete, 1);
    }
    liEl.remove();
  } else {
    // else if(event.target.tagName === "LI" || event.target.tagName === "SPAN")
    const liEl = event.target.closest("li"); // шукає наближчий елемент по зазаначеному селектору (пошук вгору)
    const liId = Number(liEl.dataset.id);
    const currentTaskData = tasks.find((task) => task.taskId === liId);

    currentTaskData.isDone = !currentTaskData.isDone;

    liEl.classList.toggle("line-through");
  }

  storageService.updateTasks(tasks);
}

export { handleTaskClick, handleTaskCreate };
