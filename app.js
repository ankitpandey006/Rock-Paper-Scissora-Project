let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const gencomputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drowGame = () => {
    msg.innerText = "Game Drow . play again"
    msg.style.backgroundColor = "#00021d";
}
const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win ! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = " Green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lost. ! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = " Red";
    }
}
const playGame = (userchoice) => {
    console.log("userchoice = ", userchoice);
    // generate computer choice
    const compchoice = gencomputerchoice();
    console.log("compchoice = ", compchoice);
    if (userchoice === compchoice) {
        drowGame();
        //Drow gamw
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});