let activeModal;

const setActiveModal = (target) => { 
  activeModal = target;
}

export const showModal = (target) => { 
  setActiveModal(target);
  target.classList.add("popup_is-opened");
  target.classList.add("popup_is-animated");
  target.addEventListener("click", handleModalClick);
  document.addEventListener("keydown", handleModalKeyboard);
}

export const closeModal = (target) => { 
  target.classList.remove("popup_is-opened");
  target.removeEventListener("click", handleModalClick);
  document.removeEventListener("keydown", handleModalKeyboard);
}

const handleModalClick = (evt) => { 
  if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close")) {
    closeModal(activeModal);
  }
}

const handleModalKeyboard = (evt) => { 
  if (evt.key === "Escape") { 
    closeModal(activeModal);
  }
}
