let images = document.querySelectorAll(".gallery img");

let lightbox = document.getElementById("lightbox");

let largeImage = document.getElementById("largeImage");

let close = document.getElementById("close");


images.forEach(function(image) {

    image.addEventListener("click", function() {

        lightbox.style.display = "flex";

        largeImage.src = image.src;

    });

});


close.addEventListener("click", function() {

    lightbox.style.display = "none";

});