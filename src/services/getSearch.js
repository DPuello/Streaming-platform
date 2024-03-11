import streaming from "../data/streaming.json"

async function getSearch(search) {
    const formattedSearch = search?.toLowerCase();
    const response = await fetch("../data/streaming.json").then(res => {
        return res.json()
    }).catch(() => {
        return streaming.result.filter(show =>
            show.genres?.find(genre => genre?.name?.toLowerCase() == formattedSearch) ||
            show?.title?.toLowerCase().includes(formattedSearch) || 
            show?.year?.toString().includes(formattedSearch)
        )
        
    })

    return response;

}

export default getSearch