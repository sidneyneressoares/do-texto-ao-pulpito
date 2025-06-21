// JavaScript para o site "Do Texto ao Púlpito"

document.addEventListener('DOMContentLoaded', function() {
    // Variáveis
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const backToTop = document.querySelector('.back-to-top');
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Menu móvel
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Header fixo com efeito de scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Botão de voltar ao topo
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Botão de voltar ao topo
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Fechar menu móvel se estiver aberto
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
                
                // Calcular posição considerando o header fixo
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ Acordeão
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class para a pergunta
            this.classList.toggle('active');
            
            // Toggle active class para a resposta
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
            
            // Animação de altura para a resposta
            if (answer.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
    
    // Inicializar o primeiro item do FAQ como aberto
    if (faqQuestions.length > 0) {
        faqQuestions[0].click();
    }
    
    // Formulário de Newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Simulação de envio bem-sucedido
                showNotification('Obrigado por se inscrever! Em breve você receberá nossos conteúdos exclusivos.', 'success');
                emailInput.value = '';
            } else {
                showNotification('Por favor, insira um e-mail válido.', 'error');
            }
        });
    }
    
    // Validação de e-mail
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Sistema de notificação
    function showNotification(message, type) {
        // Criar elemento de notificação
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Adicionar ao DOM
        document.body.appendChild(notification);
        
        // Mostrar com animação
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remover após 3 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Contador de caracteres para formulários
    const textareas = document.querySelectorAll('textarea[data-max-length]');
    textareas.forEach(textarea => {
        const maxLength = parseInt(textarea.getAttribute('data-max-length'));
        const counterElement = document.createElement('div');
        counterElement.className = 'char-counter';
        counterElement.textContent = `0/${maxLength}`;
        
        textarea.parentNode.insertBefore(counterElement, textarea.nextSibling);
        
        textarea.addEventListener('input', function() {
            const currentLength = this.value.length;
            counterElement.textContent = `${currentLength}/${maxLength}`;
            
            if (currentLength > maxLength) {
                counterElement.classList.add('exceeded');
            } else {
                counterElement.classList.remove('exceeded');
            }
        });
    });
    
    // Lazy loading para imagens
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback para navegadores que não suportam IntersectionObserver
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
    
    // Pop-up de captura de e-mail após 30 segundos
    setTimeout(() => {
        const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
        
        if (!hasSeenPopup) {
            showEmailPopup();
            sessionStorage.setItem('hasSeenPopup', 'true');
        }
    }, 30000);
    
    function showEmailPopup() {
        // Criar elementos do pop-up
        const popupOverlay = document.createElement('div');
        popupOverlay.className = 'popup-overlay';
        
        const popupContent = document.createElement('div');
        popupContent.className = 'popup-content';
        
        // Conteúdo do pop-up
        popupContent.innerHTML = `
            <div class="popup-close">&times;</div>
            <h3>Receba um Capítulo Gratuito!</h3>
            <p>Inscreva-se em nossa newsletter e receba gratuitamente um capítulo do livro "Do Texto ao Púlpito".</p>
            <form class="popup-form">
                <input type="text" placeholder="Seu nome" required>
                <input type="email" placeholder="Seu melhor e-mail" required>
                <button type="submit" class="btn-primary">Quero Receber</button>
            </form>
        `;
        
        // Adicionar ao DOM
        popupOverlay.appendChild(popupContent);
        document.body.appendChild(popupOverlay);
        
        // Mostrar com animação
        setTimeout(() => {
            popupOverlay.classList.add('show');
        }, 10);
        
        // Fechar pop-up
        const closeButton = popupContent.querySelector('.popup-close');
        closeButton.addEventListener('click', () => {
            popupOverlay.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(popupOverlay);
            }, 300);
        });
        
        // Envio do formulário
        const popupForm = popupContent.querySelector('.popup-form');
        popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = popupForm.querySelector('input[type="email"]');
            const nameInput = popupForm.querySelector('input[type="text"]');
            
            if (validateEmail(emailInput.value.trim()) && nameInput.value.trim() !== '') {
                // Simulação de envio bem-sucedido
                popupOverlay.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(popupOverlay);
                    showNotification('Obrigado! O capítulo gratuito foi enviado para seu e-mail.', 'success');
                }, 300);
            } else {
                showNotification('Por favor, preencha todos os campos corretamente.', 'error');
            }
        });
    }
    
    // Adicionar estilos CSS para notificações e pop-up
    const customStyles = document.createElement('style');
    customStyles.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 4px;
            color: white;
            font-weight: bold;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s, transform 0.3s;
            z-index: 9999;
        }
        
        .notification.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .notification.success {
            background-color: #4CAF50;
        }
        
        .notification.error {
            background-color: #F44336;
        }
        
        .char-counter {
            text-align: right;
            font-size: 0.8rem;
            color: #666;
            margin-top: 5px;
        }
        
        .char-counter.exceeded {
            color: #F44336;
        }
        
        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s;
        }
        
        .popup-overlay.show {
            opacity: 1;
            visibility: visible;
        }
        
        .popup-content {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            max-width: 500px;
            width: 90%;
            position: relative;
            transform: scale(0.9);
            transition: transform 0.3s;
        }
        
        .popup-overlay.show .popup-content {
            transform: scale(1);
        }
        
        .popup-close {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 24px;
            cursor: pointer;
            color: #666;
        }
        
        .popup-form {
            margin-top: 20px;
        }
        
        .popup-form input {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        .popup-form button {
            width: 100%;
        }
        
        .header.scrolled {
            padding: 5px 0;
            background-color: rgba(249, 245, 240, 0.95);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
    `;
    
    document.head.appendChild(customStyles);
});
