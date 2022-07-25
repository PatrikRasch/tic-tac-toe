const gameboard = (function () {
    let playingField = [
        ["X", "X", "O"],
        ["O", "O", "O"],
        ["X", "O", "X"]
    ];
    return {
        playingField
    }
})();



const renderGameboard = (function () {
    publicMethod = function (testie) {
        const gameboard = document.querySelector(".gameboard");
        for (i = 1; i <= 9; i++) {
            const spot = document.createElement("div");
            spot.id = i;
            spot.textContent = spot.id
            gameboard.append(spot);
        }
        // const spot1 = gameboard.playingField[0][0];
        // const spot2 = gameboard.playingField[0][1];
        // const spot3 = gameboard.playingField[0][2];
        // const spot4 = gameboard.playingField[1][0];
        // const spot5 = gameboard.playingField[1][1];
        // const spot6 = gameboard.playingField[1][2];
        // const spot7 = gameboard.playingField[2][0];
        // const spot8 = gameboard.playingField[2][1];
        //     // const spot9 = gameboard.playingField[2][2];

        //     document.createElement(spot1, spot2, spot3);
        //     document.createElement(spot4, spot5, spot6);
        //     document.createElement(spot7, spot8, spot9);

        //     document.body.append(spot1, spot2, spot3);
        //     document.body.append(spot4, spot5, spot6);
        //     document.body.append(spot7, spot8, spot9);
    }
    return { publicMethod }
}
)();

const testie = renderGameboard.publicMethod("dug");
// classAdd.classList.add("bruh")

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

// const gameplay = {

// }


// 2. You're going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects. and you're probably going to want an object to control the flow of the game itself.

// 2. a) Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

// 3. Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage(for now you can just manually fill in the array with "X"s and "O"s)

// 4. Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!

// 4. a)Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!



// Factory functions are fucking cool compared to regular objects because users can't just
// overwrite any of the object items when they want.

