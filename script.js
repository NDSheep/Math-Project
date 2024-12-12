const gameState = {
    currentScene: 0,
    player: {
        hp: 80,
        maxHp: 80,
        attack: 20
    },
    currentEnemy: null,
    enemies: {
        alien: {
            name: "alien",
            hp: 60,
            maxHp: 60,
            attack: 10,
            sprite: 'url("aidle.gif")',
            attacks: [
                { name: "poke", damage: 10, sprite: 'url("aatk.gif")' },
            ],
            questionSet: 0,
        },
        schnP1: {
            name: "Captain Schneider",
            hp: 80,
            maxHp: 80,
            attack: 10,
            sprite: 'url("sp1idle.gif")',
            attacks: [
                { name: "illegal", damage: 20, sprite: 'url("sp1ill.gif")' },
                { name: "take a lap", damage: 16, sprite: 'url("sp1lap.gif")' },
                { name: "you forgot the constant of integration", damage: 24, sprite: 'url("sp1const.gif")' }
            ],
            questionSet: 1,
        },
        schnP2: {
            name: "Lord of Calculus, Controller of the tangent line, Sir Schneider",
            hp: 100,
            maxHp: 100,
            attack: 10,
            sprite: 'url("sp2idle.gif")',
            attacks: [
                { name: "find the tangent line", damage: 28, sprite: 'url("sp2idle.gif")' },
            ],
            questionSet: 2,
        },
    },
    questionBank: [
        [ // Question set 0
            {
                question: "∫cos(x)dx =",
                answer: "sin(x)+C"
            },
            {
                question: "∫sin(x)dx =",
                answer: "-cos(x)+C"
            },
            {
                question: "∫cos(x)dx =",
                answer: "sin(x)+C"
            },
            {
                question: "∫sec^2(x)dx =",
                answer: "tan(x)+C"
            },
            {
                question: "∫sec(x)tan(x)dx =",
                answer: "sec(x)+C"
            },
            {
                question: "∫csc(x)cot(x)dx =",
                answer: "-csc(x)+C"
            },
            {
                question: "∫csc^2(x)dx =",
                answer: "-cot(x)+C"
            },
            {
                question: "d/dx[sin(x)] =",
                answer: "cos(x)"
            },
            {
                question: "d/dx[cos(x)] =",
                answer: "-sin(x)"
            },
            {
                question: "d/dx[tan(x)] =",
                answer: "sec^2(x)"
            },
            {
                question: "d/dx[sec(x)] =",
                answer: "sec(x)tan(x)"
            },
            {
                question: "d/dx[csc(x)] =",
                answer: "-csc(x)cot(x)"
            },
            {
                question: "d/dx[cot(x)] =",
                answer: "-csc^2(x)"
            },
        ],
        [ // Question set 1
            {
                question: "d/dx[sin(x^2)] =",
                answer: "2xcos(x^2)"
            },
            {
                question: "∫sin(2x)dx =",
                answer: "-1/2cos(2x)+C"
            },
            {
                question: "d/dx[csc(x)-sin(x)] =",
                answer: "-csc(x)cot(x)-cos(x)"
            },
            {
                question: "∫[tan^2(x)+1]dx =",
                answer: "tan(x)+C"
            },
            {
                question: "d/dx[sin(pix)] =",
                answer: "picos(pix)"
            },
            {
                question: "∫cos(x)+sin(x)dx =",
                answer: "cos(x)-sin(x)"
            },
            {
                question: "d/dx[cos(x)csc(x)] =",
                answer: "-csc^2(x)"
            },
            {
                question: "∫[sin^2(x)+cos^2(x)]dx =",
                answer: "x+C"
            },
            
        ],
        [ // Question set 2
            {
                question: "d/dx[cot(y)=x-y], find dy/dx",
                answer: "1/[1-csc^2(y)]"
            },
            {
                question: "∫sin(x)cos(x)dx =",
                answer: "-1/4cos(2x)+C"
            },
            {
                question: "d/dx[sin(x)+cos(y)=1], find dy/dx",
                answer: "cos(x)/sin(y)"
            },
            {
                question: "∫sin^2(x)dx =",
                answer: "x/2-(sin(2x))/4+C"
            },
            {
                question: "d/dx[xtan(y)=2], find dy/dx",
                answer: "-tan(y)/[xsec^2(y)]"
            },
        ]
        // Add more questions here
    ],
    scenes: [
        {
            background: 'url("bg.png")',
            character: 'url("title.png")',
            name: "By Joshua Whitney and Julian Foley",
            dialogue: "An interactive experience to teach a strong foundations for the integration and differentiation of trigonometric functions.",
            choices: [
                { text: "Continue", nextScene: 1 }
            ]
        },
        {
            background: 'url("bg.png")',
            character: 'url("sidle.gif")',
            name: "Mission Captain Schneider",
            dialogue: "You have been selected this high-stakes mission to escape the distant planet and return to Earth.",
            choices: [
                { text: "Continue", nextScene: 2 }
            ]
        },
        {
            background: 'url("bg.png")',
            character: 'url("sidle.gif")',
            name: "Mission Captain Schneider",
            dialogue: "To do this, you must re-acquire the lost part of our ship, the mythical \"Tangent Line\".",
            choices: [
                { text: "Continue", nextScene: 3 },
            ]
        },
        {
            background: 'url("bg.png")',
            character: 'url("sidle.gif")',
            name: "Mission Captain Schneider",
            dialogue: "To do this, I need you to defeat the alien leader and retrieve the Tangent Line. Good luck!",
            choices: [
                { text: "Continue", nextScene: 4 },
            ]
        },
        {
            background: 'url("bg.png")',
            character: 'url("nuaidle.gif")',
            name: "Nick and Nikhil",
            dialogue: "Yes Captain! We will not let you down!",
            choices: [
                { text: "Continue", nextScene: 5 },
            ]
        },
        {
            background: 'url("bg.png")',
            character: 'url("sidle.gif")',
            name: "Mission Captain Schneider",
            dialogue: "Oh wait, I forgot to mention, you will need this",
            choices: [
                { text: "Continue", nextScene: 6 },
            ]
        },
        {
            background: 'url("bg.png")',
            character: 'url("t.gif")',
            name: "Narrator",
            dialogue: "He hands you the legendary Sword of Integration, the Shield of Differentiation, and the book of Trigonometry. You are now ready to face the alien leader Once you learn to use them.",
            choices: [
                { text: "Read the book of Trigonometry", nextScene: 7},
                { text: "Equip the tools and head forth", nextScene: 9}
            ]
        },
        {
            background: 'url("bg.png")',
            character: 'url("t.gif")',
            name: "Book of Trigonometry",
            dialogue: "Trigonometric derivitives:\n   d/dx\[sin(u)\] = cos(u)u\'\n   d/dx\[cos(u)\] = -sin(u)u\'\n  d/dx\[tan(u)\] = sec^2(u)u\'\n   d/dx\[sec(u)\] = sec(u)tan(u)u\'\n   d/dx\[csc(u)\] = -csc(u)cot(u)u\'\n   d/dx\[cot(u)\] = -csc^2(u)u\'",
            choices: [
                { text: "Flip to the next page", nextScene: 8 },
            ]
        },
        {
            background: 'url("bg.png")',
            character: 'url("t.gif")',
            name: "Book of Trigonometry",
            dialogue: "Trigonometric integrals:\n   ∫sin(u)du = -cos(u) + C\n   ∫cos(u)du = sin(u) + C\n   ∫sec^2(u)dx =        tan(u)+C\n   ∫sec(u)tan(u)dx = sec(u)+C\n   ∫csc(u)cot(u)dx = -csc(u)+C\n   ∫csc^2(u)dx = -cot(u)+C",
            choices: [
                { text: "Close the book and equip the tools.", nextScene: 9 },
            ]
        },
        {
            background: 'url("bg.png")',
            character: 'url("nidle.gif")',
            name: "Narrator",
            dialogue: "Nick and Nikhil head forth to face the alien leader. They are ready to face the alien leader.",
            choices: [
                { text: "Continue", nextScene: 10},
            ]
        },
        {
            type: "combat",
            background: 'url("bg.png")',
            character: 'url("nidle.gif")',
            hit: 'url("natk.gif")',
            def: 'url("ndef.gif")',
            enemyType: "alien",
            name: "Alien",
            dialogue: "You have come to take the Tangent Line. You will never get it!",
            choices: [
                { text: "Attack", action: "attack" },
                { text: "Defend", action: "defend" }
            ],
            nextScene: 11
        },
        {
            background: 'url("bg.png")',
            character: 'url("nidle.gif")',
            name: "Narrator",
            dialogue: "Nick and Nikhil defeated the alien leader and retrieved the Tangent Line. They are now ready to return to Earth after they return to Captain Schneider.",
            choices: [
                { text: "Continue", nextScene: 12},
            ]
        },
        {
            background: 'url("bg.png")',
            character: 'url("sidle.gif")',
            name: "Mission Captain Schneider",
            dialogue: "Thank you so much for retrieving the Tangent Line. We can now return to Earth. but...",
            choices: [
                { text: "Continue", nextScene: 13 },
            ]
        },
        {
            type: "combat",
            background: 'url("bg.png")',
            character: 'url("nidle.gif")',
            hit: 'url("natk.gif")',
            def: 'url("ndef.gif")',
            enemyType: "schnP1",
            name: "Captain Schneider",
            dialogue: "I never intended to let you leave",
            choices: [
                { text: "Attack", action: "attack" },
                { text: "Defend", action: "defend" }
            ],
            nextScene: 14
        },
        {
            background: 'url("bg.png")',
            character: 'url("sps.gif")',
            name: "Mission Captain Schneider",
            dialogue: "Or did you...?",
            choices: [
                { text: "Continue", nextScene: 15 },
            ]
        },
        {
            type: "combat",
            background: 'url("bg.png")',
            character: 'url("nidle.gif")',
            hit: 'url("natk.gif")',
            def: 'url("ndef.gif")',
            enemyType: "schnP2",
            name: "Lord of Calculus, Controller of the tangent line, Sir Schneider",
            dialogue: "I have ascended with the power of the Tangent Line. You will never defeat me!",
            choices: [
                { text: "Attack", action: "attack" },
                { text: "Defend", action: "defend" }
            ],
            nextScene: 0
        },
        // Add more scenes here
    ]
};

