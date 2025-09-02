const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.avif"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("counter");

function updateImage() {
  mainImage.style.opacity = 0;
  setTimeout(() => {
    mainImage.src = images[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
    mainImage.style.opacity = 1;
  }, 200);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});
