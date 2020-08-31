export default class Action {
  constructor() {
    console.log("Actions initialized.");
  }

  do = (action) => {
    if (action === "SHOW_HELP") {
      return this.help();
    }

    if (action === "INVALID_INPUT") {
      return this.invalidInput();
    }
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

  invalidInput = () =>
    `<span class="danger">I don't understand that command.</span>`;
}
