// Função para filtrar livros conforme a pesquisa
function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        const title = card.getAttribute('data-title').toLowerCase();

        if (title.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Animação de entrada dos cards (ao carregar a página)
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeInCard 0.5s ease-out forwards';
        }, index * 100); // Animações em cadeia
    });
});
