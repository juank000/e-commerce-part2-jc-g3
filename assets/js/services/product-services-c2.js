//GET All from C2
const productListC02 = () =>
    {
        fetch('https://e-commerce-bakery.onrender.com/productsC2')
        .then((res) => res.json())
        .catch((err) => console.log(err))
    }

//GET One Product from C2
const uniqueProductC02 = (id) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC2/${id}`).then(res => {return res.json()})
}

//POST One Product from C2
const createProductC02 = (imgURL, section, name, price, description) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC2`,
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

//PUT/PATCH One Product from C2
const editProductC02 = async (id, imgURL, section, name, price, description) => {
    return fetch(`https://e-commerce-bakery.onrender.com/productsC2/${id}`,
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

//DELETE One Product from C2
const deleteProductC02 = async (id) => {
    return await fetch(`https://e-commerce-bakery.onrender.com/productsC2/${id}`,
    {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json"
        }
    })
}

export const productServicesC2 = {
    productListC02,
    uniqueProductC02,
    createProductC02,
    editProductC02,
    deleteProductC02
}