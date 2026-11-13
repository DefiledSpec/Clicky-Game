# South Park Clicky Game

An interactive, fast-paced memory game built with **React** and **Material-UI**. Test your short-term memory by clicking all eight South Park character cards without selecting the same character twice—after every click, the entire board shuffles!

<!-- ![Clicky Game Screenshot](./path/to/screenshot.png)-->

## Live Demo

**[Play the Live App Here](https://your-live-demo-link.com)**

---

## How to Play

1. Click any character card to earn **1 point** and start your streak.
2. After every click, the deck shuffles into a new random arrangement.
3. Keep clicking unvisited cards until you reach **8 / 8** to score a **Flawless Victory** and build your win streak.
4. If you click a card you have already selected in the current round, the board shakes, your current score resets to `0`, and a new round begins.

---

## Features

* **Dynamic Deck Shuffling:** Randomizes card positions after every guess while locking rapid double-clicks during transition states.
* **Score, Best & Streak Tracking:** Tracks current score, personal best score, total 8/8 round clears, and consecutive win streaks.
* **Custom Dark-Mode Theme:** Styled with Material-UI (`MuiThemeProvider`) featuring a frosted-glass fixed header, color-coded status pills, and responsive grid cards.
* **Interactive Visual Feedback:** Includes card hover lift animations, glowing green/red border highlights, a CSS `@keyframes` shake animation on wrong guesses, and a victory celebration banner.

---

## Tech Stack

* **Frontend:** React (`v16.5.2`), JavaScript (ES6+)
* **UI & Styling:** Material-UI (`v3.1.0`), CSS-in-JS (JSS)
* **Tooling:** Create React App / Node.js

---

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

* [Node.js](https://nodejs.org) (v10 or higher recommended)
* `npm` or `yarn`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd clicky-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play.

---

## Project Structure

```text
src/
├── components/
│   ├── Characters.js    # Responsive 4x2 grid container with shake animation
│   ├── Footer.js        # Dark-themed sticky footer
│   ├── FriendCard.js    # Individual character card with hover & border states
│   ├── Navbar.js        # Fixed frosted-glass top navigation bar
│   ├── Panel.js         # Hero instructions & Flawless Victory banner
│   ├── Score.js         # Individual stat badge component
│   ├── ScoreBoard.js    # Score, Best, and Wins counter group
│   └── Status.js        # Color-coded feedback pill ("Correct!" / "Incorrect!")
├── characters.js        # Character dataset and image paths
├── utils.js             # Array shuffle helper function
├── withRoot.js          # Material-UI custom dark theme provider
└── App.js               # Main game state, win detection, and layout
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
