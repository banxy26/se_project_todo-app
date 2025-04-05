import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
// const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const addToDoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (data) => {
    // section.addItem(data);
  },
});
addToDoPopup.setEventListeners();

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  addToDoPopup.open();
});

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// addTodoCloseBtn.addEventListener("click", () => {
//   addToDoPopup.close();
// });

const section = new Section(
  {
    items: initialTodos,
    renderer: (item) => {
      return generateTodo(item);
    },
  },
  ".todos__list"
);

section.renderItems();

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo);

  addToDoPopup.close();
};

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
