    const GAS_URL = "https://script.google.com/macros/s/YOUR_GAS_ID/exec";
    
    let isLoginMode = true;

    function toggleForm() {
        isLoginMode = !isLoginMode;
        document.getElementById('form-title').innerText = isLoginMode ? "Login" : "Create Account";
        document.getElementById('submit-btn').innerText = isLoginMode ? "Login" : "Register";
        document.getElementById('toggle-link').innerText = isLoginMode ? "Need an account? Register here." : "Already have an account? Login here.";
        document.getElementById('name-group').classList.toggle('hidden');
        document.getElementById('msg-box').style.display = 'none';
        document.getElementById('auth-form').reset();
    }

    document.getElementById('auth-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const btn = document.getElementById('submit-btn');
        const msgBox = document.getElementById('msg-box');
        
        btn.innerText = "Processing...";
        btn.disabled = true;

        const payload = {
            action: isLoginMode ? "login" : "register",
            name: document.getElementById('user_name').value,
            email: document.getElementById('user_email').value,
            password: document.getElementById('user_password').value
        };

        try {
            const response = await fetch(GAS_URL, {
                method: "POST",
                mode: "no-cors",
                cache: "no-cache",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            msgBox.style.display = "block";
            msgBox.innerText = isLoginMode ? "Checking Credentials..." : "Registration request sent!";
            msgBox.className = "message-box success";

            setTimeout(() => {
                btn.innerText = isLoginMode ? "Login" : "Register";
                btn.disabled = false;
                if(isLoginMode) {
                    alert("If your email/password is correct, you will be logged in. Check your Sheet for confirmation!");
                }
            }, 3000);

        } catch (error) {
            msgBox.style.display = "block";
            msgBox.innerText = "Error connecting to server!";
            msgBox.className = "message-box error";
            btn.innerText = isLoginMode ? "Login" : "Register";
            btn.disabled = false;
        }
    });