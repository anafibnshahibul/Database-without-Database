// --- INSTALLATION STEPS ---
// 1. Replace 'YOUR_PUBLIC_KEY' with your Public Key from EmailJS Account.
// 2. Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with yours.

    (function() {
        // STEP 1: Initialize EmailJS with your Public Key
        emailjs.init("YOUR_PUBLIC_KEY"); 
    })();

    const btn = document.getElementById('button');

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        btn.innerText = 'Sending...';
        btn.disabled = true;

        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';

        // STEP 2: Send the form data
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerText = 'Send Email';
                btn.disabled = false;
                alert('Success! Your message has been sent.');
                this.reset(); // Clear the form
            }, (err) => {
                btn.innerText = 'Send Email';
                btn.disabled = false;
                alert('Error: ' + JSON.stringify(err));
            });
    });