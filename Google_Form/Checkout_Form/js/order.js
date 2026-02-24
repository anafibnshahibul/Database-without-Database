    const plans = {
        'Basic': { price: 29, img: 'https://placehold.co/600x400/4F46E5/FFF?text=Basic+Plan' },
        'Pro': { price: 99, img: 'https://placehold.co/600x400/10b981/FFF?text=Pro+Plan' },
        'Enterprise': { price: 299, img: 'https://placehold.co/600x400/f59e0b/FFF?text=Enterprise+Plan' }
    };
    function updateSummary() {
        const selectBox = document.getElementById('planSelect');
        const selectedValue = selectBox.value;
        const planData = plans[selectedValue];

        document.getElementById('summary-plan-name').innerText = selectedValue + " Plan";
        document.getElementById('summary-plan-price').innerText = "$" + planData.price + ".00";
        document.getElementById('summary-total').innerText = "$" + planData.price + ".00";
        document.getElementById('plan-img-display').src = planData.img;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const preSelectedPlan = urlParams.get('plan');
    if (preSelectedPlan && plans[preSelectedPlan]) {
        document.getElementById('planSelect').value = preSelectedPlan;
        updateSummary();
    }