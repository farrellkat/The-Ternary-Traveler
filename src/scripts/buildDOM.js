import apiModule from "./apiModule"
import HTMLFactory from "./HTMLFactory";
import postToDom from "./postToDom";
import htmlFormCreator from "./htmlFormCreator";

const buildDOM = {
    grabInputFormInfo: function () {
        apiModule.getPlaces().then((places) => {
            postToDom("#formContainer", htmlFormCreator())
            places.forEach(place => {
                const option = `<option value="${place.id}">${place.name}</option>`
                postToDom("#countrySelect", option)
            })
        })
    },
    grabCardInfo: function () {
        apiModule.getInterests().then((interests) => {
            interests.forEach(interest => {
                const id = interest.id
                const name = interest.name
                const description = interest.description
                const country = interest.place.name
                postToDom("#cardContainer", HTMLFactory(id, name, description, country))
            })
        })
    }
}

export default buildDOM