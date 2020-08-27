export default class InputParser {
  constructor() {
    console.log("input parser intialized");
    this.articles = ["a", "an", "the"];
  }

  parse = (text) => {
    let clean = this.cleanupSpaces(text);
    console.log("Cleaned: " + clean);
    let words = this.toWords(clean);
    console.log("Words: " + words);

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
          return "I don't understand that command.";
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
	 <b>go, walk, move + direction:</b> Change player location 
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

  cleanupArticles = (words) => {
    this.articles.forEach((article) => {
      while (words.indexOf(article) != -1) {
        text = text.replace(article, "");
      }
    });

    return text;
  };
}
