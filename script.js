const pet = document.getElementById("pet");

const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => {
    alert("🍖 Your pet is happy!");
});

buttons[1].addEventListener("click", () => {
    alert("🎮 Your pet is playing!");
});

buttons[2].addEventListener("click", () => {
    alert("😴 Your pet is sleeping!");
});
