import streaming from "../data/streaming.json"

async function getCategory(id) {
    const response = await fetch("../data/streaming.json").then(res => {
        return res.json()
    }).catch(() => {
        let categoryName = "";
        const category = streaming.result.find(show =>
            show.genres.find(genre => genre.id == id)
        )
        categoryName = category?.genres?.find(genre => genre?.id == id)?.name;
        return {
            category: categoryName,
            data:
                streaming.result.filter(show =>
                    show.genres.find(genre => genre.id == id)
                ),
        }
    })

    return response;

}

export default getCategory