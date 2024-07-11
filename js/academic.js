/*
Dark Mode for AcademicInterests Pages
*/

let hour = new Date().getHours(); // get current hour

if (hour >= 18 || hour < 6) { // between 6:00 PM and 6:00 AM
  const background = document.querySelector('body'); // access <body> element
  background.style.backgroundColor = '#364d4b'; // change background color to white with style object
  background.style.color = 'white'; // change default font color of all child elements to white

  const header = document.querySelector('h1 > a'); // access <a> element of main heading
  const article = document.querySelector('main');

  header.className = 'dark'; 
  article.className = 'dark';

  document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (!link.classList.contains('selected')) {
          link.classList.add('dark');
        }
      });

  });


  const footer = document.querySelector('footer > p > a') // access <a> element of footer paragraph
  footer.className = 'dark'; // apply class of "dark"
}