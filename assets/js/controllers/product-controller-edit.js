import { productServicesC1 } from "../services/product-services-c1.js"
import { productServicesC2 } from "../services/product-services-c2.js"
import { productServicesC3 } from "../services/product-services-c3.js"
import { productServicesC4 } from "../services/product-services-c4.js"

const getURL = new URL(window.location)
const id = getURL.searchParams.get("id")
const section = getURL.searchParams.get("section")

const inputImg = document.querySelector("[data-url]")

const inputImgURL = document.querySelector("[data-imgURL]")
// const inputCategory = document.querySelector("[data-category]")
const inputName = document.querySelector("[data-product]")
const inputPrice = document.querySelector("[data-price]")
const inputDescription = document.querySelector("[data-description]")

function selectCategory() {
    switch(section) {
        case "Categoría 1":
            productServicesC1.uniqueProductC01(id).then((data) => {
                inputImg.setAttribute("src", data.imgURL)

                inputImgURL.value = data.imgURL
                // inputCategory.value = data.section
                inputName.value = data.name
                inputPrice.value = data.price
                inputDescription.value = data.description
            })
        break
        case "Categoría 2":
            productServicesC2.uniqueProductC02(id).then((data) => {
                inputImg.setAttribute("src", data.imgURL)

                inputImgURL.value = data.imgURL
                // inputCategory.value = data.section
                inputName.value = data.name
                inputPrice.value = data.price
                inputDescription.value = data.description
            })
        break
        case "Categoría 3":
            productServicesC3.uniqueProductC03(id).then((data) => {
                inputImg.setAttribute("src", data.imgURL)

                inputImgURL.value = data.imgURL
                // inputCategory.value = data.section
                inputName.value = data.name
                inputPrice.value = data.price
                inputDescription.value = data.description
            })
        break
        case "Categoría 4":
            productServicesC4.uniqueProductC04(id).then((data) => {
                inputImg.setAttribute("src", data.imgURL)

                inputImgURL.value = data.imgURL
                // inputCategory.value = data.section
                inputName.value = data.name
                inputPrice.value = data.price
                inputDescription.value = data.description
            })
        break
        default:
            alert("Error")
        break
    }
}


const form = document.querySelector("[data-form]")

form.addEventListener("submit", e => {
    e.preventDefault()

    switch(section) {
        case "Categoría 1":
            productServicesC1.editProductC01
            (
                id,
                inputImgURL.value,
                // inputCategory.value,
                section,
                inputName.value,
                inputPrice.value,
                inputDescription.value
            ).then(() => {
                window.location.href = "../html/products.html"
            })
        break
        case "Categoría 2":
            productServicesC2.editProductC02
            (
                id,
                inputImgURL.value,
                // inputCategory.value,
                section,
                inputName.value,
                inputPrice.value,
                inputDescription.value
            ).then(() => {
                window.location.href = "../html/products.html"
            })
        break
        case "Categoría 3":
            productServicesC3.editProductC03
            (
                id,
                inputImgURL.value,
                // inputCategory.value,
                section,
                inputName.value,
                inputPrice.value,
                inputDescription.value
            ).then(() => {
                window.location.href = "../html/products.html"
            })
        break
        case "Categoría 4":
            productServicesC4.editProductC04
            (
                id,
                inputImgURL.value,
                // inputCategory.value,
                section,
                inputName.value,
                inputPrice.value,
                inputDescription.value
            ).then(() => {
                window.location.href = "../html/products.html"
            })
        break
        default:
            alert("Por favor ingrese Categoría #")
        break
    }
})

selectCategory()