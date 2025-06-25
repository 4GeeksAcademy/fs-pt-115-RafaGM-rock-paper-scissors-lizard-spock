// juego en consola con js

const choose = ["piedra", "papel", "tijera", "lagarto", "spock"];
const guess = prompt("Usuario elige a: piedra , papel , tijera , lagarto , spock").toLowerCase();

const getRandomChoose = () => {
	const choosing = Math.floor(Math.random() * choose.length);
	return choose[choosing]
}

const checkChooseGuess = (userGuess) => {
	const cpuchoose = getRandomChoose()

	console.log(`You guessed ${userGuess}`);
	console.log(`Cpu choose ${cpuchoose}`);

	const winner = ["piedra-tijeras", "piedra-lagarto", "papel-piedra", "papel-spock", "tijera-papel", "tijera-lagarto", "lagarto-papel", "lagarto-spock", "spock-tijera", "spock-piedra"];
	const play = guess + "-" + cpuchoose;
	if (guess === cpuchoose) console.log("Empate");
	else if (winner.includes(play)) console.log("Ganas");
	else console.log("Pierdes");



	// if (userGuess === cpuchoose) {
	// 	console.log("Empate");
	// } else if (userGuess === "piedra" && (cpuchoose === "tijera" || cpuchoose === "lagarto")) {
	// 	console.log("Ganas");
	// } else if (userGuess === "papel" && (cpuchoose === "piedra" || cpuchoose === "spock")) {
	// 	console.log("Ganas");
	// } else if (userGuess === "tijera" && (cpuchoose === "papel" || cpuchoose === "lagarto")) {
	// 	console.log("Ganas");
	// } else if (userGuess === "lagarto" && (cpuchoose === "papel" || cpuchoose === "spock")) {
	// 	console.log("Ganas");
	// } else if (userGuess === "spock" && (cpuchoose === "tijera" || cpuchoose === "piedra")) {
	// 	console.log("Ganas");
	// } else {
	// 	console.log("Pierdes");
	// }
}
checkChooseGuess(guess)