function renderScene() {
    const scene = gameState.scenes[gameState.currentScene];
    document.getElementById('game-container').style.backgroundImage = scene.background;
    document.getElementById('character').style.backgroundImage = scene.character;
    document.getElementById('character-name').textContent = scene.name;
    document.getElementById('dialogue').textContent = scene.dialogue;

    if (scene.type === "combat") {
        gameState.currentEnemy = {...gameState.enemies[scene.enemyType]};
        document.getElementById('enemy').style.backgroundImage = gameState.currentEnemy.sprite;
        document.getElementById('enemy').style.display = 'block';
        document.getElementById('combat-stats').style.display = 'flex';
        updateCombatStats();
    } else {
        document.getElementById('enemy').style.display = 'none';
        document.getElementById('combat-stats').style.display = 'none';
    }

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-button');
        button.addEventListener('click', () => {
            if (scene.type === "combat") {
                askQuestion(choice.action);
            } else {
                gameState.currentScene = choice.nextScene;
                renderScene();
            }
        });
        choicesContainer.appendChild(button);
    });
}

function updateCombatStats() {
    gameState.enemies[gameState.scenes[gameState.currentScene].enemyType].hp = gameState.currentEnemy.hp;
    document.getElementById('player-hp').textContent = `${gameState.player.hp}/${gameState.player.maxHp}`;
    document.getElementById('enemy-hp').textContent = `${gameState.currentEnemy.hp}/${gameState.currentEnemy.maxHp}`;
}

