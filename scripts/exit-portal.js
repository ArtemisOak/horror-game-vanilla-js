//@ts-check
import { GameObject } from "./game-objects/game-object.js";

export class ExitPortal extends GameObject {
	constructor(x, y) {
		super(48, 16, x, y);
		this.gameWon = false;
		this.fillstyle = "purple";
	}

	update(elapsedTime) {}
}
