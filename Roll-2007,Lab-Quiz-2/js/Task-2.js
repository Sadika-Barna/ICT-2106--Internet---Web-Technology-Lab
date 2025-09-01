const images = [
            "image/picture/image2.jpg",
            "image/picture/image3.jpg",
            "image/picture/image4.jpg",
            "image/picture/katgolap.jpeg"
        ];

        let currentImageIndex = 0;

        
        const newImage = document.createElement("img");
        newImage.src = images[currentImageIndex];

        
        newImage.addEventListener("click", () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            newImage.src = images[currentImageIndex];
        });

        
        const container = document.getElementById("image-container");
        container.innerHTML = "";  
        container.appendChild(newImage);  