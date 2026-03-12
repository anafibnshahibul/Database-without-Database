// --- CONFIGURATION ---
const GAS_URL = "https://script.google.com/macros/s/YOUR_GAS_ID/exec";

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const btn = document.getElementById('submit-btn');
            const msgBox = document.getElementById('msg-box');
            
            btn.innerText = "Sending...";
            btn.disabled = true;

            const payload = {
                action: "contact",
                name: document.getElementById('name').value,
                subject: document.getElementById('subject').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            try {
                const response = await fetch(GAS_URL, {
                    method: "POST",
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();
                
                msgBox.style.display = "block";
                if (result.status === "success") {
                    msgBox.style.backgroundColor = "#D1FAE5";
                    msgBox.style.color = "#065F46";
                    msgBox.innerText = result.message;
                    contactForm.reset();
                } else {
                    throw new Error(result.message);
                }
            } catch (error) {
                msgBox.style.display = "block";
                msgBox.style.backgroundColor = "#FEE2E2";
                msgBox.style.color = "#991B1B";
                msgBox.innerText = "Error: " + error.message;
            }

            btn.innerText = "Submit";
            btn.disabled = false;
        });
    }
});