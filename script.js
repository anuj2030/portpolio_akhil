// script.js

// Create a button element
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "Scroll to Top";
scrollToTopBtn.className = "scroll-to-top";
document.body.appendChild(scrollToTopBtn);

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

