//GET All from C1
const productListC01 = () =>
    {
        fetch('https://e-commerce-bakery.onrender.com/productsC1')
        .then((res) => res.json())
        .catch((err) => console.log(err))
    }

//GET One Product from C1
const uniqueProductC01 = (id) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC1/${id}`).then(res => {return res.json()})
}

//POST One Product from C1
const createProductC01 = (imgURL, section, name, price, description) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC1`,
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

//PUT/PATCH One Product from C1
const editProductC01 = async (id, imgURL, section,  name, price, description) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC1/${id}`,
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

//DELETE One Product from C1
const deleteProductC01 = async (id) => {
    return await fetch(`https://e-commerce-bakery.onrender.com/productsC1/${id}`,
    {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json"
        }
    })
}

export const productServicesC1 = {
    productListC01,
    uniqueProductC01,
    createProductC01,
    editProductC01,
    deleteProductC01
}