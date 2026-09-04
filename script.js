/* =====================================================
   HOME SLIDER
===================================================== */

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");


function showSlide(index) {

    if (index >= slides.length) {

        slideIndex = 0;

    }


    if (index < 0) {

        slideIndex = slides.length - 1;

    }


    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function(dot) {

        dot.classList.remove("active-dot");

    });


    slides[slideIndex].classList.add("active");

    dots[slideIndex].classList.add("active-dot");

}


/* NEXT / PREVIOUS */

function changeSlide(direction) {

    slideIndex = slideIndex + direction;

    showSlide(slideIndex);

}


/* DOT CLICK */

function currentSlide(index) {

    slideIndex = index;

    showSlide(slideIndex);

}


/* AUTO SLIDER */

setInterval(function() {

    slideIndex++;

    showSlide(slideIndex);

}, 5000);



/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const navMenu =
        document.getElementById("navMenu");

    navMenu.classList.toggle("show");

}


/* Mobile menu link click */

const menuLinks =
    document.querySelectorAll("#navMenu a");


menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("show");

    });

});



/* =====================================================
   GALLERY LIGHTBOX
===================================================== */

function openGallery(imageSrc) {

    const lightbox =
        document.getElementById("lightbox");

    const image =
        document.getElementById("lightboxImage");


    image.src = imageSrc;

    lightbox.style.display = "flex";

}


function closeGallery() {

    document
        .getElementById("lightbox")
        .style.display = "none";

}


/* Click outside image */

document
    .getElementById("lightbox")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeGallery();

        }

    });



/* =====================================================
   CONTACT FORM
===================================================== */

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );

}