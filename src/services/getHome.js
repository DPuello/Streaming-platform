import category from "../data/categories.json"

async function getHomeData() {
    const response = await fetch("../data/categories.json").then(res => {
        return res.json()
    }).catch(() => {
        return category.result.main
    })

    return response;

}

export default getHomeData