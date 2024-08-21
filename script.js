let currentQuestionIndex = 0;
const questions = document.querySelectorAll(".question-block");

// Different alert messages for each question
const alertMessages = [
    "But I like you 🥰",
    "I don't want, but situation are not in my favour 😓",
    "Thankyou..  🥰",
    // Add more messages corresponding to additional questions
];

function showQuestion(index) {
    questions.forEach((question, i) => {
        question.classList.toggle("active", i === index);
    });
}

document.querySelectorAll(".yesButton").forEach(function(button, index) {
    button.addEventListener("click", function() {
        alert(alertMessages[index]); // Show the specific alert message
        nextQuestion();
    });
});

document.querySelectorAll(".noButton").forEach(function(button) {
    button.addEventListener("click", function() {
        const emojis = ["🙅", "🚫", "🙅‍♂️", "🙅‍♀️", "❌", "😠"];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        this.innerHTML = `NO ${randomEmoji}`;

        const container = button.parentElement;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        const newLeft = Math.random() * (containerWidth - buttonWidth) * 0.8; // Ensures larger repositioning
        const newTop = Math.random() * (containerHeight - buttonHeight) * 0.8; // Ensures larger repositioning

        button.style.position = 'absolute';
        button.style.left = `${newLeft}px`;
        button.style.top = `${newTop}px`;
    });
});

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert("Have a nice day.... Bye.. 🥰!");
    }
}

// Show the first question initially
showQuestion(currentQuestionIndex);
