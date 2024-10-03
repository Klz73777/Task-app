// Selecionar as TAGS 
const inputText = document.getElementById('task');
const taskList = document.getElementById('task-list');
const btnAdd = document.getElementById('btnAdd');

// Conectar o btnAdd a uma função VIA JS
// function (){} funçao anonima
btnAdd.addEventListener('click' , function(){
    addTask();
})

// Funçao - conectada ao botao
function addTask(){
    // value em um input = valor digitado ou valor dentro de uma caixa de texto (string)
    if(inputText.value == ''){
        alert("Você precisa adicionar a descrição da tarefa");

    }
    else{
        // CRIANDO UMA TAG E SALVANDO EM UMA VARIAVEL . createElement() CRIA UMA TAG

        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        taskList.appendChild(li);
    }

    // LIMPANDO A CAIXA DE TEXTO PARA ADICIONAR A NOVA TAREFA
    inputText.value = '' ;
}