import Parser from './InputParser.js'
const parser = new Parser()

export default class GUI {
	constructor(inElement, outElement) {
		this.outputEl = outElement
		this.inputEl = inElement
		this.lastCommand = ''

		this.inputEl.addEventListener('keyup', (e) => {
			//Handle enter (also check if user input exists)
			if (e.keyCode === 13 && this.inputEl.value) {
				this.lastCommand = this.inputEl.value
				this.displayCommand(this.lastCommand)
				this.display(parser.parse(this.lastCommand))
				this.clearInput()

				//Up arrow restores previous command
			} else if (e.keyCode === 38 && this.lastCommand) {
				this.restorePreviousInputValue()
			}
		})
	}

	display = (text) => {
		let paragraph = document.createElement('p')
		paragraph.innerHTML = text
		this.outputEl.appendChild(paragraph)
		this.scrollDisplayToBottom()
	}

	displayCommand = (text) => {
		let paragraph = document.createElement('p')
		paragraph.innerHTML = `> ${text}`
		paragraph.classList.add('user-command')
		this.outputEl.appendChild(paragraph)
		this.scrollDisplayToBottom()
	}

	clearInput = () => {
		this.inputEl.value = ''
	}

	getInputValue = () => {
		return this.inputEl.value
	}

	restorePreviousInputValue = () => {
		this.inputEl.value = this.lastCommand
	}

	scrollDisplayToBottom = () => {
		this.outputEl.scrollTop = this.outputEl.scrollHeight
	}
}
