const imagesContainer = document.querySelector('.slider .images');
const images = imagesContainer.querySelectorAll('picture');
const duplicates = [];

images.forEach(image => {
    const duplicate = image.cloneNode(true);
    duplicates.push(duplicate);
});

duplicates.forEach(duplicate => {
    imagesContainer.appendChild(duplicate);
});
