document.getElementById("yesButton").addEventListener("click", function() {
    alert("But I like you 🥰");
});

document.getElementById("noButton").addEventListener("click", function() {
    const emojis = ["🙅", "🚫", "🙅‍♂️", "🙅‍♀️", "❌", "😠"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    this.innerHTML = `NO ${randomEmoji}`;

    const button = this;
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
