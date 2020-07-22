// Nav-button toggle
let checkScroll = true;

$('.nav-button').click(function () {
    $('.header').toggleClass("active");
    if (checkScroll) {
        document.body.style.overflow = "hidden";
        checkScroll = false;
    }
    else {
        document.body.style.overflow = "visible";
        checkScroll = true;
    }
})

// Nav-menu sections
var allSections = document.querySelectorAll("header .menu li");
for (var section of allSections){
    section.addEventListener("click", function () {
        for (var sec of allSections) {
            sec.classList.remove("active");
        } 
        this.classList.add("active");
    })

}


// Portfolio Images
var allCategories = document.querySelectorAll(".portfolio .categories li");
var allImages = document.querySelectorAll(".portfolio .row .type");
for (var category of allCategories) {
    category.addEventListener("click", function () {

        // removing active from categoies
        for (var cat of allCategories) {
            cat.classList.remove("active");
        }
        // adding active to clicked cat.
        this.classList.add("active");


        var clickedDataId = this.getAttribute("data-id");
        if (clickedDataId == 0) {
            for (var img of allImages) {
                img.classList.add("active");
            }
        }
        else {
            for (var img of allImages) {
                img.classList.remove("active");
            }
            for (var img of allImages) {
                if (img.getAttribute("data-id") == clickedDataId) {
                    img.classList.add("active");
                }
            }
        }

    })
}

// Owl-Carousel 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        800: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})