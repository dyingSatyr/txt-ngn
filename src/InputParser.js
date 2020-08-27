export default class InputParser {
  constructor() {
    console.log("input parser intialized");
  }

  parse = (text) => {
    let clean = this.cleanupSpaces(text);
    console.log("Cleaned: " + clean);
    let words = this.toWords(clean);
    console.log("Words: " + words);
    words = this.removeArticles(words);
    console.log("removed articles: " + words);

    //If after cleanup nothing is left
    if (!words.length)
      return `<span class="danger">I don't understand that command.</span>`;

    //Check if command is only one word
    if (words.length === 1) {
      switch (words[0]) {
        case "i":
        case "inventory":
          return `<span class="success">Inventory</span>`;
        case "h":
        case "help":
          return this.help();
        default:
          return `<span class="danger">I don't understand that command.</span>`;
      }
    }

    return 'As you step foot in the cell, sound of chains rattling from the ceiling makes you realize <span class="alert"> you are not alone</span>.';
  };

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
  `;

  //Clean up spaces from front, back, and turn
  //all double spaces into single across the string
  //Turn the command to lowercase
  cleanupSpaces = (text) => {
    text = text.toLowerCase();
    //console.log(`Cleaning up spaces from <${text}>.`)
    while (text.indexOf("  ") !== -1) {
      text = text.replace("  ", " ");
    }
    text = text.trim();
    //console.log(`Returning <${text}>`)
    return text;
  };

  /**
   * [Split string by space]
   * @param string
   * @returns array of words
   */
  toWords = (text) => {
    //console.log(`Spliting <${text}> to words.`)
    let result = text.split(" ");
    //console.log(`Returning array: ${result}`)
    return result;
  };

  /**
   * @param words array
   * @returns array without articles
   */
  removeArticles = (words) => {
    let articles = ["a", "an", "the"];
    return words.filter((word) => {
      return !articles.includes(word);
    });
  };
}
