# odin-tic-tac-toe
tic tac toe project from The Odin Project

## what do I need

A Gameboard: An object. a 3x3 array?. Each entry can have 3 states: empty, O, X. 
Game: 
- logic that checks if a winning combination is obtained based on the state of the gameboard, and handles turns
- there are 8 possible winning combinations (for each one of the 2 symbols)
- how many ties are there? -> all the combination where there are no empty cells AND no winning combinations
Players: Objects. name, symbol to use. only 2 players. 

Pills of wisdom useful for this project:
- The DOM should be responsible for reading and displaying the application state to the user and providing an easy-to-use gateway to interact with the methods it needs to.
- The DOM probably doesn't need access to a way of changing which player's turn it is. Instead, it should be able to read whose turn it is as it changes after every round. 