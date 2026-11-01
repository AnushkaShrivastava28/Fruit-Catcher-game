# **🍎 Fruit Catcher – 2D Arcade Game**

<p align="center">
  **A Fun, Interactive & Responsive 2D Arcade Game**
</p>

---

## **🚀 About The Project**

**Fruit Catcher** is a lightweight and interactive **2D arcade game** developed using **HTML5, CSS3, JavaScript, and the HTML5 Canvas API**.

In this game, the player controls a basket at the bottom of the screen to catch falling fruits and earn points. The main objective is to achieve the highest possible score while avoiding five missed fruits.

The game combines **graphics, animation, keyboard interaction, collision detection, and sound effects** to create an engaging gaming experience.

---

## **🎮 Live Demo & Preview**

- **🌐 Live Demo:** [Play Fruit Catcher](YOUR-LIVE-DEMO-LINK)
- **📸 Game Preview:** Add your gameplay screenshot or GIF here.

---

## **🛠️ Technologies Used**

| Technology | Purpose |
|:---|:---|
| **HTML5** | Provides the basic structure of the game. |
| **CSS3** | Handles styling, layout, and responsive design. |
| **JavaScript (ES6+)** | Implements game logic, movement, and event handling. |
| **HTML5 Canvas API** | Renders game objects and 2D graphics. |
| **Web Audio API** | Generates sound effects dynamically. |

---

## **✨ Game Features**

- 🎯 **Interactive Start Screen:** Displays game instructions and a start button.
- 🧺 **Keyboard Controls:** Move the basket using left and right arrow keys.
- 🍓 **Random Fruit Generation:** Fruits fall from randomly selected horizontal positions.
- 🍏 **Golden Apple Bonus:** Special golden apples provide **50 bonus points**.
- ⚡ **Progressive Difficulty:** Fruit falling speed increases as the score grows.
- 🔊 **Dynamic Sound Effects:** Generates audio for catching and missing fruits.
- 🏆 **Score Tracking:** Displays the player's current score.
- ❤️ **Miss Counter:** Tracks missed fruits and ends the game after five misses.
- 🔄 **Restart Functionality:** Allows players to restart after game over.

---

## **🏆 Game Rules & Mechanics**

### **🍓 Scoring System**

| Fruit Type | Points |
|:---|---:|
| 🍓 Normal Fruits | **10 Points** |
| 🍏 Golden Apples | **50 Points** |

### **❤️ Game Over Conditions**

- Every fruit that reaches the bottom without being caught increases the miss counter.
- The game ends when the player misses **5 fruits**.
- The player can restart the game and try to achieve a higher score.

### **⌨️ Game Controls**

| Keyboard Key | Action |
|:---:|:---|
| ⬅️ **Left Arrow** | Move the basket left |
| ➡️ **Right Arrow** | Move the basket right |

---

## **🧠 Technical Implementation**

### **1. 🎨 Game Loop and Rendering**

The game uses JavaScript's **`requestAnimationFrame()`** function to continuously update and render game objects.

It helps create smooth animations by synchronizing the game rendering process with the browser's display refresh rate.

### **2. 📐 Collision Detection**

The game implements **Axis-Aligned Bounding Box (AABB)** collision detection to identify when a falling fruit touches the basket.

**Collision Detection Logic:**

```javascript
if (
    fruit.x < basket.x + basket.width &&
    fruit.x + fruit.width > basket.x &&
    fruit.y < basket.y + basket.height &&
    fruit.y + fruit.height > basket.y
) {
    // Collision detected!
    // Update score and play sound.
}
```

### **3. 🎵 Multimedia Implementation**

- **Graphics:** Uses emojis rendered directly on the HTML5 Canvas as game sprites.
- **Animation:** Uses JavaScript animation frames for continuous movement.
- **Audio:** Uses Web Audio API oscillator nodes to generate sound effects dynamically.
- **Interaction:** Uses keyboard event listeners to control basket movement.

---

## **📂 Project Structure**

```text
Fruit-Catcher/
│
├── index.html       # Main HTML structure
├── style.css        # Game styling and layout
├── script.js        # Game logic and functionality
└── README.md        # Project documentation
```

---

## **🏃‍♀️ How to Run Locally**

No additional frameworks, external libraries, or compilation tools are required.

**Step 1: Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/Fruit-Catcher.git
```

**Step 2: Navigate to the project folder**

```bash
cd Fruit-Catcher
```

**Step 3: Open the project**

Open `index.html` in your preferred web browser.

**Step 4: Start Playing!**

Click the **Start Game** button and use the arrow keys to catch falling fruits.

---

## **🎓 Learning Outcomes**

Through this project, I explored and implemented the following concepts:

- **2D Game Development** using JavaScript.
- **HTML5 Canvas Graphics** and rendering.
- **JavaScript Event Handling** and keyboard interactions.
- **Game Loops and Animation** using `requestAnimationFrame()`.
- **Collision Detection** using the AABB technique.
- **Random Object Generation** and movement.
- **Audio Generation** using the Web Audio API.
- **Game State Management** and scoring systems.
- **Interactive User Interface** development.

---

## **🌟 Future Enhancements**

- Add more fruit varieties and special bonus items.
- Introduce multiple game levels.
- Add background music and additional sound effects.
- Implement a high-score leaderboard.
- Add touch controls for mobile devices.

---

## **📝 Conclusion**

**Fruit Catcher** demonstrates the practical implementation of fundamental **multimedia and web development concepts** through an interactive 2D arcade game.

The project combines graphics, animation, keyboard interaction, collision detection, and audio to create an engaging gaming experience.

It also provides practical experience in **JavaScript programming, HTML5 Canvas rendering, and real-time game development**.

---

## **📄 License**

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project under the terms of the license.

---

<p align="center

