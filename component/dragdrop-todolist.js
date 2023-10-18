const todo = document.querySelector(".todolist");

todo.addEventListener("dragstart", (e) => {
  //드래그 시작 시 이벤트 발생
  if (e.target.classList.contains("list-group-item")) {
    e.target.classList.add("dragging");
  } //드래그 되고 있는 것을 식별하기 위해 dragging 클래스 추가
});
todo.addEventListener("dragend", (e) => {
  //드래그 끝낼 시 이벤트 발생
  e.target.classList.remove("dragging");
});
todo.addEventListener("dragover", (e) => {
  //드래그가 발생하는 동안 이벤트 발생
  e.preventDefault();
  const dragged = document.querySelector(".dragging");
  if (
    e.target.classList.contains("list-group-item") && //리스트내에 요소에만 반응하도록 하는 조건문
    !e.target.classList.contains("dragging")
  ) {
    if (e.clientY > todo.getBoundingClientRect().bottom - 10) {
      //리스트 마지막 요소의 y축 기준으로 실행되는 조건문
      todo.appendChild(dragged);
    } else {
      todo.insertBefore(dragged, e.target); // 드래그 되고있는 요소를 e.target기준으로 e.target전의 위치로 변경
    }
  }
});
