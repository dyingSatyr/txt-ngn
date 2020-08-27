export default class InputParser {
	constructor() {
		console.log('input parser intialized')
		this.articles = ['a', 'an', 'the']
	}

	parse = (text) => {
		let clean = this.cleanupSpaces(text)
		let words = this.toWords(clean)
		return 'As you step foot in the cell, sound of chains rattling from the ceiling makes you realize <span class="alert"> you are not alone</span>.'
	}

	//Clean up spaces from front, back, and turn
	//all double spaces into single across the string
	cleanupSpaces = (text) => {
		console.log(`Cleaning up spaces from <${text}>.`)
		while (text.indexOf('  ') !== -1) {
			text = text.replace('  ', ' ')
		}
		text = text.trim()
		console.log(`Returning <${text}>`)
		return text
	}

	/**
	 * [Split string by space]
	 * @param string
	 * @returns array of words
	 */
	toWords = (text) => {
		console.log(`Spliting <${text}> to words.`)
		let result = text.split(' ')
		console.log(`Returning array: ${result}`)
		return result
	}

	cleanupArticles = (words) => {
		this.articles.forEach((article) => {
			while (words.indexOf(article) != -1) {
				text = text.replace(article, '')
			}
		})

		return text
	}
}
