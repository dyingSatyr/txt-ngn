import Game from './Game.js' //Game class
import Road from './games/road.js' //Game "disk"

const road = new Game(Road)
road.start()

// const input = document.querySelector('.text-input input')
// const output = document.querySelector('.text-output')

// const ui = new GUI(input, output)

// ui.display('heyaaaa <b>bold</b> <i>nig nog</i>')
// ui.display(
// 	'As the enemy swings, you feel a sharp pain going through you shoulder. <span class="danger">You lose <b>17hp</b>.</span>'
// )

// ui.display(
// 	'<span class="info">Medium Healing Potion</span> is used. You feel more powerful as <span class="success">you gain <b>33hp</b></span>.'
// )

// ui.display(
// 	'As you step foot in the cell, sound of chains rattling from the ceiling makes you realize <span class="alert"> you are not alone</span>.'
// )
