 var submitted = false;

    document.getElementById('checkoutForm').onsubmit = function() {
        submitted = true;
        // Your entry ids paste here
        const submitData = {
            name: document.querySelector('input[name="entry.YOUR_ENTRY_ID"]').value,
            subject: document.querySelector('input[name="entry.YOUR_ENTRY_ID"]').value,
            email: document.querySelector('input[name="entry.YOUR_ENTRY_ID"]').value,
            info: document.querySelector('textarea[name="entry.YOUR_ENTRY_ID"]').value,
        };

        localStorage.setItem('luminaSubmit', JSON.stringify(submitData));
    };