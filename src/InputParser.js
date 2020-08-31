export default class InputParser {
  constructor() {
    console.log("InputParser intialized.");
  }

  parse = (text) => {
    let clean = this.cleanupSpaces(text);
    console.log("Cleaned: " + clean);
    let words = this.toWords(clean);
    console.log("Words: " + words);
    words = this.removeArticles(words);
    console.log("removed articles: " + words);

    //If after cleanup nothing is left
    if (!words.length) return `INVALID_INPUT`;

    //Check if command is only one word
    if (words.length === 1) {
      switch (words[0]) {
        case "i":
        case "inventory":
          return `SHOW_INVENTORY`;
        case "h":
        case "help":
          return `SHOW_HELP`;
        default:
          return `INVALID_INPUT`;
      }
    }
    return 'As you step foot in the cell, sound of chains rattling from the ceiling makes you realize <span class="alert"> you are not alone</span>.';
  };

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