function askQuestion(action) {
    const question = gameState.questionBank[gameState.currentEnemy.questionSet][Math.floor(Math.random() * gameState.questionBank[gameState.currentEnemy.questionSet].length)];
    const userAnswer = prompt(question.question);
    if (userAnswer && userAnswer.toLowerCase().trim() === question.answer.toLowerCase()) {
        handleCombatAction(action);
    } else {
        if(confirm("Incorrect answer. Was it mathematically equivalent to the correct answer: " + question.answer + "?\n(ok = yes/ cancel = no)")){
          confirm("Sorry for the Error.");
          handleCombatAction(action);
        } else {
          gameState.scenes[gameState.currentScene].dialogue = "Incorrect answer. You lost your turn!";
          enemyTurn();
        }
    }
}

function handleCombatAction(action) {
    scene = gameState.scenes[gameState.currentScene];
    if (action === "attack") {
        scene.character = scene.hit;
        gameState.currentEnemy.hp -= gameState.player.attack;
        gameState.scenes[gameState.currentScene].dialogue = `You dealt ${gameState.player.attack} damage to the ${gameState.currentEnemy.name}!`;
    } else if (action === "defend") {
        const healAmount = 50;
        scene.character = scene.def;
        gameState.player.hp = Math.min(gameState.player.hp + healAmount, gameState.player.maxHp);
        gameState.scenes[gameState.currentScene].dialogue = `You defended and recovered ${healAmount} HP!`;
    }

    if (gameState.currentEnemy.hp <= 0) {
        endCombat(true);
        return;
    }

    enemyTurn();
}

function enemyTurn() {
    scene = gameState.scenes[gameState.currentScene];
    random = Math.floor(Math.random() * gameState.currentEnemy.attacks.length);
    gameState.enemies[scene.enemyType].sprite = gameState.enemies[scene.enemyType].attacks[random].sprite;
    const enemyAttack = gameState.currentEnemy.attacks[random];
    gameState.player.hp -= enemyAttack.damage;
    gameState.scenes[gameState.currentScene].dialogue += ` The ${gameState.currentEnemy.name} used ${enemyAttack.name} and dealt ${enemyAttack.damage} damage!`;

    if (gameState.player.hp <= 0) {
        endCombat(false);
        return;
    }

    updateCombatStats();
    renderScene();
}

function endCombat(playerWon) {
    gameState.scenes[gameState.currentScene].type = "dialogue";
    if (playerWon) {
        gameState.scenes[gameState.currentScene].dialogue = `You defeated the ${gameState.currentEnemy.name}!`;
        gameState.scenes[gameState.currentScene].choices = 
      [{ text: "Continue", nextScene: gameState.scenes[gameState.currentScene].nextScene}];
    } else {
        gameState.scenes[gameState.currentScene].dialogue = "You were defeated...";
    }
    renderScene();
}

function startGame() {
    gameState.currentScene = 0;
    gameState.player.hp = gameState.player.maxHp;
    renderScene();
}

startGame();
