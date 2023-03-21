const btnOpen = document.querySelector(".form-btn");
const btnClose = document.querySelector(".form-close");
const backdrop = document.querySelector(".backdrop");

const openCloseForm = (e) => {
  if (e.target === e.currentTarget || e.currentTarget === btnClose) {
    backdrop.classList.toggle("hidden");
  }
};

btnOpen.addEventListener("click", openCloseForm);
btnClose.addEventListener("click", openCloseForm);
backdrop.addEventListener("click", openCloseForm);
