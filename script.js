document.getElementById('imageInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.getElementById('gallery');
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imgElement = document.createElement('div');
            imgElement.classList.add('image-item');
            imgElement.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
            gallery.appendChild(imgElement);
        };
        
        reader.readAsDataURL(file);
    }
});
