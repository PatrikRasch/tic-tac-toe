const gameboard = (function () {
  let playingField = ["", "", "", "", "", "", "", "", ""];
  return { playingField };
})();

const plays = gameboard.playingField;

const gameboardContainer = document.querySelector(".gameboard-container");
const board = document.querySelector(".gameboard");

const modalbg = document.querySelector(".modal-bg");
const modal = document.querySelector(".modal");
const modalCall = document.querySelector(".modalCall");
const playAgain = document.querySelector(".playAgain");

const player1form = document.querySelector(".player1form");
const player2form = document.querySelector(".player2form");

const player1score = document.querySelector(".player1score");
const player2score = document.querySelector(".player2score");
player1score.textContent = 0;
player2score.textContent = 0;

const restartGame = document.querySelector(".restart");

const renderGameboard = (function () {
  function addElements() {
    for (i = 0; i < plays.length; i++) {
      const temp = document.createElement("div");
      temp.textContent = "";
      plays[i] = temp.textContent;
      temp.id = plays[i] + (i + 1);
      board.appendChild(temp);
      temp.classList.add("spot");
    }
  }
  return { addElements: addElements };
})();

const game = (function () {
  function boardClicked() {
    let yourTurn = true;
    let tieCounter = 0;

    board.addEventListener("click", (e) => {
      if (player1form.value === "" || player2form.value === "") {
        alert("Name your players");
        return;
      }

      tieCounter += 1;
      if (tieCounter === 9) {
        modalbg.classList.add("bg-active");
        modal.classList.add("modal-active");
        modalCall.textContent = "It's a Tie";
        playAgain.addEventListener("click", (e) => {
          for (i = 0; i < 9; i++) {
            board.children[i].classList.remove("x", "o", "disabled");
          }
          modalbg.classList.remove("bg-active");
          modal.classList.remove("modal-active");
        });
      }
      if (e.target.classList.contains("disabled")) {
        return;
      }
      if (yourTurn == true) {
        e.target.classList.add("x");
        e.target.classList.add("disabled");
        yourTurn = false;
      } else {
        e.target.classList.add("o");
        e.target.classList.add("disabled");
        yourTurn = true;
      }
      winTest = (a, b, c, player) => {
        if (
          board.children[a].classList.contains(player) &&
          board.children[b].classList.contains(player) &&
          board.children[c].classList.contains(player)
        ) {
          modalbg.classList.add("bg-active");
          modal.classList.add("modal-active");
          if (player === "x") {
            modalCall.textContent = player1form.value + " wins for the US!";
            player1score.textContent++;
          } else {
            modalCall.textContent = player2form.value + " wins for Russia!";
            player2score.textContent++;
          }
          let usSong = new Audio("audio/usSong.mov");
          let russiaSong = new Audio("audio/russiaSong.mov");
          let trumpSpeaking = new Audio("audio/trumpSpeaking.mov");
          let russianSpeaking = new Audio("audio/russianSpeaking.mov");
          let weGotHim = new Audio("audio/weGotHim.mov");
          let usAnthem = new Audio("audio/usAnthem.mov");

          if (!modalCall.textContent.includes("Russia")) {
            russianSpeaking.play();
            setTimeout(() => {
              weGotHim.play();
            }, 1200);
            setTimeout(() => {
              usAnthem.play();
            }, 1500);
          } else {
            trumpSpeaking.play();
            setTimeout(() => {
              russiaSong.play();
            }, 1500);
          }

          tieCounter = 0;
          playAgain.addEventListener("click", (e) => {
            cardClicked();
          });
        }
      };
      winTest(0, 1, 2, "x");
      winTest(0, 1, 2, "o");
      winTest(3, 4, 5, "x");
      winTest(3, 4, 5, "o");
      winTest(6, 7, 8, "x");
      winTest(6, 7, 8, "o");
      winTest(0, 3, 6, "x");
      winTest(0, 3, 6, "o");
      winTest(1, 4, 7, "x");
      winTest(1, 4, 7, "o");
      winTest(2, 5, 8, "x");
      winTest(2, 5, 8, "o");
      winTest(0, 4, 8, "x");
      winTest(0, 4, 8, "o");
      winTest(2, 4, 6, "x");
      winTest(2, 4, 6, "o");
    });
  }

  const cardClicked = () => {
    for (i = 0; i < 9; i++) {
      board.children[i].classList.remove("x", "o", "disabled");
    }
    modalbg.classList.remove("bg-active");
    modal.classList.remove("modal-active");
  };

  function fade() {
    Audio.volume -= 0.05;
    setTimeout(fade, 200);
  }

  return { boardClicked: boardClicked };
})();

game.boardClicked();

const playerFactory = (name, number) => {
  return {
    name,
    greetPlayer() {
      console.log("Hello " + name + ". You are player " + number);
    },
  };
};

const player1 = playerFactory("Patrik");
player1.greetPlayer();

const player2 = playerFactory("Annabelle");
player2.greetPlayer();

const playerClicks = (player1, player2) => {};

const renderedGameboard = renderGameboard.addElements();

restartGame.addEventListener("click", (e) => {
  player1score.textContent = 0;
  player2score.textContent = 0;
  player1form.value = "";
  player2form.value = "";
});

// Factory functions are fucking cool compared to regular objects because users can't just
// overwrite any of the object items if they want to.
