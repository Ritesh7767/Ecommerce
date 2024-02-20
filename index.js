let container = document.querySelector(".container")
let url = ""

document.querySelector("button").addEventListener("click", () => {
    let searchValue = document.querySelector("input").value
    url = "category/" + searchValue;
    fetchData()
})

let fetchData = async () => {
    try {
        container.innerHTML = "<h1>Loading...</h1>"
        let data =  await fetch(`https://fakestoreapi.com/products/${url}`)
        data = await data.json()
        AppendData(data)
    }
    catch (err) {
        console.log(err)
    }
}


let AppendData = (data) => {
  
    container.innerHTML = ""

    data.forEach((ele) => {

        let parentDiv = document.createElement("div")
        parentDiv.setAttribute("id", "parentDiv")

        let image = document.createElement("img")
        image.src = ele.image

        let title = document.createElement("p")
        title.append(ele.title)

        let Category = document.createElement("p")
        Category.append(`Category : ${ele.category}`)

        let rating = document.createElement("div")
        let rate = document.createElement("span")
        let count = document.createElement("span")

        rate.append(`rate : ${ele.rating.rate}`)
        count.append(`${ele.rating.count} users`)
        rating.append(rate, count)

        let price = document.createElement('p')
        price.append(`Price : ${ele.price}`)

        parentDiv.append(image, title, Category, rating, price)

        container.append(parentDiv)

    })

}

fetchData()