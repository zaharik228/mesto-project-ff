import '../index.css';
import {initialCards} from './cards.js';
import {createCard, removeCard, toggleLikeButtonState} from "./card.js";
import {showModal, closeModal} from "./modal.js";

const cardContainer = document.querySelector(".places__list");
const userProfileTitle = document.querySelector(".profile__title");
const userProfileDescription = document.querySelector(".profile__description");
const cardForm = document.forms.new_place;
const cardNameInput = cardForm.elements.place_name;
const cardLinkInput = cardForm.elements.link;
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const profileEditForm = document.forms.edit_profile;
const userNameInput = profileEditForm.elements.name;
const userDescriptionInput = profileEditForm.elements.description;
const newCardModal = document.querySelector(".popup_type_new-card");
const editProfileModal = document.querySelector(".popup_type_edit");
const imagePopup = document.querySelector(".popup_type_image");
const imageDisplay = document.querySelector(".popup__image");
const imageCaptionDisplay = document.querySelector(".popup__caption");
const appendCard = (card, container) => { 
  container.append(card);
}
const populateEditProfileInputs = () => { 
  userNameInput.value = userProfileTitle.textContent;
  userDescriptionInput.value = userProfileDescription.textContent;
}
const handleProfileEditSubmit = (evt) => { 
  evt.preventDefault();
  userProfileTitle.textContent = userNameInput.value;
  userProfileDescription.textContent = userDescriptionInput.value;
  closeModal(editProfileModal);
}
const handleCardFormSubmit = (evt) => { 
  evt.preventDefault();
  const newCard = createCard(cardNameInput.value, cardLinkInput.value, removeCard, toggleLikeButtonState, displayImagePopup);
  cardContainer.prepend(newCard);
  cardForm.reset();
  closeModal(newCardModal);
}
const displayImagePopup = (evt, nameValue) => { 
  imageDisplay.src = evt.target.src;
  imageDisplay.alt = evt.target.alt;
  imageCaptionDisplay.textContent = nameValue;
  showModal(imagePopup);
}

initialCards.forEach((elem) => {
  const card = createCard(elem.name, elem.link, removeCard, toggleLikeButtonState, displayImagePopup);
  appendCard(card, cardContainer);
})

editProfileButton.addEventListener("click", () => { 
  populateEditProfileInputs();
  showModal(editProfileModal);
})

addCardButton.addEventListener("click", () => { 
  showModal(newCardModal);
})

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

cardForm.addEventListener("submit", handleCardFormSubmit);
