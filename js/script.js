// JavaScript для переключення мобільної навігації
function toggleMenu() {
  let navbarMenu = document.querySelector('.navbar-menu');
  let navbarToggle = document.querySelector('.navbar-toggle');
  let activeLink = document.querySelector('.navbar-menu>li>a');

  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
  activeLink.classList.toggle('active-link');

  // Add a delay before updating the max-height to let the CSS transition work
  setTimeout(() => {
    if (navbarMenu.classList.contains('active')) {
      navbarMenu.style.maxHeight = '100vh';
      navbarMenu.style.opacity = '1';
    } else {
      navbarMenu.style.maxHeight = '0';
      navbarMenu.style.opacity = '0';
    }
  }, 50); // Adjust the delay value as needed, a small value like 50ms should work fine
}
