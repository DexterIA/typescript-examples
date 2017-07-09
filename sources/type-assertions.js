var someAnyValue = 'hello world!';
var strLength = someAnyValue.length;
console.log(strLength);
var someUnionValue = 'hello work';
strLength = someUnionValue.length;
console.log(strLength);
function exampleFromDoc(name) {
    function postfix(epithet) {
        return name.charAt(0) + '.  the ' + epithet;
    }
    name = name || 'Bob';
    return postfix('great');
}
var Diploma = (function () {
    function Diploma(name) {
        this.name = name;
    }
    return Diploma;
}());
var Student = (function () {
    function Student(name, diploma) {
        this.name = name;
        this.diploma = diploma;
    }
    return Student;
}());
var student1 = new Student('Vasya', new Diploma('copy/paste')), student2 = new Student('Petya', new Diploma('nety'));
delete student1.diploma;
console.log(checkDiploma(student1));
console.log(checkDiploma(student2));
function checkDiploma(student) {
    return Boolean(student.diploma.name);
}
//# sourceMappingURL=type-assertions.js.map