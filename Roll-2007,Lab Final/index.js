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
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex];
});
