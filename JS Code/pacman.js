document.addEventListener("DOMContentLoaded", () => {

  const scoreDisplay = document.getElementById("score")
  const width = 28
  let score = 0
  let counter = 1
  const level = document.querySelector(".level")
  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
  // 0 - pellets
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  const panels = []

  //create your board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const panel = document.createElement("div")
      level.appendChild(panel)
      panels.push(panel)

      if(layout[i] === 0) {
        panels[i].classList.add("pellet")
      } else if (layout[i] === 1) {
        panels[i].classList.add("wall")
      } else if (layout[i] === 2) {
        panels[i].classList.add("ghost-lair")
      } else if (layout[i] === 3) {
        panels[i].classList.add("power-pellet")
      }
    }
  }
  createBoard()

  let pacmanCurrentIndex = 490
  panels[pacmanCurrentIndex].classList.add("pac-man")

//create ghosts
  class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
  }
  
  ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("pinky", 376, 400),
    new Ghost("inky", 351, 300),
    new Ghost("clyde", 379, 500)
  ]
  
//draw ghosts
  ghosts.forEach(ghost => {
    panels[ghost.currentIndex].classList.add(ghost.className)
    panels[ghost.currentIndex].classList.add("ghost")
  })
  

  //move pacman
  function movePacman(e) {
    panels[pacmanCurrentIndex].classList.remove("pac-man")
    switch(e.keyCode) {
    case 37:
      if(
        !panels[pacmanCurrentIndex -1].classList.contains("wall") &&
        !panels[pacmanCurrentIndex -1].classList.contains("ghost-lair")
        )
      pacmanCurrentIndex -= 1
      if (panels[pacmanCurrentIndex -1] === panels[363]) {
        pacmanCurrentIndex = 391
      }
      break
    case 38:
      if(
        !panels[pacmanCurrentIndex -width].classList.contains("wall") &&
        !panels[pacmanCurrentIndex -width].classList.contains("ghost-lair")
        ) 
      pacmanCurrentIndex -= width
      break
    case 39:
      if(
        !panels[pacmanCurrentIndex +1].classList.contains("wall") &&
        !panels[pacmanCurrentIndex +1].classList.contains("ghost-lair")
      )
      pacmanCurrentIndex += 1
      if (panels[pacmanCurrentIndex +1] === panels[392]) {
        pacmanCurrentIndex = 364
      }
      break
    case 40:
      if (
        !panels[pacmanCurrentIndex +width].classList.contains("wall") &&
        !panels[pacmanCurrentIndex +width].classList.contains("ghost-lair")
      )
      pacmanCurrentIndex += width
      break
    }
    panels[pacmanCurrentIndex].classList.add("pac-man")
    palletEaten()
    powerPelletEaten()
    checkForGameOver()
  }
  document.addEventListener("keydown", movePacman)

  function palletEaten() {
    if (panels[pacmanCurrentIndex].classList.contains("pellet")) {
      score++
      scoreDisplay.innerHTML = score
      panels[pacmanCurrentIndex].classList.remove("pellet")
    }
  }

  function powerPelletEaten() {
    if (panels[pacmanCurrentIndex].classList.contains("power-pellet")) {
      score +=10
      ghosts.forEach(ghost => ghost.isScared = true)     
      setTimeout(unScareGhosts, 10000)
      setTimeout(restartCounter, 10000)
      panels[pacmanCurrentIndex].classList.remove("power-pellet")
    }
  }

  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }

  function restartCounter(){
    counter = 1;
  }
  //move the Ghosts 
  ghosts.forEach(ghost => moveGhost(ghost))

  function moveGhost(ghost) {
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {
      if  (!panels[ghost.currentIndex + direction].classList.contains("ghost") &&
          !panels[ghost.currentIndex + direction].classList.contains("wall") ) {
              panels[ghost.currentIndex].classList.remove(ghost.className)
              panels[ghost.currentIndex].classList.remove("ghost", "scared-ghost")
              ghost.currentIndex += direction
              panels[ghost.currentIndex].classList.add(ghost.className, "ghost")
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      if (ghost.isScared && !panels[ghost.currentIndex].classList.contains("ghost-lair")) {
        panels[ghost.currentIndex].classList.add("scared-ghost")
      }
      
      //scared ghost vs. pacman
      if(ghost.isScared && panels[ghost.currentIndex].classList.contains("pac-man")) {
        panels[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
        ghost.currentIndex = ghost.startIndex
        score +=400*counter
        counter++
        setTimeout(()=>{panels[ghost.currentIndex].classList.add(ghost.className, "ghost")}, 5000)
      }
      checkForGameOver()
    }, ghost.speed)
  }


//End Game
  function checkForGameOver() {
    if (panels[pacmanCurrentIndex].classList.contains("ghost") &&
      !panels[pacmanCurrentIndex].classList.contains("scared-ghost")) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener("keyup", movePacman)
      setTimeout(function(){ alert("Game Over"); }, 500)
    }
    if (!panels.classList.contains("pellet")) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener("keyup", movePacman)
      setTimeout(function(){ alert("You have WON!"); }, 500)
    }
  }

})

