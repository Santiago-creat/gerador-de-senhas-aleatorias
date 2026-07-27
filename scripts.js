const bntEl = document.querySelector(".btn")
// Procura no documento HTML o primeiro elemento que possui a classe "btn".
// O elemento encontrado é armazenado na constante btnEl para que possamos utilizá-lo posteriormente. 

const inputEl = document.getElementById("input") 
// Procura um elemento pelo atributo id="input".
// Esse elemento será utilizado para exibir a senha gerada. 

const copyIconEl = document.querySelector(".fa-copy")
// Seleciona o ícone responsável por copiar a senha para a área de transferência. 

const alertContainerEl = document.querySelector(".alert-container") 
// Seleciona o elemento responsável por mostrar a mensagem "Copied!" ao usuário.

bntEl.addEventListener("click", () => {
    // addEventListener() registra um "ouvinte" de eventos. 
    // Neste caso, o programa fica aguardando o usuário clicar no botão. 

    createPassword()
    // Quando o clique acontece, a função createPassword() é chamada para gerar uma nova senha. 

})

copyIconEl.addEventListener("click", () => {
    // O programa também fica aguardando um clique sobre o ícone de copiar. 

    copyPassword()
    // Ao clicar, a função copyPassword() copia a senha. 

    if(inputEl.value) {
        // Antes de mostrar a mensagem de sucesso, verifica se realmente existe uma senha no input. 
        // Strings vazias são consideradas falsas (false).

        alertContainerEl.classList.remove("active") 
        // Remove temporariamente a classe "active".
        // Isso faz a animação reiniciar sempre que uma nova senha for copiada. 

        setTimeout(() => {
            // setTimeout() agenda a execução de uma função após um determinado intervalo de tempo. 

            alertContainerEl.classList.add("active") 
            // Após 2 segundos, a classe "active" é adicionada novamente ao elemento. 

        }, 2000)
        // O tempo é informado em milissegundos.
        // 2000 ms == 2 segundos. 

    }
})

function createPassword() {
    // Declara a função responsável por gerar uma senha aleatória. 
    // Ela somente será executada quando for chamada. 

    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // Esta string funciona como um "banco de caracteres".
    // Cada posição da string possui um caractere diferente. 
    // A senha será construída escolhendo caracteres aleatoriamente dessa sequência. 

    const passwordLength = 14
    // Define que a senha deverá possuir obrigatoriamente 14 caracteres. 

    let password = ""
    // Inicializa uma variável vazia. 
    // A cada repetição do laço um novo caractere será acrescentado até formar a senha completa. 

    for (let index = 0; index < passwordLength; index++) {
        // O laço será executado 14 vezes. 
        /*
            Inicialização:
            index = 0 

            Condição:
            enquanto index for menor que passwordLength

            Incremento:
            index++ aumenta o índice em uma unidade a cada repetição. 
        */
       
        const randomNum = Math.floor(Math.random() * chars.length)
        // Math.random() gera um número decimal entre 0 e 1 (sem incluir o 1).
        // Multiplicando por chars.length, o intervalo passa a ser entre 0 e a quantidade total de caracteres disponíveis. 
        // Math.floor() remove a parte decimal, produzindo um índice inteiro válido para acessar a string. 

        password += chars.substring(randomNum, randomNum + 1)
        // substring() retorna apenas um caractere da string.
        // Exemplo: substring (5, 6)
        // retorna somente o caractere localizado na posição 5. 
        // O operador += concatena esse caractere ao final da senha. 

    }
    inputEl.value = password
    // Após o término do laço, a senha completa é exibida dentro do campo input. 

    alertContainerEl.innerText = password + "copied!"
    // Atualiza o texto da mensagem informando qual senha foi copiada. 

}

function copyPassword() {
    // Função responsável por copiar a senha. 

    inputEl.select() 
    // Seleciona todo o conteúdo do campo input.

    inputEl.setSelectionRange(0, 9999)
    // Define explicitamente o intervalo da seleção. 
    // É utilizado para melhorar a compatibilidade com alguns navegadores e dispositivos móveis. 

    navigator.clipboard.writeText(inputEl.value)
    // Utiliza a Clipboard API do navegador. 
    // O conteúdo do input é enviado para a área de transferência do sistema operacional, permitindo que o usuário utilize Ctrl + V em qualquer outro lugar. 
    
}