Function.prototype.mybind = function (context) {
  // context.this = this;
  // const func = this;
  return () => { Function.prototype.apply(context, this); };
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.mybind(lamp);
boundTurnOn();