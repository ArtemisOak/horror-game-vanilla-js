//@ts-check

import { canvas, ctx } from "../canvas.js";
import { Game } from "../game.js";
import { GameObject } from "../game-objects/game-object.js";

export class GameOverScene extends GameObject {
	/**
	 * @param {Game} game
	 */
	constructor(game) {
		super(canvas.width, canvas.height, 0, 0);
		this.fillStyle = ctx.createLinearGradient(0, 0, 0, canvas.height);
		this.fillStyle.addColorStop(0, "red");
		this.fillStyle.addColorStop(1, "black");

		this.textGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
		this.textGradient.addColorStop(0, "yellow");
		this.textGradient.addColorStop(1, "purple");

		this.game = game;

		canvas.addEventListener(
			"click",
			() => {
				this.game.start();
			},
			{ once: true }
		);
	}

	render() {
		super.render();

		ctx.save();
		ctx.fillStyle = this.textGradient;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";

		ctx.font = "150px zombiecontrol";
		ctx.fillText("You Died!", canvas.width / 2, 100);

		ctx.font = "80px zombiecontrol";
		ctx.fillText(
			`You complete ${this.game.currentLevel} levels`,
			canvas.width / 2,
			canvas.height / 2
		);

		ctx.font = "80px zombiecontrol";
		ctx.fillText(
			"Click to try again",
			canvas.width / 2,
			canvas.height - 60
		);

		ctx.restore();
	}
}
