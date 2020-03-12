//Classe

class despesa {
    constructor (valor, tipo, descricao)
    {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }

}

const listaDespesas =[]

function cadastrarDespesa()
{
    const valor = document.getElementById("valor")
    const tipo = document.getElementById("tipo")
    const descricao = document.getElementById("descricao")
    
    //Verificador
    const minhaDespesa = new despesa (valor.value, tipo.value, descricao.value);
    if(valor.value === "" || tipo.value === "" || descricao.value === "" || valor.value === "0"){
        alert("preenche direito esse negócio")
    } else
    {
        listaDespesas.push(valor.value, tipo.value, descricao.value)
    }
    console.log(listaDespesas)

    //Adicionar lista
    const listaDetalhada = document.getElementById("lista-detalhada")
    //listaDetalhada.innerHTML += "<li> Despesa com: " + tipo.value + " - " + descricao.value + " - R$" + valor.value + "</li>"
    listaDetalhada.innerHTML += "<li> Despesa com: " + listaDespesas[1] + " - " + listaDespesas[2] + " - R$" + listaDespesas[0] + "</li>"


    //Apagar valores
    valor.value = ""
    tipo.value = ""
    descricao.value = ""

}

