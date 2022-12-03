import { productServices } from "../services/product-services.js"
import { productServicesC1 } from "../services/product-services-c1.js"
import { productServicesC2 } from "../services/product-services-c2.js"
import { productServicesC3 } from "../services/product-services-c3.js"
import { productServicesC4 } from "../services/product-services-c4.js"
import { priceFormat } from "../priceFormat.js"

const newProduct = (name, price, imgURL, id, section) => {

    const card = document.createElement("div")
    const cardContent = `
    <div class="product-box">
        <div class="product-box--icons">
            <span class="product-box--delete_icon material-symbols-outlined" type="button">delete_forever</span>
            <span class="product-box--edit_icon material-symbols-outlined" onclick="location = 'product-edit.html?id=${id}&section=${section}'">edit</span>
        </div>
        <ul>
            <li class="product-box--img"><img src="${imgURL}" alt=""></li>
            <li class="product-box--name">${name}</li>
            <li class="product-box--price">${priceFormat(price)}</li>
        </ul>
    </div>
    `

    card.innerHTML = cardContent
    // card.classList.add("card")
    card.dataset.id = id
    card.dataset.section = section
    return card

}

const product = document.querySelector("[data-products]")

product.addEventListener("click", async (eve) => {
    let delBtn = eve.target.classList.contains("product-box--delete_icon")
    if(delBtn) {
        const productDel = eve.target.closest("[data-id]")
        let id = productDel.dataset.id
        let section = productDel.dataset.section

        // console.log(id)
        // console.log(section)

        switch(section) {
            case "Categoría 1":
                productServicesC1.deleteProductC01(id)
                .then((response) => {
                    productDel.remove()
                    //console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
            break
            case "Categoría 2":
                productServicesC2.deleteProductC02(id)
                .then((response) => {
                    productDel.remove()
                    //console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
            break
            case "Categoría 3":
                productServicesC3.deleteProductC03(id)
                .then((response) => {
                    productDel.remove()
                    //console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
            break
            case "Categoría 4":
                productServicesC4.deleteProductC04(id)
                .then((response) => {
                    productDel.remove()
                    //console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
            break
            default:
                alert("Error")
            break
        }
    }
})

const render = async () => {
    try {
        const productsC1 = await productServices.productListC1()
            productsC1.forEach(element => {
            product.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
        })
        const productsC2 = await productServices.productListC2()
            productsC2.forEach(element => {
            product.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
        })
        const productsC3 = await productServices.productListC3()
            productsC3.forEach(element => {
            product.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
        })
        const productsC4 = await productServices.productListC4()
            productsC4.forEach(element => {
            product.appendChild(newProduct(element.name, element.price, element.imgURL, element.id, element.section))
        })
    }
    catch (err) {
        console.log(err)
    }
}

render()