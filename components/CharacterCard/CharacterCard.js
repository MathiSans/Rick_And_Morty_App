export function CharacterCard(props) {
  const card = document.createElement("li");
  card.innerHTML = `
  <div class="card__image-container">
     <img
       class="card__image"
       crossorigin
       src=${props.image}
       alt="Image of the character ${props.name}"
       />
    <div class="card__image-gradient"></div>
   </div>
   <div class="card__content">
   <h2 class="card__title">${props.name}</h2>
     <dl class="card__info">
       <dt class="card__info-title">Status</dt>
       <dd class="card__info-description">${props.status}</dd>
       <dt class="card__info-title">Type</dt>
       <dd class="card__info-description">${props.type}</dd>
       <dt class="card__info-title">Occurrences</dt>
       <dd class="card__info-description">${props.episode.length}</dd>
     </dl>
   </div>`;
  console.log(props.episode.length);
  return card;
}
