$('#resultado').hide()//sumindo a div resultado
const tabela = $('<table>')
const dadosT = [
    $('<th>').append('Aluno'),
    $('<th>').append('Nota')
]
const linhaT = $('<tr>').append(dadosT)
tabela.append(linhaT)

function verificaDados(){
    const nota = $('#nota')
    const nome = $('#nome')
    if(nota.val() > 10 || nota.val() == ''){
        alert('Nota invalida! Digite novamente')
        nota.focus()
        nota.val('')
    } else if(nome.val() == ''){
        alert('Por favor escreva o nome do aluno!')
        nome.focus()
    } else {
        adicionar()
    }
    
}


function adicionar(){
    const nome = $('#nome')
    const nota = $('#nota')
    const notaFormatada = parseFloat(nota.val())
    const linha = $('<tr>')
    const dados = [
        $('<td>').append(`${nome.val()}`),
        $('<td>').append(notaFormatada.toFixed(1)),
        $('<td>').append('<button type="button" id="DeleteButton" onclick="remover(this)" class="btn btn-outline-danger">Excluir</button>')//passa o proprio button como parametro
    ] 


    linha.append(dados)
    tabela.append(linha)
    nome.val('')
    nota.val('')
    nome.focus()
    $('#resultado').show()

}
$('#resultado').append(tabela)

function remover(item) {
    console.log(item)
    let tr = $(item).closest('tr')//pega o elemento tr pai do botao

    tr.fadeOut(1000, function() {
        tr.remove()
    })

}

// OUTRO METODO DE APAGAR ELEMENTOS DA TABELA 

/*$("table").on("click", "#DeleteButton", function() {
    $(this).closest('tr').fadeOut(9000, function() {
        $(this).remove()
    });
});*/

