import buildComponent from "./buildComponent"
import apiModule from "./apiModule";
import buildDOM from "./buildDOM";
const $ = document.querySelector.bind(document)

const eventListeners = {
    submit: function () {
        document.querySelector(".output").addEventListener("click", e => {
            if (e.target.id === "submitButton") {
                buildComponent()
            }
        })
    },
    delete: function () {
        document.querySelector(".output").addEventListener("click", e => {
            if (e.target.id.startsWith("deleteCardButton--")) {
                const confirmation = confirm("Are you sure?")
                if (confirmation === true) {
                    const cardId = e.target.id.split("--")[1]
                    apiModule.deleteInterest(cardId).then(() => {
                        $("#cardContainer").innerHTML = ""
                        buildDOM.grabCardInfo()
                    })
                }
            }
        })

    }
}

export default eventListeners