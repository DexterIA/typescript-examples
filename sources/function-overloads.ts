namespace FunctionOverloads {

  function add(x: string, y: string): string;
  function add(x: number, y: number): number;
  function add(x: any, y: any): any {
    return x + y;
  }

  console.log(add(5, 4));   // 9
  console.log(add('5', '4'));   // 54

  /*
   */

  function getInfo(name: string): string;
  function getInfo(age: number): string;
  function getInfo(val: string | number): string {

    if (typeof val === 'string')
      return 'Имя = ' + val;
    else if (typeof val === 'number')
      return 'Возраст = ' + val;
    else
      return 'undefined';
  }

  console.log(getInfo('Tom')); // Имя = Tom
  console.log(getInfo(34));    // Возраст = 34
}