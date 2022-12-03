import { productServices } from "../services/product-services.js"
import { priceFormat } from "../priceFormat.js"

const newProduct = (name, price, imgURL, id, section) => {

    const card = document.createElement("div")
    const cardContent = `
        <div class="product-box">
            <ul>
                <li class="product-box--img"><img src="${imgURL}" alt=""></li>
                <li class="product-box--name">${name}</li>
                <li class="product-box--price">${priceFormat(price)}</li>
                <li class="product-box--link"><a href="html/product-details.html?id=${id}&section=${section}">Ver producto</a></li>
            </ul>
        </div>
    `

    card.innerHTML = cardContent
    // card.classList.add("card")
    card.dataset.id = id
    return card
}

const productC1 = document.querySelector("[data-productsC1]")
const productC2 = document.querySelector("[data-productsC2]")
const productC3 = document.querySelector("[data-productsC3]")
const productC4 = document.querySelector("[data-productsC4]")

const renderC1 = async () => {
    try {
        const productsC1 = await productServices.productListC1()
        productsC1.forEach(element => {
            productC1.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
        })
    }
    catch (err) {
        console.log(err)
    }
}

const renderC2 = async () => {
    try {
        const productsC2 = await productServices.productListC2()
            productsC2.forEach(element => {
            productC2.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
        })
    }
    catch (err) {
        console.log(err)
    }
}

const renderC3 = async () => {
    try {
        const productsC3 = await productServices.productListC3()
            productsC3.forEach(element => {
            productC3.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
        })
    }
    catch (err) {
        console.log(err)
    }
}

const renderC4 = async () => {
    try {
        const productsC4 = await productServices.productListC4()
            productsC4.forEach(element => {
            productC4.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
        })
    }
    catch (err) {
        console.log(err)
    }
}

renderC1()
renderC2()
renderC3()
renderC4()
