const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");
const restartButton = document.getElementById("restart");

const story = {
    start: {
        text: "Você está em uma floresta escura. Há um caminho à sua frente e outro à sua direita. Para onde você vai?",
        choices: [
            { text: "Caminho à frente", next: "forward" },
            { text: "Caminho à direita", next: "right" }
        ]
    },
    forward: {
        text: "Você avança e encontra um rio. Você quer nadar ou procurar uma ponte?",
        choices: [
            { text: "Nadar", next: "swim" },
            { text: "Procurar uma ponte", next: "bridge" }
        ]
    },
    right: {
        text: "Você encontra uma cabana. Você quer entrar ou voltar?",
        choices: [
            { text: "Entrar na cabana", next: "cabin" },
            { text: "Voltar", next: "start" }
        ]
    },
    swim: {
        text: "Você nada e é levado pela correnteza. Fim da aventura!",
        choices: []
    },
    bridge: {
        text: "Você encontra uma ponte e atravessa com segurança. Você venceu!",
        choices: []
    },
    cabin: {
        text: "Dentro da cabana, você encontra tesouros! Você venceu!",
        choices: []
    }
};

function startAdventure() {
    showStory("start");
}

function showStory(storyKey) {
    const currentStory = story[storyKey];
    storyElement.textContent = currentStory.text;
    choicesElement.innerHTML = "";

    currentStory.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => showStory(choice.next);
        choicesElement.appendChild(button);
    });

    // Mostrar o botão de reiniciar se não houver mais escolhas
    if (currentStory.choices.length === 0) {
        restartButton.style.display = "block";
        restartButton.onclick = startAdventure;
    } else {
        restartButton.style.display = "none";
    }
}

startAdventure();