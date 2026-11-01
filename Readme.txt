# 🍎 Fruit Catcher – 2D Arcade Game

**Fruit Catcher** is a lightweight, responsive 2D arcade game built entirely for the web using HTML5, CSS3, JavaScript, and the HTML5 Canvas API. The player controls a basket at the bottom of the screen to catch various falling fruits. The primary objective is to rack up the highest score possible before missing five fruits.

---

## 🚀 Live Demo & Preview
*(Optional: Add a link to your GitHub Pages deployment or a GIF preview here)*
* **Live Demo:** [Deploy Link Here]
* ![Game Preview](https://placeholder.com)

---

## 🛠️ Technologies Used
* **HTML5** & **HTML5 Canvas API** – For rendering smooth 2D graphics and managing the viewport.
* **CSS3** – For layout styling and structural presentation.
* **JavaScript (ES6+)** – For core game loop execution, physics, and event handlers.
* **Web Audio API** – For dynamically generating synthesizer sound effects without external audio files.

---

## ✨ Game Features
* **Interactive Start Screen:** Displays structured game instructions and a click-to-play prompt.
* **Responsive Keyboard Controls:** Fluid basket movement calibrated for quick reaction times.
* **Dynamic Spawn Logic:** Randomly distributed fruit drops tracking varying horizontal lanes.
* **Special Items:** Occasional golden apple spawns worth **50 bonus points** instead of the normal 10 points.
* **Progressive Difficulty:** Automated step-up increments that increase fruit falling speeds as your score grows.
* **Built-in SFX engine:** Custom synthesized audio frequencies triggered on point catches and misses.
* **State Management:** Complete life-cycle tracking (Start -> Playing -> Game Over -> Restart).

---

## 📜 Game Rules & Mechanics

### Scoring System
* 🍓 **Normal Fruits:** 10 Points
* 🍏 **Golden Apples:** 50 Points

### Game Over Conditions
* Each missed fruit that touches the bottom of the screen increments the **Miss Counter**.
* The match ends immediately upon reaching **5 misses**.

### Controls
* ⬅️ **Left Arrow Key:** Slide the basket left.
* ➡️ **Right Arrow Key:** Slide the basket right.

---

## 🧠 Architectural Insights

### 🛠️ The Game Loop & Rendering
The engine leverages `requestAnimationFrame()` to achieve seamless synchronization with the monitor refresh rate, mitigating screen tearing and micro-stutters.

### 📐 Collision Detection
Collision logic utilizes the **Axis-Aligned Bounding Box (AABB)** method. The structural dimensions of the falling elements are constantly checked against the positional coordinate frame of the basket:
```javascript
if (
  fruit.x < basket.x + basket.width &&
  fruit.x + fruit.width > basket.x &&
  fruit.y < basket.y + basket.height &&
  fruit.y + fruit.height > basket.y
) {
  // Collision detected! Trigger scoring and audio logic.
}
```

### 🎨 Multimedia Implementation
* **Graphics:** Emojis are drawn directly onto the Canvas grid, serving as performant, vector-scalable sprites.
* **Audio Layer:** Employs the **Web Audio API** oscillator nodes to cleanly synthesize sound effects in real-time, removing any dependency on external `.mp3` or `.wav` assets.

---

## 🏃‍♂️ How to Run Locally

No specialized software, compilation tools, or node modules are required. 

1. Create a root directory named `Fruit-Catcher`.
2. Inside the folder, initialize three basic source files and one text document:
   ```bash
   ├── index.html
   ├── style.css
   ├── script.js
   └── README.md
   ```
3. Copy your source code into their respective files.
4. Double-click `index.html` or open it using any modern web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
5. Press **Start Game** and enjoy!

---

## 📝 Conclusion
This project serves as a comprehensive reference template demonstrating fundamental concepts of browser-based game development. It highlights structural implementations of object array management, operational game state steps, responsive element boundary checks, and native audio generation.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

