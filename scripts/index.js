// @todo: Темплейт карточки
const cards = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(title, img, onDeleteCard){
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = card.querySelector('.card__image');
    card.querySelector('.card__title').textContent = title;
    cardImg.src = img;
    cardImg.alt = `Фотография места: ${title}`;
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

initialCards.forEach((element) => {
    const card = createCard(element.name, element.link, cardDelete);
    addCard(card)
})

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
