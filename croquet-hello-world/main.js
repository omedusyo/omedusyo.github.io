

const counterDOM = document.getElementById("counter");
const incDOM = document.getElementById("inc");
const decDOM = document.getElementById("dec");
console.log(incDOM);
console.log(decDOM);

class MyModel extends Croquet.Model {
  init() {
    this.count = 0;
    this.subscribe("counter", "reset", () => {
      this.count = 0;
      this.publish("counter", "changed");
    });
    // this.future(1000).myTick();
    this.subscribe("counter", "change-to", val => {
      this.changeTo(val);
    });
  }

  changeTo(value) {
    this.count = value;
    this.publish("counter", "changed");
  }

  myTick() {
    this.count += 1;
    this.publish("counter", "changed");
    this.future(1000).myTick();
  }
}
MyModel.register("MyModel");

class MyView extends Croquet.View {
  constructor(model) {
    super(model);
    this.model = model;
    counterDOM.onclick = event => this.counterReset();
    incDOM.onclick = event => {
      this.publish("counter", "change-to", this.model.count + 1);
    };
    decDOM.onclick = event => {
      this.publish("counter", "change-to", this.model.count - 1);
    };
    this.subscribe("counter", "changed", this.counterChanged);
    this.counterChanged();
  }

  counterReset() {
    this.publish("counter", "reset");
  }

  counterChanged() {
    counterDOM.textContent = this.model.count;
  }
}


const apiKey = '1HD1xjEOxt9chDHft7Kej1ExNj3BAujGFiJkIt7q7';
const appId = 'com.gmail.yuriy_2edupyn.awesome-app';
const name = Croquet.App.autoSession();
const password = Croquet.App.autoPassword();
name.then(name => {
  console.log("name ==", name);
});
password.then(pwd => {
  console.log("password ==", pwd);
});
console.log(password);
Croquet.Session.join({ apiKey, appId, name, password, model: MyModel, view: MyView });

