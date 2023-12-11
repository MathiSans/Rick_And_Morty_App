import { cardContainer } from "../../index.js";

export function CharacterCard() {
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `<div class="card__image-container">
    <img
      class="card__image"
      src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      alt="Rick Sanchez"
      data-js="card-image"/>
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title" data-js="card-name">Rick Sanchez</h2>
    <dl class="card__info">
      <dt class="card__info-title" data-js="card-status">Status</dt>
      <dd class="card__info-description">Alive</dd>
      <dt class="card__info-title" data-js="card-type">Type</dt>
      <dd class="card__info-description"></dd>
      <dt class="card__info-title" data-js="card-occurrences">Occurrences</dt>
      <dd class="card__info-description">51</dd>
    </dl>
  </div>`;
  cardContainer.append(card);
  //   return card;
}
