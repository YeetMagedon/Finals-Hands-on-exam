// Select the burger and menu elements
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

// Add event listener for toggle functionality
burger.addEventListener('click', () => {
    menu.classList.toggle('show');
    burger.classList.toggle('active');
});
