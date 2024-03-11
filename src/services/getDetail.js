import streaming from "../data/streaming.json"

async function getDetail(id) {
    const response = await fetch("../data/streaming.json").then(res => {
        return res.json()
    }).catch(() => {
        return streaming.result.find(show => show.tmdbId == id)
    })

    return response;

}

export default getDetail