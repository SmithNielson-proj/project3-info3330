

// let mainImage = document.querySelectorAll(".main-image");



mainImage.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    })
})







