// add map for computer to choice
const choiceMap = new Map();
choiceMap.set(0, 'Rock');
choiceMap.set(1, 'Scissor');
choiceMap.set(2, 'Paper');

// this function will return 1 if player win, 0 if draws, -1 if player lose
function playRound (playerChoice, computerChoice)
{

	if (playerChoice.toLowerCase() === choiceMap.get(computerChoice).toLowerCase())
	{
		return 0;
	}

	else if (playerChoice.toLowerCase() === "scissor" && choiceMap.get(computerChoice).toLowerCase() === "paper" || 
				playerChoice.toLowerCase() === "paper" && choiceMap.get(computerChoice).toLowerCase() === "rock" || 
				playerChoice.toLowerCase() === "rock" && choiceMap.get(computerChoice).toLowerCase() === "scissor")
	{
		return 1;
	}

	else if (playerChoice.toLowerCase() === "scissor" && choiceMap.get(computerChoice).toLowerCase() === "rock" || 
				playerChoice.toLowerCase() === "paper" && choiceMap.get(computerChoice).toLowerCase() === "scissor" || 
				playerChoice.toLowerCase() === "rock" && choiceMap.get(computerChoice).toLowerCase() === "paper")
	{
		return -1;
	}
}

function game()
{
	let computerScore = 0;
	let playerScore = 0;


	for(let i = 0; i<5; i++)
	{
		// computer choice
		// generate random number from 0-2 to get value in map
		let getComputerChoice = Math.floor(Math.random()*1000000)%3;
		let getPlayerChoice = prompt(`Current Score: \nComputer:${computerScore}\nPlayer:${playerScore}\nRock/Scissor/Paper?`);

		//1 if player win, 0 if draws, -1 if player lose
		if (playRound(getPlayerChoice, getComputerChoice) === 1)
		{
			playerScore++;
			alert("Congrats! You win!");
			alert(`New score:\nComputer:${computerScore}\nPlayer:${playerScore}`);
		}

		else if (playRound(getPlayerChoice, getComputerChoice) === -1)
		{
			computerScore++;
			alert("BoOoOo0! NOOB! YOU LOSE!");
			alert(`New score:\nComputer:${computerScore}\nPlayer:${playerScore}`);
		}

		else if (playRound(getPlayerChoice, getComputerChoice) === 0)
		{
			playerScore++;
			computerScore++;
			alert("Draw!");
			alert(`New score:\nComputer:${computerScore}\nPlayer:${playerScore}`);
		}

	}

	if (playerScore > computerScore)
	{
		alert("Didn't expect that");
		alert(`Final score:\nComputer:${computerScore}\nPlayer:${playerScore}`);
	}

	else if (playerScore == computerScore)
	{
		alert(":|");
		alert(`Final score:\nComputer:${computerScore}\nPlayer:${playerScore}`);
	}

	else
	{
		alert("Go cry!");
		alert(`Final score:\nComputer:${computerScore}\nPlayer:${playerScore}`);
	}


};

let start = confirm("Do you want to play the game?");

if (start == true)
{
	game();
}
else
{
	alert("          >;(          ")
}

