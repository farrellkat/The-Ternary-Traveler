//name
//description
//cost
//review

const HTMLFactory = (id, name, description, country) => {
  return  `
    <article id="placeCard--${id}">
        <h1>${name}</h1>
        <div>${description}</div>
        <div>${country}</div>
    </article>
    `
}

export default HTMLFactory