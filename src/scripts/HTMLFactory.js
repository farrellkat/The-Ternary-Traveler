//name
//description
//cost
//review

const HTMLFactory = (id, name, description, country) => {
  return  `
    <article id="placeCard--${id}">
        <h4>${name}</h4>
        <div>${description}</div>
        <div>${country}</div>
        <button id="deleteCardButton--${id}">Delete</button>
    </article>
    `
}

export default HTMLFactory