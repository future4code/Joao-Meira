//Classe

class despesa {
    constructor (valor, tipo, descricao)
    {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }

}

function soma(total, num){
    return Number(total) + Number(num)
}

const listaDespesas =[]
const valorDespesas = []
console.log(listaDespesas, valorDespesas)

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
        listaDespesas.unshift(valor.value, tipo.value, descricao.value)
        valorDespesas.unshift(valor.value)
    }
    console.log(listaDespesas)

    //Adicionar lista e despesa total - EXTRATO
    const extrato = document.getElementById("extrato")
    extrato.innerHTML += "<li> Despesa com: " + listaDespesas[1] + " - " + listaDespesas[2] + " - R$" + listaDespesas[0] + "</li>"
    valorTotal = valorDespesas.reduce(soma)
    document.getElementById("total").innerHTML = "<p> Total de Despesa: R$ " + valorTotal + "</p>"

    //Apagar valores
    valor.value = ""
    tipo.value = ""
    descricao.value = ""

}


function filtrarDespesa()
{
    const listaDetalhada = getElementById("lista-detalhada")
    const filtroTipo = document.getElementById("filtrotipo")
    const valMin = document.getElementById("val-min").value
    const valMax = document.getElementById("val-max").value


    const valorFiltrado = listaDespesas.filter((valor, index, arr) =>
    {
        return valor.value > valMin.value && valor.value < valMax.value
    })
    const tipoFiltrado = listaDetalhada.filter((tipo, index, arr) =>
    {
        return tipo.value === filtroTipo.value
    })
    console.log(valorFiltrado)
    console.log(tipoFiltrado)

    listaDetalhada.innerHTML = "<li> Despesa com: " + tipoFiltrado.value + " - " + listaDetalhada[2] + " - R$" + valorFiltrado.value + "</li>"
}





/*
//Adicionar lista - EXTRATO
    const listaDetalhada = document.getElementById("lista-detalhada")
    listaDetalhada.innerHTML += "<li> Despesa com: " + listaDespesas[1] + " - " + listaDespesas[2] + " - R$" + listaDespesas[0] + "</li>"
*/