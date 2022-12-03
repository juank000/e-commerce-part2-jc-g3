const inputs = document.querySelectorAll("input")
const inputxt = document.querySelectorAll("textarea")

let fieldContactName = document.getElementById('input-name')
let fieldContactMssg = document.getElementById('input-msg')

let fieldLoginName = document.getElementById('login-name')
let fieldLoginMssg = document.getElementById('login-password')

let fieldAddingUrl = document.getElementById('url')
let fieldAddingCategory = document.getElementById('category')
let fieldAddingProduct = document.getElementById('product')
let fieldAddingPrice = document.getElementById('price')
let fieldAddingDescription = document.getElementById('description')

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
    validate(input.target);
    });
});

inputxt.forEach((input) => {
    input.addEventListener("blur", (input) => {
    validate(input.target);
    });
});

/* ----------- */

function validate (input) {
    const inputType = input.dataset.type;

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.classList.remove("textarea-container--invalid")
        input.parentElement.querySelector(".input-mssg--error").innerHTML = " "
    } else {
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.classList.add("textarea-container--invalid")
        input.parentElement.querySelector(".input-mssg--error").innerHTML = showMssg(inputType, input)
    }
}

const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "tooLong"
]

const errorMssgs = {
    contactName: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "Nombre debe contener mínimo 4 caracteres y máximo 15"
    },
    contactMssg: {
        valueMissing: "El campo mensaje no puede estar vacío",
        tooShort: "Mensaje debe contener mínimo 20 caracteres y máximo 500",
        tooLong: "Mensaje debe contener mínimo 20 caracteres y máximo 500"
    },
    /*--------------------------------------------------*/
    loginName: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "Nombre debe contener mínimo 4 caracteres y máximo 15"
    },
    loginPassword: {
        valueMissing: "El campo mensaje no puede estar vacío",
        patternMismatch: "Contraseña debe contener --- y ___"
    },
    /*--------------------------------------------------*/
    url: {
        valueMissing: "El campo URL no puede estar vacío",
        patternMismatch: "La URL debe seguir los parámetros. URL no válida!"
    },
    category: {
        valueMissing: "El campo categoría no puede estar vacío",
        patternMismatch: "En categoría debe seleccionar una de las opciones dadas"
    },
    product: {
        valueMissing: "El campo nombre de producto no puede estar vacío",
        patternMismatch: "Nombre de producto debe contener mínimo 5 caracteres y máximo 20"
    },
    price: {
        valueMissing: "El campo precio no puede estar vacío",
        patternMismatch: "Precio debe contener únicamente números. Precio no válido!"
    },
    description: {
        valueMissing: "El campo descripción no puede estar vacío",
        tooShort: "Descripción debe contener mínimo 30 caracteres y máximo 300",
        tooLong: "Descripción debe contener mínimo 30 caracteres y máximo 300"
    }
}

function showMssg(inputType, input) {
    let mssg = ""
    errorTypes.forEach((error) => {
        if (input.validity[error]) {
            mssg = errorMssgs[inputType][error]
            /*console.log(inputType, error)
            console.log(input.validity[error])
            console.log(errorMssgs[inputType][error])*/
        }
    })
    return mssg
}

function reset() {
    fieldContactName.value = ''
    fieldContactMssg.value = ''
}

/*function resetLogin() {
    fieldLoginName.value = ''
    fieldLoginMssg.value = ''
}*/

/*function resetAdding() {
    fieldAddingUrl.value = ''
    fieldAddingCategory.value = ''
    fieldAddingProduct.value = ''
    fieldAddingPrice.value = ''
    fieldAddingDescription.value = ''
}*/