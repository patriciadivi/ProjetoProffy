// Procurar o botão
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFielContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false

    //limpar os campos. Que campos?
    const fields = newFielContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento
        field.value = ""

    })   

    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFielContainer)

}