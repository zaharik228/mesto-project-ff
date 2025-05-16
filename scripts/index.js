// @todo: Темплейт карточки
const cards = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(title, img, func){
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__title').textContent = title;
    card.querySelector('.card__image').src = img;
    card.querySelector('.card__image').alt = `Фотография места: ${title}`;
    const delbutton = card.querySelector('.card__delete-button');
   

    delbutton.addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        cardDelete(eventTarget);
    })
    return card
}

function addCard(card) {
    cards.append(card); 
}

function cardDelete (delbutton) {
    const card = delbutton.closest('.card');
    card.remove();
}

for (let i = 0; i < initialCards.length; i++) {
    createCard(initialCards[i].name, initialCards[i].link);
}

initialCards.forEach((element) => {
    const card = createCard(element.name, element.link, cardDelete);
    addCard(card)
})

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
