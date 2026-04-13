// Script para animações simples e interatividade

document.addEventListener('DOMContentLoaded', () => {
    // Efeito de rolagem suave para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Compensação do header fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação simples ao rolar a página (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.feature-card, .specs-content, .cta-box');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Mensagem de boas-vindas no console para o dono
    console.log("%c Olá! Este site foi criado para a sua Fazer 250 2024 Verde.", "color: #00c853; font-size: 20px; font-weight: bold;");
    console.log("Para editar os textos, abra o arquivo index.html em um editor de texto.");
});
