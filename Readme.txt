
# Fruit Catcher – 2D Arcade Game

## Project Information

Fruit Catcher is a simple 2D arcade game developed
using HTML5, CSS3, JavaScript and HTML5 Canvas.

The player controls a basket and catches fruits
falling from the top of the screen.

The objective is to score maximum points without
missing five fruits.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- HTML5 Canvas API
- Web Audio API

## Game Features

1. Start screen with game instructions.
2. Basket movement using arrow keys.
3. Randomly falling fruits.
4. Normal fruit gives 10 points.
5. Golden apple gives 50 bonus points.
6. Missed fruit counter.
7. Game ends after missing five fruits.
8. Increasing fruit falling speed.
9. Catching and missing sound effects.
10. Restart functionality.

## Game Rules

- Catch normal fruits to earn 10 points.
- Catch golden apples to earn 50 points.
- Every missed fruit increases the missed counter.
- The game ends when five fruits are missed.
- Fruit speed increases as the score increases.

## Keyboard Controls

- Left Arrow: Move basket left.
- Right Arrow: Move basket right.

## How to Run

1. Create a folder named Fruit-Catcher.
2. Create index.html, style.css and script.js.
3. Copy the respective source code into each file.
4. Create a README.md file.
5. Open index.html in Google Chrome or another modern browser.
6. Click Start Game.

No additional software installation or external
libraries are required.

## Game Algorithm

1. Initialize the canvas and game variables.
2. Display the start screen.
3. Start the game when the player clicks Start Game.
4. Generate fruits at random horizontal positions.
5. Move fruits downwards.
6. Move the basket using keyboard controls.
7. Check collision between fruits and basket.
8. Increase score when fruits are caught.
9. Increase missed counter when fruits reach the bottom.
10. End the game after five missed fruits.
11. Increase difficulty as the score increases.
12. Allow the player to restart the game.

## Collision Detection

Collision detection is implemented using the
Axis-Aligned Bounding Box (AABB) method.

The rectangular boundaries of the fruit and
basket are compared.

If their boundaries overlap, a collision occurs.

## Golden Apple Customization

A golden apple is generated occasionally
using Math.random().

It is visually distinguished using a golden
circular background.

Catching it awards 50 bonus points instead
of the normal 10 points.

## Multimedia Features

- Canvas API is used for game graphics.
- Emoji graphics represent fruits.
- Web Audio API generates sound effects.
- requestAnimationFrame() creates smooth animation.

## Conclusion

Fruit Catcher demonstrates the basic concepts
of 2D game development, animation, collision
detection, keyboard interaction, scoring,
random object generation and multimedia effects.
