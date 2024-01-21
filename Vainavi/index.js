
// image slider code

let scroll_container = document.querySelector("#image_slider")
let back_button = document.getElementById("back")
let next_button = document.getElementById("next")

scroll_container.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scroll_container.scrollLeft += evt.deltaY
})

next_button.addEventListener("click", () => {
    const containerWidth = scroll_container.clientWidth;
    scroll_container.style.scrollBehavior = "smooth"
    scroll_container.scrollLeft += containerWidth
})

back_button.addEventListener("click", () => {
    const containerWidth = scroll_container.clientWidth;
    scroll_container.style.scrollBehavior = "smooth"
    scroll_container.scrollLeft -= containerWidth
})


//product slider

function scrollSection(sectionId, direction) {
    let scrollContainer = document.querySelector(`#${sectionId} .product_slider`);
    let scrollAmount = 400;

    if (direction === 'left') {
        scrollContainer.style.scrollBehavior = "smooth"
        scrollContainer.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        scrollContainer.style.scrollBehavior = "smooth"
        scrollContainer.scrollLeft += scrollAmount;
    }
}

//login or signup alert window

document.addEventListener("DOMContentLoaded", function () {

    let cardDivs = document.querySelectorAll(".cards");

    cardDivs.forEach(function (cardDiv) {
        cardDiv.addEventListener("click", function () {
            login();
        });
    });
    function login() {
        alert("You have to sign up or log in first.");
    }
});