# 🧩 Memory Game - React

> A modern React-based card matching game featuring time & move tracking, a confetti celebration, and smooth responsive design!

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)

## 🔍 Project Overview

The **Memory Game** project is a fun and interactive card-matching game where users must find and match identical card pairs.  
This version is built with React to offer a more modular, performant, and user-friendly experience.

![image](https://github.com/user-attachments/assets/cf55d9be-2bab-4a33-931f-e8a82f8dc24e)

## 🚀 Core Features

### 🔄 Card Shuffling & Dynamic Rendering
- At the start of the game, all cards are shuffled using a `shuffle()` function.
- Each card is duplicated to create pairs.
- A new randomized card layout is generated with every new game.

![image](https://github.com/user-attachments/assets/afa2fba1-1f07-407a-ae64-4de2a744e91d)

### 🧠 Selection & Match Checking
- Selected cards are stored in the `selectedCards` state.
- Matched pairs are stored in `matchedCards`.
- When two cards are selected, a match check is triggered and cards visually flip open or closed accordingly.

![image](https://github.com/user-attachments/assets/fbc0ebde-a0d8-414e-8528-3a3939955733)

### ⏱️ Time & Move Tracking
- A **timer** starts automatically when the game begins.
- Elapsed time is formatted as (MM:SS) and shown to the player.
- Every two card selections count as one **move**, which is also tracked in real-time.

![image](https://github.com/user-attachments/assets/358802f4-7adf-47a6-8785-25f90322dbbb)

### 🧩 Game Over & Modal Control
- When all card pairs are matched, the game ends automatically and a “Game Over” message appears.
- On mobile, a modal with 3 action options appears:
  - **Restart:** Resets the game.
  - **New Game:** Starts a new game with reshuffled cards.
  - **Resume Game:** Closes modal and continues the current game.

![image](https://github.com/user-attachments/assets/bdee2d53-9638-4bd8-ba92-45af2e1e7db0)

### 🎉 Confetti Celebration Animation
- When all cards are matched, a **confetti celebration** animates across the screen!
- Implemented using the `react-confetti` package.
- The animation continues until the user clicks **Restart** or **New Game**.

![image](https://github.com/user-attachments/assets/5b9f703d-7450-478b-90f8-26b54f7bf48e)

### 🖥️ Responsive & Mobile-Friendly Design
- Fully responsive design to ensure a smooth experience across all devices.
- Optimized for both mobile and desktop usage.

### 🔐 Modal Dismissal on Outside Click
- Modals automatically close when users click outside their bounds.
- This feature improves UX and is handled using `useRef` and the `mousedown` event listener.

## 💡 Development Goals

- Build a modular and maintainable game using core React features  
- Provide visual feedback to reflect user progress and success  
- Track time and move counts to help users monitor performance  
- Ensure full responsiveness across screen sizes and devices  
- Celebrate user success with visual animations and interactions  

## 🛠️ Technologies Used

- React  
- JavaScript (ES6+)  
- CSS3  
- react-confetti  
- useRef + useEffect (modal handling)  
- Responsive Design (Flexbox, Media Queries)

🟢 **Live Demo:**  
🔗 [https://memory-game-react-khaki.vercel.app](https://memory-game-react-khaki.vercel.app)

## 📂 Project Structure

```bash
📁 public                   # Static assets  
📁 src                      # Source code  
 ┣ 📁 assets                
 ┃ ┗ 📁 css                 # Styles (theme, reset, layout)
 ┃   ┣ 📄 main.css         
 ┃   ┗ 📄 reset.css        
 ┣ 📁 components            # React components  
 ┃ ┣ 📄 Footer.jsx          # Footer (time, moves, game status)
 ┃ ┣ 📄 Header.jsx          # Header (title, restart/menu buttons)
 ┃ ┣ 📄 MemoryChart.jsx     # Game area rendering cards
 ┃ ┗ 📄 ModalPage.jsx       # Modal component (restart, new, resume)
 ┣ 📄 App.jsx               # Main application logic  
 ┣ 📄 main.jsx              # React DOM entry point  
📄 .gitignore               # Git ignore rules  
📄 README.md                # Project documentation  
📄 eslint.config.js         # Linter configuration  
📄 package.json             # Project dependencies and scripts  
📄 package-lock.json        # Dependency lock file  
