/* =========================================
   IGS HOME CARE
   MAIN JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
       ========================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", function () {

            nav.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                if (nav.classList.contains("active")) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });

    }


    /* =========================================
       CLOSE MOBILE MENU AFTER CLICKING LINK
       ========================================= */

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("active");
            }

            if (menuBtn) {

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });

    });


    /* =========================================
       BACK TO TOP BUTTON
       ========================================= */

    const topBtn = document.getElementById("topBtn");

    function checkScroll() {

        if (!topBtn) return;

        if (window.scrollY > 300) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    }

    window.addEventListener("scroll", checkScroll);

    checkScroll();


    if (topBtn) {

        topBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       SCROLL ANIMATION
       ========================================= */

    const animatedElements = document.querySelectorAll(
        ".card, .team-card, .gallery-item, .stat, .review"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        animatedElements.forEach(function (element) {

            element.classList.add("scroll-hidden");

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(function (element) {

            element.classList.add("show");

        });

    }


    /* =========================================
       ACTIVE NAVIGATION
       ========================================= */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });


    /* =========================================
       HERO BUTTON SAFETY
       ========================================= */

    const callButtons = document.querySelectorAll(
        'a[href^="tel:"]'
    );

    callButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Calling IGS Home Care");

        });

    });


    /* =========================================
       WHATSAPP BUTTON
       ========================================= */

    const whatsappButton = document.querySelector(".whatsapp");

    if (whatsappButton) {

        whatsappButton.addEventListener("click", function () {

            console.log("Opening WhatsApp");

        });

    }


    /* =========================================
       GALLERY IMAGE EFFECT
       ========================================= */

    const galleryImages = document.querySelectorAll(
        ".gallery-item img"
    );

    galleryImages.forEach(function (image) {

        image.addEventListener("error", function () {

            image.style.display = "none";

        });

    });


    /* =========================================
       CURRENT YEAR
       ========================================= */

    const yearElements = document.querySelectorAll(
        ".current-year"
    );

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });


    /* =========================================
       WEBSITE LOADED
       ========================================= */

    console.log("IGS Home Care website loaded successfully.");

});
