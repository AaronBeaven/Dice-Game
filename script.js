//attempt to create a random mumber variable between 1 and 6 
// declaring all the variables and finding all the elements i need 
let pointsscored = 0 
let numberRolled 
const diceImage = document.getElementById ("diceImage")
const Roll = document.getElementById("Roll")
const currentsScore = document.getElementById("currentScore")
const totalScore = document.getElementById("totalScore")
// making the second player
 const playerTwoDiceImage = document.getElementById("playerTwoDiceImage")
 const playerTwoDiceRoll = document.getElementById("playerTwoDiceRoll")
 const playerTwoCurrentScore = document.getElementById("playerTwoCurrentScore")
 const playerTwoTotalScore = document.getElementById("playerTwoTotalScore")
 let playerTwoNumberRolled
 let playerTwoPointsScored = 0
//
const p1WinsA = document.getElementById("p1Wins")
const p2WinsA = document.getElementById("p2Wins")
const p1OnesA = document.getElementById("p1Ones")
const p1TwosA = document.getElementById("p1Twos")
const p1ThreesA = document.getElementById("p1Threes")
const p1FoursA = document.getElementById("p1Fours")
const p1FivesA = document.getElementById("p1Fives")
const p1SixA = document.getElementById("p1Sixs")
//

const p2OnesA = document.getElementById("p2Ones")
const p2TwosA = document.getElementById("p2Twos")
const p2ThreesA = document.getElementById("p2Threes")
const p2FoursA = document.getElementById("p2Fours")
const p2FivesA = document.getElementById("p2Fives")
const p2SixA = document.getElementById("p2Sixs")


// declaring the player ones stats
let p1Wins =0;
let p1Ones = 0;
let p1Twos = 0;
let p1Threes = 0;
let p1Four = 0;
let p1Five = 0; 
let p1Six = 0;
// declare player twos stats 
let p2Wins =0;
let p2Ones = 0;
let p2Twos = 0;
let p2Threes = 0;
let p2Four = 0;
let p2Five = 0; 
let p2Six = 0;

// random number generator between 1 and 6 then after that pulls up the image relevent to the  number which comes up
const diceRoll = ()=> {
     numberRolled = Math.ceil(Math.random()  * 6)
    // console.log(`dice roll ${numberRolled}`)
    switch(numberRolled){
        case 1:
        diceImage.src = "img/dice1.png";
        break;
        case 2:
        diceImage.src = "img/dice2.png";
        p1Twos += 0
        p1TwosA.textContent = p1Twos +=1;
        break;
        case 3:
        diceImage.src = "img/dice3.png";
        p1Threes += 0
        p1ThreesA.textContent = p1Threes +=1;
        break;
        case 4:
        diceImage.src = "img/dice4.png";
        p1Four += 0
        p1FoursA.textContent = p1Four +=1;
        break;
        case 5:
        diceImage.src = "img/dice5.png";
        p1Five += 0
        p1FivesA.textContent = p1Five +=1;
        break;
        case 6:
        diceImage.src = "img/dice6.png";
        p1Six += 0
        p1SixA.textContent = p1Six +=1;
        break;
    }
}

// this is the function which either decides whether the user wins by reaching 21 or looses by rolling a numebr one 

const winOrLose = ()=>{

    if (numberRolled == 1){
        alert ("ha ha you loose");
        pointsscored = 0;
        p1OnesA.textContent = p1Ones +=1;
    } else if(pointsscored>= 20){
        alert("how did you win did you cheat");
        pointsscored = 0;
        p1Wins += 1
        p1WinsA.textContent = p1Wins
    }

     else{
        console.log ("carry on ");
    }
}




// making Player Two Function 

const playerTwoRoll = ()=> {
    playerTwoNumberRolled = Math.ceil(Math.random()  * 6)
    console.log(`dice roll ${playerTwoNumberRolled}`)

    
   switch(playerTwoNumberRolled){
       case 1:
       playerTwoDiceImage.src = "img/dice1.png";
    
       break;
       case 2:
       playerTwoDiceImage.src = "img/dice2.png";
       p2TwosA.textContent = p2Twos +=1;
       break;
       case 3:
       playerTwoDiceImage.src = "img/dice3.png";
       p2ThreesA.textContent = p2Threes +=1;
       break;
       case 4:
       playerTwoDiceImage.src = "img/dice4.png";
       p2FoursA.textContent = p2Four +=1;
       break;
       case 5:
       playerTwoDiceImage.src = "img/dice5.png";
       p2FivesA.textContent = p2Five +=1;
       break;
       case 6:
       playerTwoDiceImage.src = "img/dice6.png";
       p2SixA.textContent = p2Six +=1;
       break;
   }
}

const playerTwoWinOrLose = ()=>{
    if (playerTwoNumberRolled == 1){
        alert ("ha ha you loose");
        playerTwoPointsScored = 0;
        p2Ones +=0;
        p2OnesA.textContent = p2Ones +=1;
    } else if(playerTwoPointsScored>= 20){
        alert("how did you win did you cheat");
        playerTwoPointsScored = 0;
        p2Wins += 1;
        p2WinsA.textContent = p2Wins
    }else{
        console.log ("carry on ");
    }
}

totalScore.addEventListener("click", ()=>{
    
    diceRoll()
    pointsscored += numberRolled;
    console.log(`Points Scored ${totalScore}`)
})
currentsScore.addEventListener("click", ()=>{
    winOrLose()
})
// adding the function to make the Roll button work
Roll.addEventListener("click", ()=>{
diceRoll()
currentsScore.textContent = numberRolled
totalScore.textContent = pointsscored += numberRolled
winOrLose()
})

playerTwoDiceRoll.addEventListener("click", ()=>{
    playerTwoRoll()
    playerTwoCurrentScore.textContent = playerTwoNumberRolled
    playerTwoTotalScore.textContent = playerTwoPointsScored += playerTwoNumberRolled;
    playerTwoWinOrLose()
 })

 

