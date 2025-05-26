document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Добавляем плавную анимацию при скролле
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Добавляем эффект параллакса для страниц
    document.addEventListener('mousemove', (e) => {
        const pages = document.querySelectorAll('.page.active');
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        pages.forEach(page => {
            page.style.transform = `
                perspective(1000px)
                rotateY(${mouseX * 5}deg)
                rotateX(${-mouseY * 5}deg)
                translateZ(10px)
            `;
        });
    });

    // Добавляем эффект пульсации для кнопок
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'pulse 0.5s ease-in-out';
        });
        button.addEventListener('animationend', () => {
            button.style.animation = '';
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Удаляем активный класс у всех ссылок и страниц
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => {
                p.classList.remove('active');
                p.style.opacity = '0';
                p.style.transform = 'scale(0.9)';
            });
            
            // Добавляем активный класс к выбранной ссылке
            link.classList.add('active');
            
            // Показываем соответствующую страницу с задержкой для анимации
            const pageId = link.getAttribute('href').substring(1);
            const targetPage = document.getElementById(pageId);
            
            setTimeout(() => {
                targetPage.classList.add('active');
                setTimeout(() => {
                    targetPage.style.opacity = '1';
                    targetPage.style.transform = 'scale(1)';
                }, 50);
            }, 300);
        });
    });
}); 