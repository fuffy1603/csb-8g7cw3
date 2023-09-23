/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 240.5,
        y: 182.5
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("pop", "./Stage/sounds/pop.wav"),
      new Sound("Bossa Nova", "./Stage/sounds/Bossa Nova.wav"),
      new Sound("Dance Head Nod", "./Stage/sounds/Dance Head Nod.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.coins = 5357;

    this.watchers.coins = new Watcher({
      label: "coins",
      style: "normal",
      visible: true,
      value: () => this.vars.coins,
      x: 621,
      y: 180
    });
  }

  *whenGreenFlagClicked() {}
}
