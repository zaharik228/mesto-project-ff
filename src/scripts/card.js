export const createCard = (nameValue, linkValue, removeCard, toggleLikeButtonState, displayImagePopup) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  cardElement.querySelector(".card__title").textContent = nameValue;

  cardImage.src = linkValue;
  cardImage.alt = `На фото: ${nameValue}`;

  deleteButton.addEventListener("click", () => removeCard(cardElement));
  likeButton.addEventListener("click", () => toggleLikeButtonState(likeButton));
  cardImage.addEventListener("click", (evt) => displayImagePopup(evt, nameValue));
  
  return cardElement;
}

export const removeCard = (card) => { 
  card.remove();
}

export const toggleLikeButtonState = (target) => {
  target.classList.toggle("card__like-button_is-active");
}
