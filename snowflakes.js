document.addEventListener('DOMContentLoaded', function() {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 5;
        const size = Math.random() * 1 + 0.5;
        const left = Math.random() * 100;
        const swayDuration = Math.random() * 5 + 3;

        snowflake.style.left = `${left}%`;
        snowflake.style.fontSize = `${size}em`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.animationDuration = `${duration}s, ${swayDuration}s`;
    });
});