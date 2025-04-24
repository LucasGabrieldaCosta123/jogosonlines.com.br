// Este arquivo contém o código JavaScript que adiciona interatividade ao site. 
// Você pode incluir funções para manipular eventos, animações e outras funcionalidades dinâmicas.

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de função para exibir uma mensagem ao clicar em um botão
    const button = document.getElementById('play-button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Divirta-se jogando!');
        });
    }

    // Função para carregar jogos dinamicamente (exemplo)
    function loadGames() {
        const gamesContainer = document.getElementById('games-container');
        const games = [
            { name: 'Jogo 1', description: 'Descrição do Jogo 1' },
            { name: 'Jogo 2', description: 'Descrição do Jogo 2' },
            { name: 'Jogo 3', description: 'Descrição do Jogo 3' }
        ];

        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.classList.add('game');
            gameElement.innerHTML = `<h3>${game.name}</h3><p>${game.description}</p>`;
            gamesContainer.appendChild(gameElement);
        });
    }

    loadGames();
});