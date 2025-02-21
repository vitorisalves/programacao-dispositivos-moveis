const tarefas = [
    { id: 1739220546861, nome: "Estudar JavaScript", concluida: false }
]
tarefas.push(novaTarefa)

function listarTarefas() {
    return tarefas
}

function adicionarTarefa(nomeTarefa) {
    const novaTarefa = {
        id: Date.now().toString(),
        nome: nomeTarefa,
        cncluida: false
    }
}

function removerTarefa(idTarefa) {
    const posicao = tarefas.findIndex(task => task.id === idTarefa)
    if (posicao !== -1) {
        tarefas.splice(posicao, 1)
    }
}

function modificarTarefa(idTarefa, tarefaModificada) {
    const tarefaLocalizada = tarefas.find(tarefa => tarefa.id === idTarefa)
    if (tarefaLocalizada){
        Object.assign(tarefaLocalizada, tarefaModificada)
    }
}

export {listarTarefas, adicionarTarefa, removerTarefa, modificarTarefa}