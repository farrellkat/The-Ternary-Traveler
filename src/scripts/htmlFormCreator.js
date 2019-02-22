const htmlFormCreator = () => {
    return `
        <input type="text" id="placeName" placeholder="Name of point of interest" name="placeName">
        <input type="text" id="placeDescription" placeholder="Description" name="placeDescription">
        <select id="countrySelect"></select>
        <button id="submitButton">Submit</button>
`
}

export default htmlFormCreator