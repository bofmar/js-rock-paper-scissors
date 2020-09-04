JavaScript Rock Paper Scissors
******************************

An Odin Project exercise.
            
            
SPECIFICATIONS
**************
The game is between the user and the computer.
The user can choose rock,paper or scissors by inputting text.
User's input should not be case sensitive.
The computer chooses at random.
The user's choice and computer's choice are evaluated to see who wins
Display the result to the user and prompt him to play again.

Algorithm
*********
    Create a constant array of strings called choices that holds the values of rock, paper and scissors in global
    Declare a keepGoing variable that holds a boolean value.Initialize as true

    The play function:                
        While this variable is true, do the following:
        1. Prompt the user for input and store it in a variable called playerChoice
        2. Have the computer choose and store the choice in a variable called computerChoice
        3. Compare values and announce a winner
        4.Ask if the user wants to play again. Change keepGoing to false if not.
            
    The computerPlay function:
        Choose a random number between 0 and 2.
        Look into choices[] at the position of the random number. Return the content of the array at that position
            
    The playerSelection function:
        Ask the user for input. Store that input in a variable called playerInput
        Validate the input
        If the input is valid return the result
        If the input is invalid tell the user and prompt them again

    The validateInput function
        Take the user's input from playerSelection() and store it in a variable called inputToCompare
        Convert inputToCompare to all caps
        Loop through the choices[] array and compare inputToCompare to each all caps value in the array until a match is found
        If a match is found return true
        If no match is found return false

    The whoWins function
        Take the user's and computer's inputs and compare them.
        Return You won message if player won
        Return You lost message if player lost
        Return tie message if it's a tie

    The keepPlaying function
        Ask user to input y || yes (case insensitive) if he wants to continue or n || no if he doesn't
        If y || yes play another round
        If n || no change keepGoing to false