document.querySelectorAll('.area-image img').forEach(image => {
    image.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      lightbox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
      lightbox.addEventListener('click', () => {
        lightbox.remove();
      });
      document.body.appendChild(lightbox);
    });
  });
  