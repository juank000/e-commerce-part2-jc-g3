import { productServicesC1 } from "../services/product-services-c1.js"
import { productServicesC2 } from "../services/product-services-c2.js"
import { productServicesC3 } from "../services/product-services-c3.js"
import { productServicesC4 } from "../services/product-services-c4.js"

const form = document.querySelector("[data-form]")


form.addEventListener("submit", e => {
    e.preventDefault()

    const imgUrl = document.querySelector("[data-url]").value
    const category = document.querySelector("[data-category]").value
    const name = document.querySelector("[data-product]").value
    const price = document.querySelector("[data-price]").value
    const description = document.querySelector("[data-description]").value

    //console.log(category)

    switch(category) {
        case "Categoría 1":
            productServicesC1.createProductC01(
                imgUrl,
                category,
                name,
                price,
                description
            )
            .then((response) => {
                window.location.href = "../html/products.html"
                //console.log(response)
            })
            .catch((error) => {
                console.error(error)
            })
        break

        case "Categoría 2":
            productServicesC2.createProductC02(
                imgUrl,
                category,
                name,
                price,
                description
            )
            .then((response) => {
                window.location.href = "../html/products.html"
                //console.log(response)
            })
            .catch((error) => {
                console.error(error)
            })
        break

        case "Categoría 3":
            productServicesC3.createProductC03(
                imgUrl,
                category,
                name,
                price,
                description
            )
            .then((response) => {
                window.location.href = "../html/products.html"
                //console.log(response)
            })
            .catch((error) => {
                console.error(error)
            })
        break

        case "Categoría 4":
            productServicesC4.createProductC04(
                imgUrl,
                category,
                name,
                price,
                description
            )
            .then((response) => {
                window.location.href = "../html/products.html"
                //console.log(response)
            })
            .catch((error) => {
                console.error(error)
            })
        break

        default:
            alert("Por favor ingrese Categoría #")
        break
    }
})