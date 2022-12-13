# Project Architecture

Purpose of the project:
Create a Calculator app in React using components and instead of using a Math library / API, understand the logics and methodologies that stand behind the program, while being exposed to JS functionalities I am unfamiliar with.

App.js serves as the root file for the web app, it contains the HTML structure in JSX and necessary JS functions to make the calculator itself work.

ACTIONS contain properties that refer to actions that the calculator is capable of performing, and is then called within the 'function reducer' (etc..) function(s) in a 'switch(type)' method for an organized look across the available functions.
For example, ADD_DIGIT ACTION will take the currentOperand (for example 1234) and when a new number is clicked (for example 5) it will "concatenate" 5 to the 1234 and display '12345'.

The calculator's key pad is in GRID view, some buttons span across two GRID slots and will have a class of 'span-two' to inherit style attributes of spanning across 2 grid slots.


DigitButton.js is a component that is exported and takes in a single prop which is our digit, and calls the reducer.
Returns an onClick event that calls the dispatch with an ACTION type of 'ADD_DIGIT' and does what was explained in the ACTIONS section.

OperationButton.js - same principle as DigitButton.


EXPLAIN: 
FORMATTING
SOME ACTIONS MAYBE

TODO
CSS
