import { Bird, Cat, Dog, Fish } from './services/pet';
function getBirdOrFish(needBird) {
    return needBird ? new Bird() : new Fish();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
var pet = getBirdOrFish(true);
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
}
padLeft(':PAD', 7);
padLeft(':PAD', 'padding ');
function callPetMethod(pet) {
    if (pet instanceof Dog) {
        pet.bark();
    }
    if (pet instanceof Cat) {
        pet.purr();
    }
}
callPetMethod(new Dog());
callPetMethod(new Cat());
//# sourceMappingURL=type-guards.js.map