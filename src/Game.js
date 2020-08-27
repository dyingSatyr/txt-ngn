import GUI from "./GUI.js";
const input = document.querySelector(".text-input input");
const output = document.querySelector(".text-output");

const ui = new GUI(input, output);

export default class Game {
  constructor(disk) {
    this.rooms = disk.rooms;
    this.player = disk.player;
    this.info = disk.information;
    this.currentRoom = this.setCurrentRoom();
  }

  start = () => {
    console.log("game run");
    this.setDocumentTitle();
    ui.display(`<span class="game-title">${this.getGameName()}</span>`);
    ui.display(`<span class="room-title">[${this.currentRoom.name}]</span>`);
    ui.display(this.currentRoom.description);
  };

  /**
   * [Player Methods]
   */

  setPlayerPosition = (x, y, z = 0) => {
    this.player.position.x = x;
    this.player.position.y = y;
    this.player.position.z = z;
  };
  getPlayerPosition = () => this.player.position;

  /**
   * [Room Methods]
   */

  setCurrentRoom = () => {
    return this.rooms.find(
      (room) =>
        JSON.stringify(room.position) ===
        JSON.stringify(this.getPlayerPosition())
    );
  };

  /**
   * [Game info getters]
   */

  getGameName = () => this.info.name;

  getGameDesc = () => this.info.description;

  getGameYear = () => this.info.year;

  getGameAuthor = () => this.info.author;

  getGameGenres = () => this.info.genres;

  getGameVersion = () => this.info.version;

  /**
   * [Misc]
   */

  setDocumentTitle = () => {
    document.title += ` - ${this.getGameName()} v${this.getGameVersion()}`;
  };
}
