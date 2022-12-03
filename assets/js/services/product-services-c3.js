//GET All from C3
const productListC03 = () =>
    {
        fetch('https://e-commerce-bakery.onrender.com/productsC3')
        .then((res) => res.json())
        .catch((err) => console.log(err))
    }

//GET One Product from C3
const uniqueProductC03 = (id) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC3/${id}`).then(res => {return res.json()})
}

//POST One Product from C3
const createProductC03 = (imgURL, section, name, price, description) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC3`,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imgURL,
            section,
            name,
            price,
            description,
            id: uuid.v4()
        })
    })
    .then((res) => {
        if (res.ok) {
            return res.body
        }
        throw new Error("No se puede crear el producto!")
    })
}

//PUT/PATCH One Product from C3
const editProductC03 = async (id, imgURL, section, name, price, description) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC3/${id}`,
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imgURL,
            section,
            name,
            price,
            description
        })
    }).then((res) => {
        return res.json()
    })//.then((data) => {console.log(data)})
    .catch((err) => {
        console.log(err)
    })
}

//DELETE One Product from C3
const deleteProductC03 = async (id) => {
    return await fetch(`https://e-commerce-bakery.onrender.com/productsC3/${id}`,
    {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json"
        }
    })
}

export const productServicesC3 = {
    productListC03,
    uniqueProductC03,
    createProductC03,
    editProductC03,
    deleteProductC03
}