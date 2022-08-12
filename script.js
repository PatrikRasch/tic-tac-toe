const gameboard = (function () {
    let playingField = [
        "", "", "", "", "", "", "", "", ""
    ];
    return { playingField }
})();

const plays = gameboard.playingField;

// let bro = plays.map(function (_, i) {
//     let el = document.createElement("div");
//     el.textContent = plays.splice(i, 1, i + 1);
//     return el;
// })
// document.body.append(bro.el)

// let el = document.createElement("div");
// el.textContent = plays.splice(i, 1, i + 1);
// console.log(el.textContent);
// return el;

const gameboardContainer = document.querySelector(".gameboard-container");
const board = document.querySelector(".gameboard");
// gameboardContainer.append(board)

const renderGameboard = (function () {
    function addElements() {
        for (i = 0; i < plays.length; i++) {
            const temp = document.createElement("div");
            temp.textContent = ""
            // Math.random() < 0.5 ? "X" : "O";
            plays[i] = temp.textContent;
            temp.id = ("id-text" + plays[i] + (i + 1));
            board.appendChild(temp);
            // temp.classList.add("gameboard");
            temp.classList.add("spot");
            temp.addEventListener("click", (e) => {
                console.log(temp.id)
            })
        }
        console.log(plays);
        // return numberedArray
    }
    return { addElements: addElements, }
})();

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


// for (var i = 0; i < imageArray.length; i++) {
//     (function(index) {
//          imageArray[index].addEventListener("click", function() {
//             console.log("you clicked region number " + index);
//           })
//     })(i);
//  }


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

const gameboardClicked = (function () {
    clicked = function () {

    }
})();

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


// 2. You're going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects. and you're probably going to want an object to control the flow of the game itself.

// 2. a) Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

// 3. Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage(for now you can just manually fill in the array with "X"s and "O"s)

// 4. Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!

// 4. a)Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!


// Factory functions are fucking cool compared to regular objects because users can't just
// overwrite any of the object items when they want.

