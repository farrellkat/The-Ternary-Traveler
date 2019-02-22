const htmlFormCreator = () => {
    return `
        <input type="text" id="placeName" placeholder="Name" name="placeName">
        <textarea type="text" rows="5" id="placeDescription" placeholder="Description" name="placeDescription"></textarea>
        <select id="countrySelect"><option value="">Country</option></select>
        <button id="submitButton">Submit</button>
`
}

export default htmlFormCreator