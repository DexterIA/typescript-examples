class Pet {
  constructor(public limbCount: number) {}
}

enum FishHabitat {
  FRESH_WATER,
  SEA_WATER
}

class Fish {
  constructor(public habitat: FishHabitat) {}
}


console.log(isFish(new Fish(FishHabitat.FRESH_WATER)));
console.log(isFish(new Pet(4)));

function isFish(animal: Fish | Pet):animal is Fish {
  return (animal as Fish).habitat !== undefined;
}