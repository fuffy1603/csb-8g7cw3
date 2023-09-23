/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Coin32 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Coin32/costumes/costume1.svg", {
        x: 89.5,
        y: 30.5
      })
    ];

    this.sounds = [
      new Sound("pop", "./Coin32/sounds/pop.wav"),
      new Sound("Coin", "./Coin32/sounds/Coin.wav")
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    this.stage.vars.coins++;
    yield* this.startSound("Coin");
    this.goto(this.random(-240, 240), this.random(-180, 180));
  }
}