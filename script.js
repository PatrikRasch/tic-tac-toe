const gameboard = (function () {
    let playingField = [
        "", "", "", "", "", "", "", "", ""
    ];
    return { playingField }
})();

const plays = gameboard.playingField;

const gameboardContainer = document.querySelector(".gameboard-container");
const board = document.querySelector(".gameboard");

const modalbg = document.querySelector(".modal-bg")
const modal = document.querySelector(".modal")

const acceptLoss = document.querySelector(".acceptLoss")
const negotiate = document.querySelector(".negotiate")

const renderGameboard = (function () {
    function addElements() {
        for (i = 0; i < plays.length; i++) {
            const temp = document.createElement("div");
            temp.textContent = ""
            plays[i] = temp.textContent;
            temp.id = (plays[i] + (i + 1));
            board.appendChild(temp);
            temp.classList.add("spot");
        }
    }
    return { addElements: addElements }
})();

const game = (function () {
    function boardClicked() {
        let yourTurn = true;

        const cardClicked = () => {
            for(i=0; i<9; i++) {
                board.children[i].classList.remove("x")
                board.children[i].classList.remove("o")
                board.children[i].classList.remove("disabled")
            }
            modalbg.classList.remove("bg-active")
            modal.classList.remove("modal-active")
        }

        board.addEventListener("click", (e) => {
            if (e.target.classList.contains("disabled")) { return }
            if (yourTurn == true) {
                e.target.classList.add("x")
                e.target.classList.add("disabled")
                yourTurn = false;
            } else {
                e.target.classList.add("o")
                e.target.classList.add("disabled")
                yourTurn = true;
            }

            winTest = (a,b,c, player) => {
            if(board.children[a].classList.contains(player) && board.children[b].classList.contains(player) && board.children[c].classList.contains(player) )
              {  
                console.log(player + " wins")
                modalbg.classList.add("bg-active")
                modal.classList.add("modal-active")

                acceptLoss.addEventListener("click", (e) => {
                    cardClicked();
                })
                negotiate.addEventListener("click", (e) => {
                    alert("sad")
                    cardClicked();
                })
            } }

            winTest(0,1,2, "x")
            winTest(3,4,5, "x")
            winTest(6,7,8, "x")
            winTest(0,3,6, "x")
            winTest(1,4,7, "x")
            winTest(2,5,8, "x")
            winTest(0,4,8, "x")
            winTest(2,4,6, "x")

            winTest(0,1,2, "o")
            winTest(3,4,5, "o")
            winTest(6,7,8, "o")
            winTest(0,3,6, "o")
            winTest(1,4,7, "o")
            winTest(2,5,8, "o")
            winTest(0,4,8, "o")
            winTest(2,4,6, "o")
        })
    }
    return { boardClicked: boardClicked }
})();

game.boardClicked();

const playerFactory = (name, number) => {
    return {
        name,
        number,
        greetPlayer() {
            console.log("Hello " + name + ". You are player " + number);
        }
    }
};

const player1 = playerFactory("Patrik", 1);
player1.greetPlayer();

const player2 = playerFactory("Annabelle", 2);
player2.greetPlayer();

const playerClicks = (player1, player2) => {

}

const renderedGameboard = renderGameboard.addElements();






// console.log(renderGameboard.addElements);
// const gameboard = document.querySelector(".gameboard");
// for (i = 1; i <= 9; i++) {
// const spot = document.createElement("div");
// spot.id = i;
// const spotInfo = spot.textContent = Math.random() < 0.5 ? "X" : "O";
// console.log(spotInfo)
// gameboard.append(spot);
// spot.classList.add("spot")

// document.body.appendChild(document.createElement("div"))

// const renderGameboard = (function () {
//     render = function () {
//         const gameboard = document.querySelector(".gameboard");
//         for (i = 1; i <= 9; i++) {
//             const spot = document.createElement("div");
//             spot.id = i;
//             const spotInfo = spot.textContent = Math.random() < 0.5 ? "X" : "O";
//             // console.log(spotInfo)
//             gameboard.append(spot);
//             spot.classList.add("spot")
//         }
//     }
//     return { render }
// }
// )();
// renderGameboard.render();

// Factory functions are fucking cool compared to regular objects because users can't just
// overwrite any of the object items if they want to.