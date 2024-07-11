/*
Dark Mode for AcademicInterest Home Page
*/

let date = new Date().getDay();

//Day of the Week
if(date == 0){

    document.body.style.background = '#fae3f5';

} else if(date == 1){

    document.body.style.background = '#ebf7eb';

} else if(date == 2){

    document.body.style.background = '#e3faf8';

} else if(date == 3){

    document.body.style.background = '#e3f0fa';

} else if (date == 4){

    document.body.style.background = '#ece3fa';
}
else{

    document.body.style.background = '#f3e3fa';

}


let hour = new Date().getHours(); // get current hour

if (hour >= 18 || hour < 6) { // between 6:00 PM and 6:00 AM
  const background = document.querySelector('body'); // access <body> element
  background.style.backgroundColor = '#364d4b';
  background.style.color = 'white';

  const header = document.querySelector('h1 > a'); // access <a> element of main heading
  const article = document.querySelector('main');

  header.className = 'dark'; // apply class of "dark" (see style sheet)
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

document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        "Sunday Funday – Relax and enjoy!",
        "Motivation Monday – Let's get productive!",
        "Transformation Tuesday – Make positive changes!",
        "Wellness Wednesday – Focus on health!",
        "Thoughtful Thursday – Reflect and grow!",
        "Fun Friday – Time to celebrate the weekend!",
        "Social Saturday – Connect with loved ones!"
    ];

    // Get the current day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    const today = new Date().getDay();

    // Select the element where the message will be displayed
    const messageElement = document.getElementById('dailyMessage');

    // Update the element's text with today's message
    if (messageElement) {
        messageElement.innerHTML = messages[today];
    }
});