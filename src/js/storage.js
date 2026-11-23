const STORAGE_KEY = "portfolio_messages";

// MENSAGENS DE TESTE
const testMessages = [
    {
        id: 1,
        name: "Ana Souza",
        email: "ana@example.test",
        subject: "Oportunidade profissional",
        message: "Gostaria de conversar sobre uma oportunidade na área de tecnologia.",
        date: "2026-11-01",
        isTest: true
    },
    {
        id: 2,
        name: "Lucas Oliveira",
        email: "lucas@example.test",
        subject: "Dúvida sobre projeto",
        message: "Gostaria de saber mais sobre seus projetos.",
        date: "2026-11-02",
        isTest: true
    },
    {
        id: 3,
        name: "Mariana Lima",
        email: "mariana@example.test",
        subject: "Parceria",
        message: "Tenho interesse em conversar sobre uma possível parceria.",
        date: "2026-11-03",
        isTest: true
    },
    {
        id: 4,
        name: "Pedro Santos",
        email: "pedro@example.test",
        subject: "Feedback",
        message: "Gostei bastante do seu portfólio!",
        date: "2026-11-04",
        isTest: true
    },
    {
        id: 5,
        name: "Julia Costa",
        email: "julia@example.test",
        subject: "Desenvolvimento web",
        message: "Você trabalha com desenvolvimento de sites?",
        date: "2026-11-05",
        isTest: true
    },
    {
        id: 6,
        name: "Rafael Mendes",
        email: "rafael@example.test",
        subject: "Contato profissional",
        message: "Gostaria de conhecer melhor suas habilidades.",
        date: "2026-11-06",
        isTest: true
    },
    {
        id: 7,
        name: "Beatriz Almeida",
        email: "beatriz@example.test",
        subject: "Projeto",
        message: "Tenho uma ideia de projeto e gostaria de conversar.",
        date: "2026-11-07",
        isTest: true
    },
    {
        id: 8,
        name: "Gabriel Ferreira",
        email: "gabriel@example.test",
        subject: "Dúvida",
        message: "Quais tecnologias você utiliza nos seus projetos?",
        date: "2026-11-08",
        isTest: true
    },
    {
        id: 9,
        name: "Camila Rodrigues",
        email: "camila@example.test",
        subject: "Elogio",
        message: "Seu trabalho ficou muito interessante!",
        date: "2026-11-09",
        isTest: true
    },
    {
        id: 10,
        name: "Matheus Ribeiro",
        email: "matheus@example.test",
        subject: "Oportunidade",
        message: "Gostaria de conversar sobre uma oportunidade.",
        date: "2026-11-10",
        isTest: true
    },
    {
        id: 11,
        name: "Larissa Martins",
        email: "larissa@example.test",
        subject: "Portfólio",
        message: "Gostaria de saber se você desenvolve projetos personalizados.",
        date: "2026-11-11",
        isTest: true
    },
    {
        id: 12,
        name: "Felipe Gomes",
        email: "felipe@example.test",
        subject: "Tecnologia",
        message: "Você tem experiência com JavaScript?",
        date: "2026-11-12",
        isTest: true
    },
    {
        id: 13,
        name: "Isabela Rocha",
        email: "isabela@example.test",
        subject: "Contato",
        message: "Estou entrando em contato para conhecer seu trabalho.",
        date: "2026-11-13",
        isTest: true
    },
    {
        id: 14,
        name: "Bruno Carvalho",
        email: "bruno@example.test",
        subject: "Desenvolvimento",
        message: "Gostaria de conversar sobre desenvolvimento frontend.",
        date: "2026-11-14",
        isTest: true
    },
    {
        id: 15,
        name: "Sofia Nunes",
        email: "sofia@example.test",
        subject: "Dúvida sobre serviços",
        message: "Você também trabalha com design de interfaces?",
        date: "2026-11-15",
        isTest: true
    },
    {
        id: 16,
        name: "Enzo Barbosa",
        email: "enzo@example.test",
        subject: "Projeto web",
        message: "Tenho interesse em desenvolver um projeto com você.",
        date: "2026-11-16",
        isTest: true
    },
    {
        id: 17,
        name: "Manuela Dias",
        email: "manuela@example.test",
        subject: "Feedback",
        message: "A organização do seu portfólio está excelente.",
        date: "2026-11-17",
        isTest: true
    },
    {
        id: 18,
        name: "Thiago Cardoso",
        email: "thiago@example.test",
        subject: "Contato profissional",
        message: "Gostaria de trocar algumas ideias sobre tecnologia.",
        date: "2026-11-18",
        isTest: true
    },
    {
        id: 19,
        name: "Valentina Lopes",
        email: "valentina@example.test",
        subject: "Oportunidade",
        message: "Gostaria de saber mais sobre sua disponibilidade.",
        date: "2026-11-19",
        isTest: true
    },
    {
        id: 20,
        name: "Davi Moreira",
        email: "davi@example.test",
        subject: "Mensagem",
        message: "Parabéns pelo desenvolvimento do seu portfólio!",
        date: "2026-11-20",
        isTest: true
    }
];

// INICIALIZAR LOCAL STORAGE
export function initializeStorage() {
    const storedMessages = localStorage.getItem(STORAGE_KEY);

    if (storedMessages === null) {
        saveMessages(testMessages);
    }
}

// BUSCAR MENSAGENS
export function getMessages() {
    const messages = localStorage.getItem(STORAGE_KEY);

    return messages ? JSON.parse(messages) : [];
}

// SALVAR MENSAGENS
export function saveMessages(messages) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

// ADICIONAR MENSAGEM
export function addMessage(message) {
    const messages = getMessages();

    messages.push(message);

    saveMessages(messages);
}

// ATUALIZAR MENSAGEM
export function updateMessage(id, updatedData) {
    const messages = getMessages();

    const updatedMessages = messages.map(message =>
        message.id === id
            ? { ...message, ...updatedData }
            : message
    );

    saveMessages(updatedMessages);
}

// EXCLUIR MENSAGEM
export function deleteMessage(id) {
    const messages = getMessages();

    const updatedMessages = messages.filter(
        message => message.id !== id
    );

    saveMessages(updatedMessages);
}