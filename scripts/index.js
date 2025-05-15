// @todo: Темплейт карточки
const cards = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function addCard(title, img){
   const card = cardTemplate.querySelector('.card').cloneNode(true);
   card.querySelector('.card__title').textContent = title;
   card.querySelector('.card__image').src = img;
   cards.append(card);
   const delbutton = card.querySelector('.card__delete-button');

delbutton.addEventListener('click', function(evt) {
    const eventTarget = evt.target;
    cardDelete(eventTarget);
})
}

function cardDelete (delbutton) {
    const card = delbutton.closest('.card');
    card.remove();
}

for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].name, initialCards[i].link);
}


// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
