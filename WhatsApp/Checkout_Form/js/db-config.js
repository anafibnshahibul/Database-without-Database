function sendOrderWhatsApp() {
    const phone = "88017XXXXXXXX";
    const name = document.getElementById('order_name').value;
    const customerPhone = document.getElementById('order_phone').value;
    const service = document.getElementById('order_service').value;
    const orderID = "ORD-" + Math.floor(Math.random() * 100000);

    const text = `*New Order Received!*%0A%0A` +
                 `*Order ID:* ${orderID}%0A` +
                 `*Customer:* ${name}%0A` +
                 `*Phone:* ${customerPhone}%0A` +
                 `*Service:* ${service}%0A%0A` +
                 `Please confirm my order.`;

    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank').focus();
}