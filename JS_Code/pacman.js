document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const level = document.querySelector(".level");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  // 0 - pellets
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty
  const PELLET_ID = 0;
  const WALL_ID = 1;

  const panels = [];

  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const panel = document.createElement("div");
      level.appendChild(panel);
      panels.push(panel);

      if (layout[i] === PELLET_ID) {
        panels[i].classList.add("pellet");
      } else if (layout[i] === WALL_ID) {
        panels[i].classList.add("wall");
      } else if (layout[i] === 2) {
        panels[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        panels[i].classList.add("power-pellet");
      }
    }
  }
  createBoard();

  let pacmanCurrentIndex = 490;
  panels[pacmanCurrentIndex].classList.add("pac-man");

  //create ghosts
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.isScared = false;
      this.timerId = NaN;

      panels[this.currentIndex].classList.add(this.className);
      panels[this.currentIndex].classList.add("ghost");
    }
  }

  const ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("pinky", 376, 400),
    new Ghost("inky", 351, 300),
    new Ghost("clyde", 379, 500),
  ];

  function movePacman(e) {
    const KEY_LEFT = 37;
    const EXIT_LEFT = 363;
    const EXIT_RIGHT = 391;

    panels[pacmanCurrentIndex].classList.remove("pac-man");

    switch (e.keyCode) {
      case KEY_LEFT:
        if (
          !panels[pacmanCurrentIndex - 1].classList.contains("wall") &&
          !panels[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
        ) { 
          pacmanCurrentIndex -= 1;
        }
        if (panels[pacmanCurrentIndex - 1] === panels[EXIT_LEFT]) {
          pacmanCurrentIndex = EXIT_RIGHT;
        }
        break;
      case 38:
        if (
          !panels[pacmanCurrentIndex - width].classList.contains("wall") &&
          !panels[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= width;
        break;
      case 39:
        if (
          !panels[pacmanCurrentIndex + 1].classList.contains("wall") &&
          !panels[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += 1;
        if (panels[pacmanCurrentIndex + 1] === panels[392]) {
          pacmanCurrentIndex = 364;
        }
        break;
      case 40:
        if (
          !panels[pacmanCurrentIndex + width].classList.contains("wall") &&
          !panels[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += width;
        break;
    }

    panels[pacmanCurrentIndex].classList.add("pac-man");
    eatPellet();
    powerPelletEaten();
    checkForGameOver();
  }
  document.addEventListener("keydown", movePacman);

  function eatPellet() {
    if (panels[pacmanCurrentIndex].classList.contains("pellet")) {
      score++;
      scoreDisplay.innerHTML = score;
      panels[pacmanCurrentIndex].classList.remove("pellet");
    }
  }

  function powerPelletEaten() {
    if (panels[pacmanCurrentIndex].classList.contains("power-pellet")) {
      score += 10;
      scareGhosts();
      setTimeout(unScareGhosts, 10000);
      panels[pacmanCurrentIndex].classList.remove("power-pellet");
    }
  }

  function scareGhosts() {
    ghosts.forEach((ghost) => (ghost.isScared = true))
  }

  function unScareGhosts() {
    ghosts.forEach((ghost) => (ghost.isScared = false));
  }

  function moveGhosts() {
    ghosts.forEach((ghost) => moveGhost(ghost));
  }

  moveGhosts();

  function moveGhost(ghost) {
    const directionsPositive = [+1, width];
    const directionsNegative = [-1, -width];
    let directionPositive =
      directionsPositive[Math.floor(Math.random() * directionsPositive.length)];
    let directionNegative =
      directionsNegative[Math.floor(Math.random() * directionsNegative.length)];

    ghost.timerId = setInterval(function () {
      if (pacmanCurrentIndex < ghost.currentIndex) {
        const isGhost = !panels[ghost.currentIndex + directionPositive].classList.contains("ghost");
        if (
          isGhost &&
          !panels[ghost.currentIndex + directionPositive].classList.contains(
            "wall"
          )
        ) {
          panels[ghost.currentIndex].classList.remove(ghost.className);
          panels[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
          ghost.currentIndex += directionPositive;
          panels[ghost.currentIndex].classList.add(ghost.className, "ghost");
        }
      } else if (pacmanCurrentIndex > ghost.currentIndex) {
        if (
          !panels[ghost.currentIndex + directionNegative].classList.contains(
            "ghost"
          ) &&
          !panels[ghost.currentIndex + directionNegative].classList.contains(
            "wall"
          )
        ) {
          panels[ghost.currentIndex].classList.remove(ghost.className);
          panels[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
          ghost.currentIndex += directionNegative;
          panels[ghost.currentIndex].classList.add(ghost.className, "ghost");
        } else directionNegative;
      }

      if (
        ghost.isScared &&
        !panels[ghost.currentIndex].classList.contains("ghost-lair")
      ) {
        panels[ghost.currentIndex].classList.add("scared-ghost");
      }

      //scared ghost vs. pacman
      if (
        ghost.isScared &&
        panels[ghost.currentIndex].classList.contains("pac-man")
      ) {
        panels[ghost.currentIndex].classList.remove(
          ghost.className,
          "ghost",
          "scared-ghost"
        );
        ghost.currentIndex = ghost.startIndex;
        score += 100;
        setTimeout(() => {
          panels[ghost.currentIndex].classList.add(ghost.className, "ghost");
        }, 5000);
      }
      checkForGameOver();
    }, ghost.speed);
  }

  function checkForGameOver() {
    if (
      panels[pacmanCurrentIndex].classList.contains("ghost") &&
      !panels[pacmanCurrentIndex].classList.contains("scared-ghost")
    ) {
      gameOver("Game Over");
    }
    if (score === 274) {
      gameOver("You have WON!");
    }
  }

  function gameOver(msg) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keyup", movePacman);
    setTimeout(function () {
      alert(msg);
    }, 500);
  }
}