const buttonIzracunaj = document.getElementById("izracunaj")

function resenje() {
    const inputOperacija = document.getElementById("operacija")
    const inputX = document.getElementById("x")
    const inputY = document.getElementById("y")
    const spanResult = document.getElementById("result")

    if (inputOperacija.value == "+") {
        const result = Number(inputX.value) + Number(inputY.value)
        spanResult.innerText = result
    } else if (inputOperacija.value == "-") {
        const result = Number(inputX.value) - Number(inputY.value)
        spanResult.innerText = result
    } else if (inputOperacija.value == "*") {
        const result = Number(inputX.value) * Number(inputY.value)
        spanResult.innerText = result
    } else if (inputOperacija.value == "/") {
        const result = Number(inputX.value) / Number(inputY.value)
        spanResult.innerText = result
    } else {
        const result = "Morate uneti +, -, * ili /"
        spanResult.innerText = result
    }
}

buttonIzracunaj.onclick = resenje
