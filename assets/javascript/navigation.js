document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.burger-menu');
    const menu = document.querySelector('.main-navigation__menu-container');
  
      menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });
  
  document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
  });




  