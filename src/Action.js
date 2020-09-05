export default class Action {
	constructor() {
		console.log('Actions initialized.')
	}

	do = (action, gameState) => {
		console.log('Executing: ' + action)

		if (action === 'SHOW_HELP') {
			return this.help()
		}

		if (action === 'INVALID_INPUT') {
			return this.invalidInput()
		}

		if (action === 'SHOW_INVENTORY') {
			return gameState.player.inventory.length
				? `<b><span class="success">Inventory: </span></b>${[
						...gameState.player.inventory,
				  ]}`
				: 'Inventory is empty.'
		}

		if (action === `CANT_MOVE_THERE`) {
			return `<span class="alert">I can't go there.</span>`
		}

		if (action === 'MOVE_NORTH') {
			return `You moved north.`
		}

		return 'As you step foot in the cell, sound of chains rattling from the ceiling makes you realize <span class="alert"> you are not alone</span>.'
	}

	/**
	 * Help
	 */
	help = () => `
   <b><span class="success">List of available commands:</span></b><br>
   <b>help, h</b>: Shows help<br>
   <b>inventory, i:</b> Lists your inventory<br>
   <b>go, walk, move + direction:</b> Change player location<br>
   <b>get, take, grab, pick up + object:</b> Adds object to inventory (if possible)<br>
   <b>look at, inspect, examine + object:</b> Provides object description<br>
`
	/**
	 * Invalid input
	 */
	invalidInput = () =>
		`<span class="danger">I don't understand that command.</span>`
}
