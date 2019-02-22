const apiModule = {
    getInterests: () => {
        return fetch("http://0.0.0.0:8088/interests?_expand=place")
            .then(res => res.json())
    },
    getPlaces: () => {
        return fetch("http://0.0.0.0:8088/places")
            .then(res => res.json())
    },
    getOneInterest: (id) => {
        return fetch(`http://localhost:8088/${id}`)
            .then(res => res.json())
    },
    postInterest: (obj) => {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    },
    editInterest: (id, obj) => {
        return fetch(`http://localhost:8088/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    },
    deleteInterest: (id) => {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "DELETE",
        })
    }

}

export default apiModule