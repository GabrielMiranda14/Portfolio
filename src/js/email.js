// CONFIGURAÇÕES DO EMAILJS
const SERVICE_ID = "service_sz9w273";
const TEMPLATE_ID = "template_8qlxaop";

// INICIALIZAR EMAILJS
emailjs.init({
    publicKey: "cNjDA1_kSzSpo4yTI"
});

// ENVIAR E-MAIL
export async function sendEmail(messageData) {
    const templateParams = {
        name: messageData.name,
        email: messageData.email,
        subject: messageData.subject,
        message: messageData.message,
        time: new Date().toLocaleString("pt-BR")
    };

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
}