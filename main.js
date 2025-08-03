function showPage(pageId) {
 // Select all page sections
 const pages = document.querySelectorAll('.page-section');


 // Hide all pages except the one with the matching id
 pages.forEach((page) => {
   if (page.id === pageId) {
     page.classList.remove('hidden');
   } else {
     page.classList.add('hidden');
   }
 });


 // Update the nav active class
 const navItems = document.querySelectorAll('.nav-item');
 navItems.forEach((item) => {
   // Compare nav text with pageId ignoring case
   if (item.textContent.trim().toLowerCase() === pageId) {
     item.classList.add('active');
   } else {
     item.classList.remove('active');
   }
 });
}


// On page load, show only home page
window.addEventListener('DOMContentLoaded', () => {
 showPage('home');
});




