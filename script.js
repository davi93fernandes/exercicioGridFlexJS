


function somar() {
    const erro = document.getElementById("error")
    const resultadoSoma = document.getElementById("resultado_soma")


    //reset
    erro.style.innerHTML = 0
    resultadoSoma.style.display = "block"
    erro.style.display = "none"

    // entradas    
    const numero1 = document.getElementById("num1").value
    const numero2 = document.getElementById("num2").value

    //validação
    if ((numero1 == "") || (numero2 == "")) {
        resultadoSoma.style.display = "none"
        erro.style.display = "block"

        return
    }
    //processamento
    let resultado = Number(numero1) + Number(numero2)
    //saida
    document.getElementById("resultado_soma").innerHTML = resultado
}


async function buscar() {
    //entradas
    const idPokemon = document.getElementById("idPokemon").value
    const elPokemon = idPokemon
    //processamento
    const url = `https://pokeapi.co/api/v2/pokemon/${elPokemon}`
    const retornoFetch = await fetch(url)
    const retPokemon = await retornoFetch.json()


    //saida
    const envioNome = document.getElementById("nomePoke")
    const envioImg = document.getElementById("resultadoImagem")
    envioNome.innerHTML = retPokemon.name
    envioImg.src = retPokemon.sprites.front_default
console.log(envioImg)
console.log(envioNome)
}