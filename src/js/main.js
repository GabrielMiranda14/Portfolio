import { initializeStorage, addMessage } from './storage.js';
import { sendEmail } from './email.js';

// INICIALIZAR ARMAZENAMENTO
initializeStorage();

// FORMULÁRIO DE CONTATO
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // CAPTURAR OS DADOS
    const name = document.querySelector("#contact-name").value.trim();
    const email = document.querySelector("#contact-email").value.trim();
    const subject = document.querySelector("#contact-subject").value.trim();
    const message = document.querySelector("#contact-message").value.trim();

    // VALIDAR OS CAMPOS
    if (!name || !email || !subject || !message) {
        alert("Preencha todos os campos antes de enviar.");
        return;
    }

    // CRIAR O OBJETO
    const newMessage = {
        id: Date.now(),
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleString("pt-BR"),
        isTest: false
    };

    // SALVAR E ENVIAR
    try {
        addMessage(newMessage);

        try {
            await sendEmail(newMessage);

            alert("Mensagem enviada com sucesso!");

        } catch (error) {
            console.error("Erro ao enviar e-mail:", error);

            alert("Sua mensagem foi salva, mas não foi possível enviar o e-mail.");
        }

        contactForm.reset();

    } catch (error) {
        console.error("Erro ao salvar mensagem:", error);

        alert("Não foi possível salvar sua mensagem. Tente novamente.");
    }
});