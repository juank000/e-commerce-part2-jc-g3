// GET

const productListC1 = () => fetch("https://e-commerce-bakery.onrender.com/productsC1").then(response => response.json())
const productListC2 = () => fetch("https://e-commerce-bakery.onrender.com/productsC2").then(response => response.json())
const productListC3 = () => fetch("https://e-commerce-bakery.onrender.com/productsC3").then(response => response.json())
const productListC4 = () => fetch("https://e-commerce-bakery.onrender.com/productsC4").then(response => response.json())

export const productServices = {
    productListC1,
    productListC2,
    productListC3,
    productListC4
}