const TODO_STORAGE_KEY = "todo list";

function updateTasks(tasks) {
  const jsonTasks = JSON.stringify(tasks);

  localStorage.setItem(TODO_STORAGE_KEY, jsonTasks);
}

function loadTasks() {
  try {
    const lsData = localStorage.getItem(TODO_STORAGE_KEY);
    return JSON.parse(lsData);
  } catch (err) {
    console.log(`JSON parsing error: ${err}`);
    return null;
  }
}

export { updateTasks, loadTasks };
