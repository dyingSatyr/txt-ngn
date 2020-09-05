import GUI from './GUI.js'
import InputParser from './InputParser.js'
import Action from './Action.js'

const input = document.querySelector('.text-input input')
const output = document.querySelector('.text-output')

export default class Game {
	constructor(disk) {
		console.log('Game initialized.')
		this.rooms = disk.rooms
		this.player = disk.player
		this.info = disk.information
		this.action = new Action()
		this.ui = new GUI(input, output)
		this.parser = new InputParser()
		this.currentRoom = this.setCurrentRoom()
		this.listenToCommands()
	}

	start = () => {
		console.log('Game started.')
		this.setDocumentTitle()
		this.ui.display(`<span class="game-title">${this.getGameName()}</span>`)
		this.ui.display(
			`<span class="room-title">[${this.currentRoom.name}]</span>`
		)
		this.ui.display(this.currentRoom.description)
	}

	listenToCommands = () => {
		console.log('Started listening commands.')
		this.ui.inputEl.addEventListener('keyup', (e) => {
			//Handle enter (also check if user input exists)
			if (e.keyCode === 13 && this.ui.inputEl.value) {
				this.ui.lastCommand = this.ui.inputEl.value
				this.ui.displayCommand(this.ui.lastCommand)
				this.performAction(this.parser.parse(this.ui.lastCommand))
				this.ui.clearInput()

				//Up arrow restores previous command
			} else if (e.keyCode === 38 && this.ui.lastCommand) {
				this.ui.restorePreviousInputValue()
			}
		})
	}

	performAction = (action) => {
		this.ui.display(
			this.action.do(action, {
				rooms: this.rooms,
				player: this.player,
			})
		)
	}

	/**
	 * [Player Methods]
	 */

	setPlayerPosition = (x, y, z = 0) => {
		this.player.position.x = x
		this.player.position.y = y
		this.player.position.z = z
	}
	getPlayerPosition = () => this.player.position

	/**
	 * [Room Methods]
	 */

	setCurrentRoom = () => {
		return this.rooms.find(
			(room) =>
				JSON.stringify(room.position) ===
				JSON.stringify(this.getPlayerPosition())
		)
	}

	/**
	 * Execute action
	 */
	execute = (action) => {
		console.log(`Executing ${action}.`)
	}

	/**
	 * [Game info getters]
	 */

	getGameName = () => this.info.name

	getGameDesc = () => this.info.description

	getGameYear = () => this.info.year

	getGameAuthor = () => this.info.author

	getGameGenres = () => this.info.genres

	getGameVersion = () => this.info.version

	/**
	 * [Misc]
	 */

	setDocumentTitle = () => {
		document.title += ` - ${this.getGameName()} v${this.getGameVersion()}`
	}
}

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
