function handleCardClick(card) {
    // Nếu click vào thẻ đang active thì lật mặt sau
    if (activeCard === card) {
        card.classList.toggle('is-flipped');
        return;
    }

    // Nếu có thẻ khác đang mở thì đóng nó lại
    if (activeCard) {
        closeCard();
    }
    
    const rect = card.getBoundingClientRect();
    
    placeholder = document.createElement('div');
    placeholder.className = 'card-placeholder';
    placeholder.style.flex = window.getComputedStyle(card).flex;
    
    card.parentNode.insertBefore(placeholder, card);

    card.style.position = 'fixed';
    card.style.top = rect.top + 'px';
    card.style.left = rect.left + 'px';
    card.style.width = rect.width + 'px';
    card.style.height = rect.height + 'px';
    card.style.margin = '0';
    card.style.zIndex = '9999';
    card.style.transform = 'none';

    activeCard = card;
    overlay.classList.add('active');

    void card.offsetWidth; 

    card.classList.add('is-focused');
    
    // LOGIC PHÓNG TO CHO MÁY TÍNH (Đã xóa logic mobile)
    card.style.top = '50%';
    card.style.left = '50%';
    card.style.transform = 'translate(-50%, -50%) scale(1.05)';
    
    // Tự động bật nhạc khi mở thẻ
    startDisk(card);
}
