function buttonClick1() {
alert('Hello from Button 1');
}
function paraClick() {
var text = document.getElementById('paraId');
text.innerHTML = 'This is the updated text of the paragraph!';
}
// image list
var images = [
"image/flower.jpg",
"image/image4.jpg",
"image/katgolap.jpeg"
];
var currentIndex = 0;
function ImageClick() {
currentIndex = 0;
showImage(currentIndex);
}
function nextImage() {
currentIndex = (currentIndex + 1) % images.length;
showImage(currentIndex);
}
function prevImage() {
currentIndex = (currentIndex - 1 + images.length) %
images.length;
showImage(currentIndex);
}
function removeImage() {
var img = document.getElementById('imageId');
img.src = "";
img.alt = "Image removed";
document.getElementById('counter').innerText = "Image removed!";
}
function showImage(index) {
var img = document.getElementById('imageId');
img.src = images[index];
img.alt = "Image " + (index + 1);
document.getElementById('counter').innerText =
"Showing image " + (index + 1) + " of " + images.length;
}