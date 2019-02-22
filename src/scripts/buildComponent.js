import apiModule from "./apiModule";
import buildDOM from "./buildDOM";
import clearForms from "./clearFields";

const $ = document.querySelector.bind(document)

const buildComponent = () => {
    const name = $("#placeName").value
    const description = $("#placeDescription").value
    const country = $("#countrySelect").value
    if (name === "") {
        alert("Please enter a name")
    } else if (description === "") {
        alert("Please enter a description")
    } else if (country === "") {
        alert("Please choose a country")
    } else {
        const newInterest = {
            placeId: country,
            name: name,
            description: description
        }
        apiModule.postInterest(newInterest).then(() => {
            clearForms()
            $("#cardContainer").innerHTML = ""
            buildDOM.grabCardInfo()
        })
    }

}

export default buildComponent