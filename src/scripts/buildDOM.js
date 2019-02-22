import apiModule from "./apiModule"
import HTMLFactory from "./HTMLFactory";
import postToDom from "./postToDom";
import htmlFormCreator from "./htmlFormCreator";

const buildDOM = {
    buildForm: htmlFormCreator(),

    grabInputFormInfo:
        apiModule.getPlaces().then((places) => {
            postToDom(".output", htmlFormCreator())
            places.forEach(place => {
                const option = `<option value="${place.name}">${place.name}</option>`
                postToDom("#countrySelect", option)
            })
        }),

    grabCardInfo:
        apiModule.getInterests().then((interests) => {
            interests.forEach(interest => {
                const id = interest.id
                const name = interest.name
                const description = interest.description
                const country = interest.place.name
                postToDom(".output", HTMLFactory(id, name, description, country))
            })
        })
}

export default buildDOM