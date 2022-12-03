const form = document.querySelector("[data-form]")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const loginName = document.querySelector("[data-loginName]").value
    const loginPassword = document.querySelector("[data-loginPassword]").value

    if (loginName == "juanc" && loginPassword == "a1b2C3") {
        window.location.href = "../html/products.html"
    }
    else {
        alert("Nombre y/o Contraseña inválidos")
    }

})