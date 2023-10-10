const time = document.querySelector(".clock > h1");
const ampm = document.querySelector(".ampm");

const onLoadPage = () => {
  var currentDate = new Date();
  var text = "";

  currentDate.getHours() > 12
    ? (ampm.innerHTML = "PM")
    : (ampm.innerHTML = "AM");
  if (currentDate.getHours() >= 10) {
    text += currentDate.getHours() + " : ";
  } else {
    text += "0" + currentDate.getHours() + " : ";
  }
  if (currentDate.getMinutes() >= 10) {
    text += currentDate.getMinutes();
  } else {
    text += "0" + currentDate.getMinutes();
  }

  time.innerHTML = text;
  setTimeout(onLoadPage, 1000);
};

window.addEventListener("load", onLoadPage);
