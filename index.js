//fetch the image from Unsplash

fetch("https://unsplash.com/photos/NRQV-hBF10M")
    .then(response => response.json())
    .then(data => console.log(data));