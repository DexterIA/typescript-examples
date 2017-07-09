var Pet = (function () {
    function Pet(limbCount) {
        this.limbCount = limbCount;
    }
    return Pet;
}());
var FishHabitat;
(function (FishHabitat) {
    FishHabitat[FishHabitat["FRESH_WATER"] = 0] = "FRESH_WATER";
    FishHabitat[FishHabitat["SEA_WATER"] = 1] = "SEA_WATER";
})(FishHabitat || (FishHabitat = {}));
var Fish = (function () {
    function Fish(habitat) {
        this.habitat = habitat;
    }
    return Fish;
}());
console.log(isFish(new Fish(FishHabitat.FRESH_WATER)));
console.log(isFish(new Pet(4)));
function isFish(animal) {
    return animal.habitat !== undefined;
}
//# sourceMappingURL=type-guards.js.map