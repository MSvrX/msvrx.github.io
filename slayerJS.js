let playerName = prompt("Enter your player name", "unknown character");
let character = document.getElementById("character");
character.textContent = `${playerName}'s Life:`;

let monsterType = prompt(
  "Enter the type of monster you are fighting",
  "unknown monster"
);
let monster = document.getElementById("monster");
monster.textContent = `${monsterType}'s Life:`;

const colBtn = document.getElementById("btn");
const giveUp = document.getElementById("btnGiveUp");
const attack = document.getElementById("btnAttack");
const speAttack = document.getElementById("btnSpeAttack");
const heal = document.getElementById("btnHeal");
let playersLife = document.getElementById("playerLife").textContent;
let monstersLife = document.getElementById("monsterLife").textContent;
let currentLifeBar = document.querySelector(".lastingLifePlayer");
let currentMonsterBar = document.querySelector(".lastingLifeMonster");

let pvMax = 100;
let min = 1;
let max = 9;
let speMin = 10;
let speMax = 15;
let healMin = 5;
let healMax = 10;

const newGame = document.getElementById("startGame");
newGame.addEventListener("click", startNewGame);

function startAnotherGame() {
  colBtn.style.display = "none";
  newGame.style.display = "block";
  playersLife = pvMax;
  monstersLife = pvMax;
  monsterType = prompt(
    "Enter the type of monster you are fighting",
    "unknown monster"
  );
  currentLifeBar.style.width = 100 + "%";
  currentMonsterBar.style.width = 100 + "%";
}

function startNewGame() {
  colBtn.style.display = "block";
  newGame.style.display = "none";
}

giveUp.addEventListener("click", runnaway);

function runnaway() {
  colBtn.style.display = "none";
  newGame.style.display = "block";
  alert("You fled far away from the monster like a coward");

  monster.textContent = `${monsterType}'s life`;
  startAnotherGame();
  document.getElementById("playerLife").textContent = pvMax;
  document.getElementById("monsterLife").textContent = pvMax;
}

attack.addEventListener("click", simpleAttack);

function simpleAttack() {
  let playerDammage = Math.floor(Math.random() * (min + max)) + min;
  let monsterDammage = Math.floor(Math.random() * (min + max)) + min;
  console.log(playerDammage, monsterDammage);

  let pvPlayer = Number(playersLife);
  let pvMonster = Number(monstersLife);
  // console.log(typeof pvPlayer, typeof pvMonster);

  playersLife = pvPlayer - monsterDammage;
  monstersLife = pvMonster - playerDammage;
  document.getElementById("playerLife").textContent = playersLife;
  document.getElementById("monsterLife").textContent = monstersLife;
  console.log(playersLife, monstersLife);
  let lifeBar = (playersLife / pvMax) * 100;
  currentLifeBar.style.width = lifeBar + "%";
  let monsterBar = (monstersLife / pvMax) * 100;
  currentMonsterBar.style.width = monsterBar + "%";

  if (playersLife <= 0) {
    alert(`${playerName} died fighting ${monsterType}`);
    startAnotherGame();
    document.getElementById("playerLife").textContent = pvMax;
    document.getElementById("monsterLife").textContent = pvMax;
  }
  if (monstersLife <= 0) {
    alert(`${playerName} defeated ${monsterType}`);
    startAnotherGame();
    document.getElementById("playerLife").textContent = pvMax;
    document.getElementById("monsterLife").textContent = pvMax;
  }
}

speAttack.addEventListener("click", specialAttack);

function specialAttack() {
  let playerDammage = Math.floor(Math.random() * (speMin + speMax)) + max;
  let monsterDammage = Math.floor(Math.random() * (min + max)) + min;
  console.log(playerDammage, monsterDammage);

  let pvPlayer = Number(playersLife);
  let pvMonster = Number(monstersLife);
  // console.log(typeof pvPlayer, typeof pvMonster);

  playersLife = pvPlayer - monsterDammage;
  monstersLife = pvMonster - playerDammage;
  document.getElementById("playerLife").textContent = playersLife;
  document.getElementById("monsterLife").textContent = monstersLife;
  console.log(playersLife, monstersLife);
  let lifeBar = (playersLife / pvMax) * 100;
  currentLifeBar.style.width = lifeBar + "%";
  let monsterBar = (monstersLife / pvMax) * 100;
  currentMonsterBar.style.width = monsterBar + "%";

  if (playersLife <= 0) {
    alert(`${playerName} died fighting ${monsterType}`);
    startAnotherGame();
    document.getElementById("playerLife").textContent = pvMax;
    document.getElementById("monsterLife").textContent = pvMax;
  }
  if (monstersLife <= 0) {
    alert(`${playerName} defeated ${monsterType}`);
    startAnotherGame();
    document.getElementById("playerLife").textContent = pvMax;
    document.getElementById("monsterLife").textContent = pvMax;
  }
}

heal.addEventListener("click", healPlayer);

function healPlayer() {
  let playerHeal = Math.floor(Math.random() * (healMin + healMax)) + healMin;
  let monsterDammage = Math.floor(Math.random() * (min + max)) + min;
  console.log(playerHeal, monsterDammage);

  let pvPlayer = Number(playersLife);
  let pvMonster = Number(monstersLife);
  // console.log(typeof pvPlayer, typeof pvMonster);

  playersLife = pvPlayer + playerHeal - monsterDammage;
  monstersLife = pvMonster;
  document.getElementById("playerLife").textContent = playersLife;
  document.getElementById("monsterLife").textContent = monstersLife;
  console.log(playersLife, monstersLife);
  let lifeBar = (playersLife / pvMax) * 100;
  currentLifeBar.style.width = lifeBar + "%";
  let monsterBar = (monstersLife / pvMax) * 100;
  currentMonsterBar.style.width = monsterBar + "%";

  if (playersLife > 100) {
    alert(`You are full life and don't need anymore heal`);
    document.getElementById("playerLife").textContent = pvMax;
  }
}
