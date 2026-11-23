import { getMessages, deleteMessage, updateMessage } from "./storage.js";

// CAPTURAR O CONTAINER
const messagesContainer = document.querySelector("#messages-container");

// ELEMENTOS DO MODAL
const editModal = document.querySelector("#edit-modal");
const editId = document.querySelector("#edit-id");
const editName = document.querySelector("#edit-name");
const editEmail = document.querySelector("#edit-email");
const editSubject = document.querySelector("#edit-subject");
const editMessage = document.querySelector("#edit-message");

// FORMULÁRIO DE EDIÇÃO
const editForm = document.querySelector("#edit-form");

// EXIBIR MENSAGENS
function renderMessages() {

    // BUSCAR MENSAGENS DO LOCAL STORAGE
    const messages = getMessages();

    // LIMPAR O CONTAINER
    messagesContainer.innerHTML = "";

    // VERIFICAR SE EXISTEM MENSAGENS
    if (messages.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("empty-message");
        emptyMessage.textContent = "Nenhuma mensagem recebida até o momento.";

        messagesContainer.appendChild(emptyMessage);

        return;
    }

    // PERCORRER AS MENSAGENS
    messages.forEach((message) => {

        // CRIAR O CARD
        const card = document.createElement("div");
        card.classList.add("message-card");

        // CABEÇALHO DO CARD
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("message-card-header");

        const sender = document.createElement("h3");
        sender.textContent = message.name;

        const messageType = document.createElement("span");
        messageType.classList.add("message-type");

        messageType.textContent = message.isTest
            ? "Teste"
            : "Recebida";

        cardHeader.append(sender, messageType);

        // INFORMAÇÕES DA MENSAGEM
        const email = document.createElement("p");
        email.classList.add("message-email");
        email.textContent = message.email;

        const subject = document.createElement("h4");
        subject.classList.add("message-subject");
        subject.textContent = message.subject;

        const content = document.createElement("p");
        content.classList.add("message-text");
        content.textContent = message.message;

        const date = document.createElement("span");
        date.classList.add("message-date");
        date.textContent = message.date;

        // BOTÃO DE EDITAR
        const editButton = document.createElement("button");

        editButton.classList.add("message-edit-button");
        editButton.textContent = "Editar";

        // EVENTO DE EDIÇÃO
        editButton.addEventListener("click", () => {

            // PREENCHER OS CAMPOS
            editId.value = message.id;
            editName.value = message.name;
            editEmail.value = message.email;
            editSubject.value = message.subject;
            editMessage.value = message.message;

            // ABRIR MODAL
            editModal.classList.add("active");
        });

        // BOTÃO DE EXCLUIR
        const deleteButton = document.createElement("button");

        deleteButton.classList.add("message-delete-button");
        deleteButton.textContent = "Excluir";

        // EVENTO DE EXCLUSÃO
        deleteButton.addEventListener("click", () => {

            const confirmation = confirm(
                `Deseja realmente excluir a mensagem de ${message.name}?`
            );

            if (!confirmation) {
                return;
            }

            deleteMessage(message.id);

            renderMessages();
        });

        // CONTÊINER DOS BOTÕES
        const cardActions = document.createElement("div");
        cardActions.classList.add("message-card-actions");

        // ADICIONAR BOTÕES AO CONTÊINER
        cardActions.append(editButton, deleteButton);

        // ADICIONAR ELEMENTOS AO CARD
        card.append(
            cardHeader,
            email,
            subject,
            content,
            date,
            cardActions
        );

        // ADICIONAR CARD AO CONTAINER
        messagesContainer.appendChild(card);
    });
}

// FECHAR MODAL
const closeModal = document.querySelector("#close-modal");
const cancelEdit = document.querySelector("#cancel-edit");

// FUNÇÃO DE FECHAMENTO
function closeEditModal() {
    editModal.classList.remove("active");
}

// BOTÃO FECHAR
closeModal.addEventListener("click", closeEditModal);

// BOTÃO CANCELAR
cancelEdit.addEventListener("click", closeEditModal);

// SALVAR ALTERAÇÕES
editForm.addEventListener("submit", (event) => {

    event.preventDefault();

    // CAPTURAR OS DADOS ATUALIZADOS
    const id = Number(editId.value);

    const updatedData = {
        name: editName.value.trim(),
        email: editEmail.value.trim(),
        subject: editSubject.value.trim(),
        message: editMessage.value.trim()
    };

    // VALIDAR OS CAMPOS
    if (
        !updatedData.name ||
        !updatedData.email ||
        !updatedData.subject ||
        !updatedData.message
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    // ATUALIZAR MENSAGEM
    updateMessage(id, updatedData);

    // FECHAR MODAL
    closeEditModal();

    // ATUALIZAR PAINEL
    renderMessages();

    alert("Mensagem atualizada com sucesso!");
});

// INICIALIZAR PAINEL
renderMessages();