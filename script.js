document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");
    const totalProducts = products.length;
    let productCounter = 0;
    const slider = document.getElementById("slider");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const prevButtonPhone = document.getElementById("prevPhone");
    const nextButtonPhone = document.getElementById("nextPhone");
    const menuButton = document.getElementById("menu");

    function updateSlider() {
        const offset = productCounter * (products[0].offsetWidth + 50); 
        slider.style.transform = `translateX(-${offset}px)`; 
        updateButtons();
    }

    function updateButtons() {
        if (productCounter === 0) {
            prevButton.classList.remove("activeButton");
        } else {
            prevButton.classList.add("activeButton");
        }

        if (productCounter >= totalProducts - 2) {
            nextButton.classList.remove("activeButton");
        } else {
            nextButton.classList.add("activeButton");
        }
    }

    nextButton.addEventListener("click", function () {
        if (productCounter < totalProducts - 2) {
            productCounter += 2;
            updateSlider();
        }
    });

    prevButton.addEventListener("click", function () {
        if (productCounter > 0) {
            productCounter -= 2;
            updateSlider();
        }
    });

    nextButtonPhone.addEventListener("click", function () {
        if (productCounter < totalProducts - 1) {
            productCounter++;
            updateSlider();
        }
    });

    prevButtonPhone.addEventListener("click", function () {
        if (productCounter > 0) {
            productCounter--;
            updateSlider();
        }
    });

    menuButton.addEventListener("click", function () {
        let showOptions = document.querySelector(".optionsNav");
        if(showOptions.style.display === "none"){
            showOptions.style.display = "block";
        } else {
            showOptions.style.display = "none";
        }
        
    });

    updateButtons(); 
});
