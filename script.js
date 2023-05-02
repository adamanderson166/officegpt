function selectProfessional(professional) {
    document.getElementById("professionals").style.display = "none";
    document.getElementById("chat").style.display = "block";
    document.getElementById("selected-professional").innerText = professional;
}

function submitMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();
    userInput.value = "";

    if (!message) return;

    const conversation = document.getElementById("conversation");
    conversation.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    // Here, you can integrate your chatbot API to get a response.
    conversation.innerHTML += `<p><strong>${document.getElementById("selected-professional").innerText}:</strong> Chatbot response goes here.</p>`;
}

function goBack() {
    document.getElementById("chat").style.display = "none";
    document.getElementById("professionals").style.display = "block";
}
