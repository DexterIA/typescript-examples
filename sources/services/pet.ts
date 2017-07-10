interface IBird {
  fly();
  layEggs();
}

interface IFish {
  swim();
  layEggs();
}

export class Bird implements IBird {
  fly() {
    console.log('Yea, I can fly!')
  }
  layEggs() {
    console.log('There\'s nothing to see here');
  }
}

export class Fish implements IFish {
  swim() {
    console.log('Yea, I can swim!')
  }
  layEggs() {
    console.log('There\'s nothing to see here');
  }
}

class Pet { }
export class Dog extends Pet {
  bark() {
    console.log("woof");
  }
}
export class Cat extends Pet {
  purr() {
    console.log("meow");
  }
}