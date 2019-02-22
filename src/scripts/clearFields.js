const $ = document.querySelector.bind(document)

const clearForms = () => {
    $("#placeName").value = ""
    $("#placeDescription").value = ""
    $("#countrySelect").value = ""
}

export default clearForms