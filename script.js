const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

const responses = {
    "hola": "¿En que te puedo ayudar?",
    "Hola": "¿En que te puedo ayudar?",
    "HOLA": "¿En que te puedo ayudar?",
    "¿Quién es Nicolás Maduro?": "Nicolás Maduro es el actual presidente de Venezuela. Llegó al poder en 2013 tras la muerte de Hugo Chávez.",
    "¿Cuál es la polémica actual sobre Nicolás Maduro?": "Nicolás Maduro ha enfrentado críticas y controversias por la crisis económica en Venezuela, la supuesta corrupción y las acusaciones de violaciones a los derechos humanos.",
    "¿Qué hizo Nicolás Maduro en su último discurso?": "En su último discurso, Nicolás Maduro abordó temas como la economía del país y las sanciones internacionales, defendiendo su administración y criticando a la oposición.",
    "No entiendo.": "¿Especificamente que es lo que no entiendes? Estoy aqui para ayudarte.",
    "¿Qué está pasando actualmente con Nicolás Maduro?": "Actualmente Nicolás Maduro está envuelto en controversias electorales, Las elecciones bajo el gobierno de Maduro han sido ampliamente criticadas por la comunidad internacional debido a que las elecciones del presente año 2024 en venezuela fueron presuntamente manipuladas por el gobierno de Nicolás. Se han alegado irregularidades y fraude en los procesos electorales, y varios países han cuestionado la legitimidad de su gobierno.",
};

function sendMessage() {
    const userText = userInput.value.trim();
    if (userText) {
        addMessage(userText, 'user');
        userInput.value = '';
        const botResponse = getResponse(userText);
        setTimeout(() => addMessage(botResponse, 'bot'), 500);
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getResponse(text) {
    return responses[text] || responses["No entiendo."];
}
