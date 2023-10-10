const todo = document.querySelector(".list");

todo.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("list-group-item")) {
    e.target.classList.add("dragging");
  } //드래그 되고 있는 것을 식별하기 위한 것
});
todo.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

todo.addEventListener("dragover", (e) => {
  e.preventDefault();
  const dragged = document.querySelector(".dragging");
  if (
    e.target.classList.contains("list-group-item") &&
    !e.target.classList.contains("dragging")
  ) {
    if (e.clientY > todo.getBoundingClientRect().bottom - 10) {
      todo.appendChild(dragged);
    } else {
      todo.insertBefore(dragged, e.target);
    }
  }
});
todo.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("list-group-item")) {
    console.log(e.clientY);
    console.log(e.target.getBoundingClientRect());
    console.log(todo.getBoundingClientRect());
  }
});
