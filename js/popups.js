let failure = document.querySelector(".popup--failure");
let success = document.querySelector(".popup--success");
let btn = document.querySelector(".field-action__btn");
let popupBtn = document.querySelectorAll(".popup__btn");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  if(!document.getElementsByName("name")[0].value
    && !document.getElementsByName("surname")[0].value
    && !document.getElementsByName("email")[0].value) {
      failure.classList.add("popup--show");
  } else {
    success.classList.add("popup--show");
  }
});

for (let i = 0; i < popupBtn.length; i++) {
  popupBtn[i].addEventListener("click", function(event) {
    if (success.classList.contains("popup--show")) {
      success.classList.remove("popup--show");
    } else if (failure.classList.contains("popup--show")) {
      failure.classList.remove("popup--show");
    }
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (success.classList.contains("popup--show")) {
      success.classList.remove("popup--show");
    } else if (failure.classList.contains("popup--show")) {
      failure.classList.remove("popup--show");
    }
  }
});
