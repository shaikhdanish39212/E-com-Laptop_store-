document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
  
    // Toggle nav visibility when clicking on the menu icon
    menuToggle.addEventListener("click", function (event) {
      navLinks.classList.toggle("show");
      event.stopPropagation(); // Prevent this click from closing the nav
    });
  
    // Hide nav when clicking outside of it
    document.addEventListener("click", function (event) {
      const isClickInsideNav = navLinks.contains(event.target);
      const isClickOnMenuIcon = menuToggle.contains(event.target);
  
      if (!isClickInsideNav && !isClickOnMenuIcon) {
        navLinks.classList.remove("show");
      }
    });
  });
  //carousel functionality
  document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
 
    function showSlide(index) {
        const slides = document.querySelectorAll('.slides');
        const totalSlides = slides.length;
 
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
 
        const newTransformValue = -currentSlide * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
    }
 
    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }
 
    // Previous and next buttons functionality
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
 
    // Optional: Automatically change slides every 2 seconds
    setInterval(() => changeSlide(1), 2000);
 });
 
 /*add to cart functionality*/
 // Get all 'Add to Cart' buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Event listener for each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get product details from the button's data attributes
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');

        // Create an object for the product
        const product = {
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1 // Default quantity is 1 when added
        };

        // Get cart from localStorage or create an empty array if no cart exists
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.name === product.name);

        if (existingProduct) {
            // If the product already exists in the cart, just increase the quantity
            existingProduct.quantity += 1;
        } else {
            // If the product doesn't exist, add it to the cart
            cart.push(product);
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Optionally, display a message or update the cart UI
        alert(`${productName} added to cart!`);
    });
});
