const $ = document.querySelector.bind(document)

const postToDom = (where, what) => {
         $(where).innerHTML += what
        }

export default postToDom