class despesa {
    constructor (valor, tipo, descricao)
    {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }

}

const listaDespesas =[]
console.log(listaDespesas)

function cadastrarDespesa()
{
    const minhaDespesa = new despesa (document.getElementById("valor").value, document.getElementById("tipo").value, document.getElementById("descricao").value);
    listaDespesas.push(minhaDespesa)
}