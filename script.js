
// ==========================================
// FRUIT CATCHER - MAIN JAVASCRIPT FILE
// ==========================================


// 1. GET HTML ELEMENTS

const canvas = document.getElementById("gameCanvas");

const ctx = canvas.getContext("2d");

const scoreDisplay = document.getElementById("score");

const missedDisplay = document.getElementById("missed");

const startScreen = document.getElementById("startScreen");

const gameOverScreen = document.getElementById("gameOverScreen");

const startButton = document.getElementById("startButton");

const restartButton = document.getElementById("restartButton");

const finalScoreDisplay = document.getElementById("finalScore");


// 2. GAME VARIABLES

let score = 0;

let missed = 0;

let gameState = "start";

let fruits = [];

let frameCount = 0;

let animationId = null;


// 3. BASKET OBJECT

const basket = {

    x: 300,

    y: 385,

    width: 100,

    height: 40,

    speed: 7

};


// 4. KEYBOARD VARIABLES

let leftPressed = false;

let rightPressed = false;


// 5. GAME SETTINGS

const MAX_MISSED = 5;

let fruitSpeed = 2;

let spawnRate = 60;


// 6. AUDIO SYSTEM USING WEB AUDIO API

let audioContext = null;


// Initialize audio after a user interaction

function initializeAudio() {

    if (!audioContext) {

        audioContext = new (
            window.AudioContext ||
            window.webkitAudioContext
        )();

    }

    if (audioContext.state === "suspended") {

        audioContext.resume();

    }

}


// Function to generate simple sound effects

function playSound(frequency, duration, type) {

    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();

    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);

    gainNode.connect(audioContext.destination);

    oscillator.type = "sine";

    oscillator.frequency.value = frequency;

    gainNode.gain.setValueAtTime(
        0.15,
        audioContext.currentTime
    );

    gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
    );

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + duration
    );

}


// 7. DRAW BACKGROUND

function drawBackground() {

    // Sky background

    ctx.fillStyle = "#e5f7ff";

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ground

    ctx.fillStyle = "#c8edc2";

    ctx.fillRect(0, 425, canvas.width, 25);

    // Decorative clouds

    ctx.font = "30px Arial";

    ctx.fillText("☁️", 80, 70);

    ctx.fillText("☁️", 450, 100);

    ctx.fillText("☁️", 590, 55);

}


// 8. DRAW BASKET

function drawBasket() {

    // Basket body

    ctx.fillStyle = "#b87543";

    ctx.fillRect(
        basket.x,
        basket.y,
        basket.width,
        basket.height
    );

    // Basket upper rim

    ctx.fillStyle = "#75401f";

    ctx.fillRect(
        basket.x - 5,
        basket.y,
        basket.width + 10,
        8
    );

    // Basket design lines

    ctx.strokeStyle = "#f5c08a";

    ctx.lineWidth = 3;

    for (let i = 15; i < basket.width; i += 25) {

        ctx.beginPath();

        ctx.moveTo(basket.x + i, basket.y + 10);

        ctx.lineTo(basket.x + i, basket.y + basket.height);

        ctx.stroke();

    }

}


// 9. GENERATE FRUITS

function createFruit() {

    // Random horizontal position

    const x = Math.random() * (canvas.width - 40);

    // Generate golden apple occasionally

    const isGolden = Math.random() < 0.15;

    const fruit = {

        x: x,

        y: -40,

        width: 35,

        height: 35,

        speed: fruitSpeed + Math.random(),

        isGolden: isGolden,

        emoji: isGolden
            ? "🌟"
            : ["🍎", "🍊", "🍓", "🍇", "🍒", "🍉"][
                Math.floor(Math.random() * 6)
            ]

    };

    fruits.push(fruit);

}


// 10. DRAW FRUITS

