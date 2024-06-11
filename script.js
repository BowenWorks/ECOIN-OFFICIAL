let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// script.js

window.addEventListener('scroll', function() {
    const element = document.querySelector('.overlay-content');
    const position = element.getBoundingClientRect();

    // Checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
});


let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    const textContainerElements = document.querySelectorAll('.text-container');

    textContainerElements.forEach(function(element) {
        const position = element.getBoundingClientRect();
        const direction = st > lastScrollTop ? 'down' : 'up';

        // Check if the element is in the viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            if (direction === 'down') {
                element.classList.add('active');
            } else {
                // Only remove 'active' class if the element is fully out of the viewport
                if (position.bottom <= 0) {
                    element.classList.remove('active');
                }
            }
        }
    });

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


// Get the play button element
const playButton = document.querySelector('.play-button');

// Get the video modal
const videoModal = document.getElementById('videoModal');

// Get the video element
const video = document.querySelector('#videoModal video');

// Get the close button inside the modal
const closeButton = document.querySelector('.close');

// When the play button is clicked, show the modal and play the video
playButton.addEventListener('click', function() {
  videoModal.style.display = 'block';
  video.play(); // Play the video
});

// When the user clicks on the close button, hide the modal and pause the video
closeButton.addEventListener('click', function() {
  videoModal.style.display = 'none';
  video.pause(); // Pause the video
});

// When the user clicks anywhere outside of the modal, hide it and pause the video
window.addEventListener('click', function(event) {
  if (event.target == videoModal) {
    videoModal.style.display = 'none';
    video.pause(); // Pause the video
  }
});


window.addEventListener('scroll', function() {
    var video = document.getElementById('autoplay-video');
    var position = video.getBoundingClientRect();
    var viewportHeight = window.innerHeight;

    // Calculate the threshold for triggering autoplay (20% of viewport height)
    var threshold = viewportHeight * 0.8
    ;

    // Checking if the video is partially visible within the threshold
    if (position.top >= -threshold && position.bottom <= viewportHeight + threshold) {
        video.play();
    } else {
        video.pause();
    }
});


