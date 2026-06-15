// Dados dos 10 melhores jogadores atuais
const players = [
    { rank: 1, name: "Vinícius Júnior", team: "Real Madrid", position: "Atacante", country: "Brasil" },
    { rank: 2, name: "Kylian Mbappé", team: "Real Madrid", position: "Atacante", country: "França" },
    { rank: 3, name: "Erling Haaland", team: "Manchester City", position: "Atacante", country: "Noruega" },
    { rank: 4, name: "Jude Bellingham", team: "Real Madrid", position: "Meio-campista", country: "Inglaterra" },
    { rank: 5, name: "Rodri", team: "Manchester City", position: "Meio-campista", country: "Espanha" },
    { rank: 6, name: "Lamine Yamal", team: "Barcelona", position: "Atacante", country: "Espanha" },
    { rank: 7, name: "Harry Kane", team: "Bayern de Munique", position: "Atacante", country: "Inglaterra" },
    { rank: 8, name: "Kevin De Bruyne", team: "Manchester City", position: "Meio-campista", country: "Bélgica" },
    { rank: 9, name: "Mohamed Salah", team: "Liverpool", position: "Atacante", country: "Egito" },
    { rank: 10, name: "Jamal Musiala", team: "Bayern de Munique", position: "Meio-campista", country: "Alemanha" }
];

const playersGrid = document.getElementById('playersGrid');
const searchBar = document.getElementById('searchBar');

// Função para exibir os jogadores na tela
function displayPlayers(playerList) {
    // Limpa o grid antes de renderizar
    playersGrid.innerHTML = "";

    if (playerList.length === 0) {
        playersGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #9ca3af;">Nenhum jogador encontrado.</p>`;
        return;
    }

    // Cria o HTML para cada jogador
    playerList.forEach(player => {
        const card = document.createElement('div');
        card.classList.add('player-card');

        card.innerHTML = `
            <div class="player-info">
                <span class="player-rank">#${player.rank}</span>
                <h3>${player.name}</h3>
                <p><strong>Clube:</strong> ${player.team}</p>
                <p><strong>Posição:</strong> ${player.position}</p>
                <p><strong>País:</strong> ${player.country}</p>
            </div>
        `;
        playersGrid.appendChild(card);
    });
}

// Evento de digitação na barra de busca
searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();

    // Filtra baseado em nome, time ou posição
    const filteredPlayers = players.filter(player => {
        return (
            player.name.toLowerCase().includes(searchString) ||
            player.team.toLowerCase().includes(searchString) ||
            player.position.toLowerCase().includes(searchString) ||
            player.country.toLowerCase().includes(searchString)
        );
    });

    displayPlayers(filteredPlayers);
});

// Inicializa a página mostrando todos os jogadores
displayPlayers(players);
