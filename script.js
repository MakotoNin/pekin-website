document.addEventListener('DOMContentLoaded', () => {
    // ページ内リンクのスムーズスクロール
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // チャットボットのトグル機能
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');

    chatbotToggle.addEventListener('click', () => {
        // 表示・非表示の切り替え
        if (chatbotContainer.style.display === 'none' || !chatbotContainer.style.display) {
            chatbotContainer.style.display = 'block'; // 表示
        } else {
            chatbotContainer.style.display = 'none'; // 非表示
        }
    });
});
