/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Coin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Coin/costumes/costume1.svg", {
        x: 137,
        y: 30.5
      })
    ];

    this.sounds = [
      new Sound("pop", "./Coin/sounds/pop.wav"),
      new Sound("Coin", "./Coin/sounds/Coin.wav"),
      new Sound("Clapping", "./Coin/sounds/Clapping.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.coins += 20;
    yield* this.startSound("Coin");
    yield* this.sayAndWait("my precious", 2);
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.move(10);
      this.direction += 15;
      this.direction -= 15;
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }
}
