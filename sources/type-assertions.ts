let someAnyValue: any = 'hello world!';
let strLength: number = (someAnyValue as string).length;
console.log(strLength); // 12

let someUnionValue: string | number = 'hello work';
strLength = (<string>someUnionValue).length;
console.log(strLength); // 10

/*


 */


function exampleFromDoc(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '.  the ' + epithet;
  }
  name = name || 'Bob';
  return postfix('great');
}

/*


*/

class Diploma {
  constructor (public name: string) {}
}

class Student {
  constructor (public name: string, public diploma: Diploma) {}
}

let student1 = new Student('Vasya', new Diploma('copy/paste')),
    student2 = new Student('Petya', new Diploma('nety'));

delete student1.diploma;

console.log(checkDiploma(student1));
console.log(checkDiploma(student2));


function checkDiploma (student: Student):boolean {
  return Boolean(student.diploma.name);
}