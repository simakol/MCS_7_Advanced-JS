import "./common.css";
import "./style.css";
import { refs } from "./utils/consts";
import { handleTaskClick, handleTaskCreate } from "./utils/tasksHandlers";
import { fillTasksFromLS } from "./templates/taskListTemplate";

fillTasksFromLS();

refs.mainForm.addEventListener("submit", handleTaskCreate);
refs.list.addEventListener("click", handleTaskClick);
