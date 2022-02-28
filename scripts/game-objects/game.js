import { Key } from "./key.js";
import { GameObject } from "./game-object.js";
import { canvas } from "../canvas.js";
import { Barrier } from "./barrier.js";
import { Monster } from "./monster.js";
import { Player } from "./player.js";
import { Door } from "./door.js";
import { ExitPortal } from "../exit-portal.js";
export class Game {
	constructor() {
		this.player = undefined;
		this.barriers = [];
		this.monsters = [];
		this.keys = [];
		this.isDead = false;
	}
	/**
	 * @param {string []} level
	 */
	loadLevel(level) {
		let monsterCoords = [];
		let playerCoords = { x: 0, y: 0 };

		level.forEach((row, rIdx) => {
			for (let col = 0; col < row.length; col++) {
				let x = col * 16;
				let y = rIdx * 16;
				switch (row[col]) {
					case "w":
						this.barriers.push(new Barrier(x, y, 16, 16));
						break;
					case "m":
						monsterCoords.push({ x: x, y: y });
						break;
					case "p":
						playerCoords = { x: x, y: y };
						break;
					case "k":
						this.keys.push(new Key(x, y));
						break;
					case "d":
						this.barriers.push(new Door(x, y, true));
						break;
					case "D":
						this.barriers.push(new Door(x, y, false));
						break;
					case "x":
						this.barriers.push(new ExitPortal(x, y));
						break;
				}
			}
		});
		monsterCoords.forEach((c) => {
			console.log(c);
			this.monsters.push(new Monster(this, c.x, c.y));
		});
		this.player = new Player(this, playerCoords.x, playerCoords.y);

		return {
			player: this.player,
			monsters: this.monsters,
			barriers: this.barriers,
			keys: this.keys,
		};
	}
}
