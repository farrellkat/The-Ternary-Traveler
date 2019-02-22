const HTMLFactory = (id, name, description, country) => {
  return  `
    <article id="placeCard--${id}" class="placeCard">
        <h4 class="name">${name}</h4>
        <div class="description">${description}</div>
        <div class="country">${country}</div>
        <button id="deleteCardButton--${id}" class="deleteButton">Delete</button>
    </article>
    `
}

export default HTMLFactory