import { productServices } from "../services/product-services.js"
import { productServicesC1 } from "../services/product-services-c1.js"
import { productServicesC2 } from "../services/product-services-c2.js"
import { productServicesC3 } from "../services/product-services-c3.js"
import { productServicesC4 } from "../services/product-services-c4.js"
import { priceFormat } from "../priceFormat.js"


const getDetailsURL = new URL(window.location)
const DetailsId = getDetailsURL.searchParams.get("id")
const detailsSection = getDetailsURL.searchParams.get("section")

const detailsImg = document.querySelector("[data-detailsImg]")
const detailsName = document.querySelector("[data-detailsProduct]")
const detailsPrice = document.querySelector("[data-detailsPrice]")
const detailsDescription = document.querySelector("[data-detailsDescription]")

function selectCategory() {
    switch(detailsSection) {
        case "Categoría 1":
            productServicesC1.uniqueProductC01(DetailsId).then((dataC1) => {
            detailsImg.setAttribute("src", dataC1.imgURL)
            detailsName.innerHTML = dataC1.name
            detailsPrice.innerText = priceFormat(dataC1.price)
            detailsDescription.innerText = dataC1.description
            })
        break
        case "Categoría 2":
            productServicesC2.uniqueProductC02(DetailsId).then((dataC2) => {
            detailsImg.setAttribute("src", dataC2.imgURL)
            detailsName.innerHTML = dataC2.name
            detailsPrice.innerText = priceFormat(dataC2.price)
            detailsDescription.innerText = dataC2.description
            })
        break
        case "Categoría 3":
            productServicesC3.uniqueProductC03(DetailsId).then((dataC3) => {
            detailsImg.setAttribute("src", dataC3.imgURL)
            detailsName.innerHTML = dataC3.name
            detailsPrice.innerText = priceFormat(dataC3.price)
            detailsDescription.innerText = dataC3.description
            })
        break
        case "Categoría 4":
            productServicesC4.uniqueProductC04(DetailsId).then((dataC4) => {
            detailsImg.setAttribute("src", dataC4.imgURL)
            detailsName.innerHTML = dataC4.name
            detailsPrice.innerText = priceFormat(dataC4.price)
            detailsDescription.innerText = dataC4.description
            })
        break
        default:
            alert("Error")
        break
    }
}


const newProduct = (name, price, imgURL, id, section) => {

    const card = document.createElement("div")
    const cardContent = `
        <div class="product-box">
            <ul>
                <li class="product-box--img"><img src="${imgURL}" alt=""></li>
                <li class="product-box--name">${name}</li>
                <li class="product-box--price">${priceFormat(price)}</li>
                <li class="product-box--link"><a href="./product-details.html?id=${id}&section=${section}">Ver producto</a></li>
            </ul>
        </div>
    `

    card.innerHTML = cardContent
    // card.classList.add("card")
    card.dataset.id = id
    return card

}


const product = document.querySelector("[data-products]")

const render = async () => {
    if(detailsSection == "Categoría 1") {
        try {
            const productsC1 = await productServices.productListC1()
                productsC1.slice(1, 5).forEach(element => {
                product.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    else if (detailsSection == "Categoría 2") {
        try {
            const productsC2 = await productServices.productListC2()
                productsC2.slice(1, 5).forEach(element => {
                product.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    else if (detailsSection == "Categoría 3") {
        try {
            const productsC3 = await productServices.productListC3()
                productsC3.slice(1, 5).forEach(element => {
                product.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    else if (detailsSection == "Categoría 4") {
        try {
            const productsC4 = await productServices.productListC4()
                productsC4.slice(1, 5).forEach(element => {
                product.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
            })
        }
        catch (err) {
            console.log(err)
        }
    }

}

selectCategory()
render()