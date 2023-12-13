document.addEventListener("DOMContentLoaded", function () {
    // Check if the element with ID 'closepop' exists
    const closePopButton = document.getElementById("closepop");

    // If the element exists, add the event listener
    if (closePopButton) {
        closePopButton.addEventListener("click", function () {
            document.querySelector(".popup").style.display = "none";
        });
    } else {
        console.warn("Element with ID 'closepop' not found.");
    }

    // Check if the element with ID 'cta' exists
    const ctaButton = document.getElementById("cta");

    // If the element exists, add the event listener
    if (ctaButton) {
        ctaButton.addEventListener("click", function () {
            document.querySelector(".popup").style.display = "flex";
        });
    } else {
        console.warn("Element with ID 'cta' not found.");
    }

    // Check if the element with ID 'ctajoin' exists
    const ctaJoinButton = document.getElementById("ctajoin");

    // If the element exists, add the event listener
    if (ctaJoinButton) {
        ctaJoinButton.addEventListener("click", function () {
            document.querySelector(".popup").style.display = "flex";
        });
    } else {
        console.warn("Element with ID 'ctajoin' not found.");
    }

    // Check if the element with ID 'ctafooter' exists
    const ctaFooterButton = document.getElementById("ctafooter");
    // If the element exists, add the event listener
    if (ctaFooterButton) {
        ctaFooterButton.addEventListener("click", function () {
            document.querySelector(".popup").style.display = "flex";
        });
    } else {
        console.warn("Element with ID 'ctajoin' not found.");
    }
});