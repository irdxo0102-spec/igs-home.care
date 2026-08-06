// ================================
// IGS Home Care Script
// ================================

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ================================
// Active Menu
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


// ================================
// Card Animation
// ================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.7s";

    observer.observe(card);

});


// ================================
// Team Animation
// ================================

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = ".8s";

    observer.observe(card);

});


// ================================
// Gallery Animation
// ================================

const gallery = document.querySelectorAll(".gallery-item");

gallery.forEach(img => {

    img.style.opacity = "0";

    img.style.transform = "scale(.9)";

    img.style.transition = ".8s";

    observer.observe(img);

});


// ================================
// Footer Year
// ================================

console.log("IGS Home Care Loaded Successfully");
