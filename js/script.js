document.querySelectorAll('.card').forEach(card => {
    // Only track mouse movement when over the card
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Increased multiplier from 10 to 25 for more intense effect
        const rotateY = ((x - centerX) / centerX) * 25;
        const rotateX = -((y - centerY) / centerY) * 25;
        
        card.style.setProperty('--rotateX', `${rotateX}deg`);
        card.style.setProperty('--rotateY', `${rotateY}deg`);
    });

    // Reset on mouse leave
    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
    });
});

