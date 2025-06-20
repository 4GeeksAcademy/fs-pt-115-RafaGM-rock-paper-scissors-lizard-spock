 // juego en consola con js

 const choose = ["piedra" , "papel" , "tijera" , "lagarto" , "spock"];
 
 const getRandomChoose = () => {
    const choosing = Math.floor(Math.random() * 5);
    return choose[choosing]
 }

 const checkChooseGuess = (userGuess) => {
     const cpuchoose = getRandomChoose()
    
     console.log(`You guessed ${userGuess}`);
     console.log(`Cpu choose ${cpuchoose}`);

     
    if (userGuess === "piedra" && (cpuchoose === "tijera" || cpuchoose === "lagarto")){
        console.log("Ganas");
    }else if (userGuess === "papel" && (cpuchoose === "piedra" || cpuchoose === "spock")){
        console.log("Ganas");
    }else if (userGuess === "tijera" && (cpuchoose === "papel" || cpuchoose === "lagarto")){
        console.log("Ganas");
    }else if (userGuess === "lagarto" && (cpuchoose === "papel" || cpuchoose === "spock")){
        console.log("Ganas");
    }else if (userGuess === "spock" && (cpuchoose === "tijera" || cpuchoose === "piedra")){
        console.log("Ganas");
    }else if (userGuess === cpuchoose){
        console.log("Empate");
    }else {
        console.log("Pierdes");
 }
}
const guess = prompt("Usuario elige a: piedra , papel , tijera , lagarto , spock").toLowerCase()
checkChooseGuess(guess)