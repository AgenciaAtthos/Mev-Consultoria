document.addEventListener('DOMContentLoaded', function () {

    // 1. ATUALIZAR O ANO NO RODAPÉ
    const currentYearSpan = document.querySelector('#current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. MENU MOBILE (HAMBÚRGUER)
    const menuToggle = document.querySelector('#menu-toggle');
    const menu = document.querySelector('#menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
            
            // Troca ícone se estiver usando Iconify
            const icon = menuToggle.querySelector('.iconify');
            if(icon) {
                if (menu.classList.contains('active')) {
                    icon.setAttribute('data-icon', 'mdi:close');
                } else {
                    icon.setAttribute('data-icon', 'mdi:menu');
                }
            }
        });
    }

    // 3. IDENTIFICAR PÁGINA ATIVA NO MENU
    // Pega o nome do arquivo atual (ex: index.html)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('#menu a');

    menuLinks.forEach(link => {
        // Se o href do link for igual a pagina atual, adiciona a classe active
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 4. FAQ (ACORDEÃO) - Se existir na página
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');
    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            pergunta.classList.toggle('active');
            const resposta = pergunta.nextElementSibling;
            const icone = pergunta.querySelector('.iconify');
            
            if (resposta.style.maxHeight) {
                resposta.style.maxHeight = null; // Fecha
                if(icone) icone.setAttribute('data-icon', 'mdi:chevron-down');
            } else {
                resposta.style.maxHeight = resposta.scrollHeight + "px"; // Abre
                if(icone) icone.setAttribute('data-icon', 'mdi:chevron-up');
            }
        });
    });
});