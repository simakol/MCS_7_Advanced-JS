import { refs } from "./utils/consts.js";
import { handleBookAdd } from "./handlers/form.js";

refs.form.addEventListener("submit", handleBookAdd);
