document.querySelectorAll(".popup").forEach(popup => {
  if (!popup.classList.contains("popup_is-animated")) {
    popup.classList.add("popup_is-animated");
  }
});

export const openModal = (target) => { 
  target.classList.add("popup_is-opened");
  target.addEventListener("click", handleModalClick);
  document.addEventListener("keydown", closeByEsc);
}

export const closeModal = (target) => { 
  target.classList.remove("popup_is-opened");
  target.removeEventListener("click", handleModalClick);
  document.removeEventListener("keydown", closeByEsc);
}

const handleModalClick = (evt) => { 
  if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close")) {
    const openedPopup = document.querySelector('.popup_is-opened');
    closeModal(openedPopup);
  }
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_is-opened');
    closeModal(openedPopup); 
  }
}