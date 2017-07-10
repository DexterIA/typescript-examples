import {Bird, Cat, Dog, Fish} from './services/pet';

function getBirdOrFish (needBird: boolean): Bird | Fish {
  return needBird ? new Bird() : new Fish();
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

let pet = getBirdOrFish(true);

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

/*


*/

function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
}

padLeft(':PAD', 7);
padLeft(':PAD', 'padding ');

/*


 */

function callPetMethod(pet: any) {
  if (pet instanceof Dog) {
    pet.bark();
  }

  if (pet instanceof Cat) {
    pet.purr();
  }
}

callPetMethod(new Dog());
callPetMethod(new Cat());