function drawFruits() {

    for (let i = 0; i < fruits.length; i++) {

        const fruit = fruits[i];

        // Draw golden fruit differently

        if (fruit.isGolden) {

            ctx.beginPath();

            ctx.arc(
                fruit.x + 17,
                fruit.y + 17,
                23,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = "#ffd700";

            ctx.fill();

            ctx.strokeStyle = "#ff9900";

            ctx.lineWidth = 3;

            ctx.stroke();

        }

        // Draw fruit emoji

        ctx.font = "30px Arial";

        ctx.textAlign = "center";

        ctx.textBaseline = "middle";

        ctx.fillText(
            fruit.emoji,
            fruit.x + fruit.width / 2,
            fruit.y + fruit.height / 2
        );

    }

    ctx.textAlign = "left";

    ctx.textBaseline = "alphabetic";

}


// 11. MOVE BASKET

function moveBasket() {

    if (leftPressed) {

        basket.x -= basket.speed;

    }

    if (rightPressed) {

        basket.x += basket.speed;

    }

    // Prevent basket from leaving the canvas

    if (basket.x < 0) {

        basket.x = 0;

    }

    if (basket.x + basket.width > canvas.width) {

        basket.x = canvas.width - basket.width;

    }

}


// 12. COLLISION DETECTION

function checkCollision(fruit, basket) {

    return (

        fruit.x < basket.x + basket.width &&

        fruit.x + fruit.width > basket.x &&

        fruit.y < basket.y + basket.height &&

        fruit.y + fruit.height > basket.y

    );

}


// 13. UPDATE FRUITS

function updateFruits() {

    for (let i = fruits.length - 1; i >= 0; i--) {

        const fruit = fruits[i];

        // Move fruit downwards

        fruit.y += fruit.speed;

        // Check whether fruit touches basket

        if (checkCollision(fruit, basket)) {

            // Golden apple gives 50 points

            if (fruit.isGolden) {

                score += 50;

                playSound(1000, 0.25, "catch");

            }

            // Normal fruit gives 10 points

            else {

                score += 10;

                playSound(600, 0.15, "catch");

            }

            // Remove caught fruit

            fruits.splice(i, 1);

            // Update score

            scoreDisplay.textContent = score;

            continue;

        }


        // Check whether fruit is missed

        if (fruit.y > canvas.height) {

            missed++;

            missedDisplay.textContent = missed + " / " + MAX_MISSED;

            playSound(200, 0.2, "miss");

            // Remove missed fruit

            fruits.splice(i, 1);

            // End game after 5 missed fruits

            if (missed >= MAX_MISSED) {

                endGame();

                return;

            }

        }

    }

}


// 14. INCREASE DIFFICULTY

function increaseDifficulty() {

    // Increase falling speed every 50 points

    fruitSpeed = 2 + Math.floor(score / 50) * 0.4;

    // Reduce spawning interval as score increases

    spawnRate = Math.max(
        25,
        60 - Math.floor(score / 100) * 5
    );

}


// 15. GAME LOOP

function gameLoop() {

    // Stop animation if game is not playing

    if (gameState !== "playing") {

        return;

    }

    // Clear previous frame

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Draw background

    drawBackground();

    // Move basket

    moveBasket();

    // Create fruits periodically

    frameCount++;

    if (frameCount % spawnRate === 0) {

        createFruit();

    }

    // Update fruit positions and collisions

    updateFruits();

    // Increase difficulty

    increaseDifficulty();

    // Draw objects

    drawBasket();

    drawFruits();

    // Continue animation

    if (gameState === "playing") {

        animationId = requestAnimationFrame(gameLoop);

    }

}


// 16. START GAME

function startGame() {

    initializeAudio();

    // Reset all game variables

    score = 0;

    missed = 0;

    fruitSpeed = 2;

    spawnRate = 60;

    frameCount = 0;

    fruits = [];

    // Reset basket position

    basket.x = 300;

    // Reset keyboard controls

    leftPressed = false;

    rightPressed = false;

    // Update scoreboard

    scoreDisplay.textContent = score;

    missedDisplay.textContent = "0 / " + MAX_MISSED;

    // Change game state

    gameState = "playing";

    // Show game area

    startScreen.classList.add("hidden");

    gameOverScreen.classList.add("hidden");

    // Start animation

    cancelAnimationFrame(animationId);

    animationId = requestAnimationFrame(gameLoop);

}


// 17. GAME OVER

function endGame() {

    gameState = "gameover";

    cancelAnimationFrame(animationId);

    finalScoreDisplay.textContent = score;

    gameOverScreen.classList.remove("hidden");

}


// 18. KEYBOARD EVENT LISTENERS

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowLeft") {

        leftPressed = true;

        event.preventDefault();

    }

    if (event.key === "ArrowRight") {

        rightPressed = true;

        event.preventDefault();

    }

});


document.addEventListener("keyup", function(event) {

    if (event.key === "ArrowLeft") {

        leftPressed = false;

    }

    if (event.key === "ArrowRight") {

        rightPressed = false;

    }

});


// 19. BUTTON EVENT LISTENERS

startButton.addEventListener("click", startGame);

restartButton.addEventListener("click", startGame);

