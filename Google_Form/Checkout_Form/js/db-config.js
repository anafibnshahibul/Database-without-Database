var submitted = false;

    document.getElementById('checkoutForm').onsubmit = function() {
        submitted = true;
        
        const orderData = {
            plan: document.getElementById('planSelect').value,
            name: document.querySelector('input[name="entry.YOUR_ENTRY_ID"]').value,
            phone: document.querySelector('input[name="entry.YOUR_ENTRY_ID"]').value,
            email: document.querySelector('input[name="entry.YOUR_ENTRY_ID"]').value,
            city: document.querySelector('input[name="entry.YOUR_ENTRY_ID"]').value,
            address: document.querySelector('input[name="entry.YOUR_ENTRY_ID"]').value, // Postal Code field used as address part mostly, adapt if needed
            country: document.querySelector('input[name="entry.YOUR_ENTRY_ID"]').value,
            method: document.querySelector('select[name="entry.YOUR_ENTRY_ID"]').value,
            trx: document.querySelector('input[name="entry.YOUR_ENTRY_ID"]').value,
            info: document.querySelector('textarea[name="entry.YOUR_ENTRY_ID"]').value,
            price: document.getElementById('summary-total').innerText
        };

        localStorage.setItem('luminaOrder', JSON.stringify(orderData));
    };
