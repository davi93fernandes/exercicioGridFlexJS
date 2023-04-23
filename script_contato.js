
async function enviarFormulario() {
    const elInputNome = document.getElementById("nome").value
    const elInputSobrenome = document.getElementById("sobrenome").value
    const elInputEmail = document.getElementById("email").value
    const elInputMensagem = document.getElementById("mensagem").value

    //ATRIBUI URL Á UMA VARIAVEL, TAMBÉM OS DADOS PARA API
    const url = "https://target-api-simples.cyclic.app/generica"
    const body = {
        nome: elInputNome,
        sobrenome: elInputSobrenome,
        email: elInputEmail,
        mensagem: elInputMensagem
    }

    //ATRIBUI O RETORNO DA API A UMA VARIAVEL
    const retorno = postEmAPI(url, body)


    //ALTERA CSS DE UM OBJETO HTML(TAG DIV)

    const mensagemAPI = retorno.mensagem
    const botaoSucesso = document.getElementById("msgSucesso").style.display = "flex"
    console.log(await retorno)

    //CRIA FUNÇÃO PARA CONFIGURAÇÃO E SELEÇÃO DE OBJETOS (CHAVE : VAOR) PARA API
    async function postEmAPI(url, body) {
        const fetchResposta = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "content-type": "application/json" }
        })
        const respostaEmJSON = await fetchResposta.json()
        return await respostaEmJSON

    }

}


