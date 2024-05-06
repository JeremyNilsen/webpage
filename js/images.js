
let images = [];

async function fetchImagePaths() {
    try {
        const response = await fetch('http://localhost/capstone/getPictures.php');
        if (!response.ok) {
            throw new Error('Failed to fetch image paths');
        }
        const data = await response.json(); // Parse JSON response
        images = data;
        initCarousel(); // Call initCarousel() after images are fetched
        createImageCollage();
    } catch (error) {
        console.error('Error:', error);
    }
}


function initCarousel() {
    // Initialize carousel with fetched images
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
        const imageIndex = index % images.length;
        item.querySelector('img').src = images[imageIndex];
    });

    // Start rotating carousel
    currentIndex = 0;
    intervalId = setInterval(rotateCarousel, 5000); // Change the interval as needed (milliseconds)
}

async function rotateCarousel() {
    currentIndex = (currentIndex + 1) % images.length;
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
        const imageIndex = (currentIndex + index) % images.length;
        item.querySelector('img').src = images[imageIndex];
    });
}

function pauseCarousel() {
    clearInterval(intervalId);
}

function resumeCarousel() {
    intervalId = setInterval(rotateCarousel, 5000); // Change the interval as needed (milliseconds)
}

document.addEventListener('DOMContentLoaded', fetchImagePaths);

function createImageCollage() {
    const collage = document.getElementById("imageCollage");

    images.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      img.addEventListener('click', function() {
        window.open(url); // Open image in a new tab
      });
      collage.appendChild(img);
    });
  }

  // Call the function when the page loads
  window.onload = createImageCollage;

