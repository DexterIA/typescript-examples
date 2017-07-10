var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bird = (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('Yea, I can fly!');
    };
    Bird.prototype.layEggs = function () {
        console.log('There\'s nothing to see here');
    };
    return Bird;
}());
export { Bird };
var Fish = (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log('Yea, I can swim!');
    };
    Fish.prototype.layEggs = function () {
        console.log('There\'s nothing to see here');
    };
    return Fish;
}());
export { Fish };
var Pet = (function () {
    function Pet() {
    }
    return Pet;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("woof");
    };
    return Dog;
}(Pet));
export { Dog };
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.purr = function () {
        console.log("meow");
    };
    return Cat;
}(Pet));
export { Cat };
//# sourceMappingURL=pet.js.map