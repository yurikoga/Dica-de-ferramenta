const shareContainer = document.getElementById('shareContainer');
const mainButton = document.getElementById('mainButton');

// Adiciona um listener de clique no botão principal
mainButton.addEventListener('click', () => {
    // Alterna a classe 'active' no contêiner pai
    shareContainer.classList.toggle('active');

    // Altera o texto do botão conforme o estado
    if (shareContainer.classList.contains('active')) {
        mainButton.textContent = 'CANCEL';
    } else {
        mainButton.textContent = 'SHARE';
    }
});
