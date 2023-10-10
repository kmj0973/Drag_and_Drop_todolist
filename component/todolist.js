const todoInput = document.querySelector(".todoList-form input");
const todolist = document.querySelector(".list");
const addBtn = document.querySelector(".todoList-form button");

const saveTodo = (e) => {
  const li = `<li
    draggable="true"
    class="list-group-item d-flex justify-content-between align-items-center  mx-1">
    <span>${todoInput.value}</span> <i class="far fa-trash-alt delete"></i>
  </li>`;

  todolist.innerHTML += li;
};

const onClickAdd = (e) => {
  e.preventDefault();
  if (todoInput.value === "") return;
  saveTodo();
  todoInput.value = "";
};

todolist.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

addBtn.addEventListener("click", onClickAdd);
