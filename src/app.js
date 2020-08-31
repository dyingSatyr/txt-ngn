import Game from "./Game.js"; //Game class
import gameDisk from "./games/Thrilling Mystery.js"; //Game "disk"
import GUI from "./GUI.js";
import InputParser from "./InputParser.js";
import Action from "./Action.js";

const input = document.querySelector(".text-input input");
const output = document.querySelector(".text-output");

const ui = new GUI(input, output);
const parser = new InputParser();
const action = new Action();

const game = new Game(gameDisk, ui, parser, action);
game.start();
