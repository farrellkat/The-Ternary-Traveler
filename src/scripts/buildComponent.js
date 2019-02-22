import apiModule from "./apiModule";
import buildDOM from "./buildDOM";

const $ = document.querySelector.bind(document)

const buildComponent = () => {
    const name = $("#placeName").value
    const description = $("#placeDescription").value
    const country = $("#countrySelect").value

    const newInterest = {
        placeId: country,
        name: name,
        description: description
    }
    apiModule.postInterest(newInterest).then(() => {
        $("#cardContainer").innerHTML = ""
        buildDOM.grabCardInfo()
    })
}

export default buildComponent