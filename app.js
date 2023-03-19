const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function() {
    counter ++;
    carousel();
    
});
prevBtn.addEventListener('click', function () {
    counter --;
    carousel();
    
});

function carousel() {
    
    // working with slides

    if (counter === slides.length) {
        counter = 0;
    }

    if (counter < 0) {
        counter = slides.length - 1;
    }
    

    // working with buttons
    /*
    if (counter < slides.length - 1){
        nextBtn.style.display = 'block';
        // disable the nextBtn when the last slide is showing
        // nextBtn.style.ariaDisabled = "true";
    } else {
        nextBtn.style.display = "none";
        // enable the nextBtn when the slide is not on the last slide
        // nextBtn.style.ariaDisabled = "false";
    }

    if (counter > 0) {
        // set the prev button to block display
        prevBtn.style.display = "block";

        // enable the prev button if the second slide is showing
        // prevBtn.style.ariaDisabled = 'false';
    } else {
        // hide the prev button if the first slide is showing
       prevBtn.style.display = "none";

       // disable button if the first slide is showing
       // prevBtn.style.ariaDisabled = 'true';
    }
    */
   
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// set the prevbtn to none when the page loads
// prevBtn.style.display = 'none';

// set the prevbtn to disabled when the page loads.
// prevBtn.style.ariaDisabled = true;
