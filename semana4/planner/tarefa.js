function inserirTarefa()
{
    const tarefa = document.getElementById("tarefa")
    const novaTarefa = tarefa.value
    console.log(novaTarefa)


    const dia = document.getElementById("date")
    const diaDaSemana = dia.value
    console.log(diaDaSemana)

    //DESAFIO 1
    var x = document.getElementById("tarefa").value
    if (x === "" || x===null || x===undefined)
    {
        alert ("Tarefas em branco não podem ser adicionadas.")
        return false
    }

    if (diaDaSemana === "Segunda-feira")
    {  
        const listaTarefas = document.getElementById("segunda")
        listaTarefas.innerHTML += "<li name='pralimpar' name='pralimpar' onclick='riscarTarefa(event)' onclick='riscarTarefa(event)'>" + novaTarefa + "</li>"
    }
    if (diaDaSemana === "Terça-feira")
    {  
        const listaTarefas = document.getElementById("terça")
        listaTarefas.innerHTML += "<li name='pralimpar' onclick='riscarTarefa(event)'>" + novaTarefa + "</li>"
    }
    if (diaDaSemana === "Quarta-feira")
    {  
        const listaTarefas = document.getElementById("quarta")
        listaTarefas.innerHTML += "<li name='pralimpar' onclick='riscarTarefa(event)'>" + novaTarefa + "</li>"
    }
    if (diaDaSemana === "Quinta-feira")
    {  
        const listaTarefas = document.getElementById("quinta")
        listaTarefas.innerHTML += "<li name='pralimpar' onclick='riscarTarefa(event)'>" + novaTarefa + "</li>"
    }
    if (diaDaSemana === "Sexta-feira")
    {  
        const listaTarefas = document.getElementById("sexta")
        listaTarefas.innerHTML += "<li name='pralimpar' onclick='riscarTarefa(event)'>" + novaTarefa + "</li>"
    }
    if (diaDaSemana === "Sábado")
    {  
        const listaTarefas = document.getElementById("sabado")
        listaTarefas.innerHTML += "<li name='pralimpar' onclick='riscarTarefa(event)'>" + novaTarefa + "</li>"
    }
    if (diaDaSemana === "Domingo")
    {  
        const listaTarefas = document.getElementById("domingo")
        listaTarefas.innerHTML += "<li name='pralimpar' onclick='riscarTarefa(event)'>" + novaTarefa + "</li>"
    }

    document.getElementById("tarefa").value = ''
}

//DESAFIO 2
function riscarTarefa(event)
{
    event.target.classList.add("riscada")
    //const classe = getElementsByClassName("riscada")
    //const riscar = classe.strike()
    //document.getElementsByClassName("riscada").innerHTML = riscar
    //const vamosRiscar = event.target
    //vamosRiscar.strike.toggle
    //const riscar = vamosRiscar.strike()
    //document.getElementsBy("main>div div ul li").innerHTML = riscar
    //document.getElementsByClassName("tarefaInserida").text-decoration='line-through'
    //tarefaRiscada = getElementsByClassName("tarefaInserida")
    //riscar = tarefaRiscada.innerHTML
}

