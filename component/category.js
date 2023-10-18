const cateInput = document.querySelector(".category-form input");
const cates = document.querySelector(".category");
const addCateBtn = document.querySelector(".category-form button");
const bodyEl = document.querySelector("body");

const saveCate = (e) => {
  const li = `<li
  class="list-group-item d-flex justify-content-between align-items-center mx-1 category-list"
>
  <svg
    value=${cateInput.value}
    xmlns="http://www.w3.org/2000/svg"
    width="140"
    height="140"
    fill="currentColor"
    class="bi bi-folder"
    viewBox="0 0 16 16"
  >
    <path
      d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"
    />
  </svg>
  <span class="cate-name">${cateInput.value}</span
  ><i class="far fa-trash-alt delete cate-delete"></i>
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${cateInput.value}</h5>
        <i class="bi bi-x-lg modal-delete"></i>
      </div>
      <div class="modal-body">
         <ul class="list-group mx-auto pt-3 category-todos" id=${cateInput.value}>
        
          </ul>
      </div>
    </div>
  </div>
</div>
</li>`;

  cates.innerHTML += li;
};

const onClickAddCate = async (e) => {
  e.preventDefault();
  if (cateInput.value === "") return;
  saveCate();
  cateInput.value = "";
};

cates.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

cates.addEventListener("click", (e) => {
  if (e.target.classList.contains("bi-folder")) {
    const display = e.target.parentElement.querySelector(".modal");
    display.classList.toggle("show");
  }
  if (e.target.classList.contains("modal-delete")) {
    const display =
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
        ".modal"
      );
    display.classList.toggle("show");
  }
});

addCateBtn.addEventListener("click", onClickAddCate);
