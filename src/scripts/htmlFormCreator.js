const htmlFormCreator = () => {
    return `
    <section id="inputSection">
        <input type="text" id="placeName" placeholder="Name of point of interest" name="placeName">
        <input type="text" id="placeName" placeholder="Description" name="placeName">
        <select id="countrySelect"></select>
        <button id="submitButton">Submit</button>
    </section>
`
}

export default htmlFormCreator