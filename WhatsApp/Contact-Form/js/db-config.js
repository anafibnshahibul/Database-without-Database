function sendToWhatsApp() {
    const phone = "88017XXXXXXXX";
    const name = document.getElementById('wa_name').value;
    const message = document.getElementById('wa_msg').value;

    const text = `Hello! My name is ${name}. %0A%0A${message}`;
    const url = `https://wa.me/${phone}?text=${text}`;
    
    window.open(url, '_blank').focus();
}