const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_gsljep2';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

// Typing Animation

var typed = new Typed("#typing", {

    strings: [
        "Software Developer",
        "Frontend Developer",
        "Backend Developer"
    ],

    typeSpeed: 70,
    backSpeed: 50,
    loop: true

});