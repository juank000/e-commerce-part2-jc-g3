//GET All from C4
const productListC04 = () =>
    {
        fetch('https://e-commerce-bakery.onrender.com/productsC4')
        .then((res) => res.json())
        .catch((err) => console.log(err))
    }

//GET One Product from C4
const uniqueProductC04 = (id) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC4/${id}`).then(res => {return res.json()})
}

//POST One Product from C4
const createProductC04 = (imgURL, section, name, price, description) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC4`,
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

//PUT/PATCH One Product from C4
const editProductC04 = async (id, imgURL, section, name, price, description) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC4/${id}`,
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

//DELETE One Product from C4
const deleteProductC04 = async (id) => {
    return await fetch(`https://e-commerce-bakery.onrender.com/productsC4/${id}`,
    {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json"
        }
    })
}

export const productServicesC4 = {
    productListC04,
    uniqueProductC04,
    createProductC04,
    editProductC04,
    deleteProductC04
}