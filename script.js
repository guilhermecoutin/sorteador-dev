function drawNumber() {
    const inputMin = Math.ceil(document.getElementById("min").value)
    const inputMax = Math.floor(document.getElementById("max").value)

    if (inputMax > inputMin) {
        const result = Math.floor(Math.random() * (inputMax - inputMin + 1) + inputMin);
        
        document.querySelector(".result").innerHTML = result;
    } else {
        alert("Valor MAX inválido!")
    }
}