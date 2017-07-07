namespace OptionalParameters {

  function add(a: number, b: number): number {
    return a + b;
  }

  console.log(add(4, 5));

  function getFullName(
    firstName  : string,
    lastName   : string,
    patronymic?: string
  ): string
  {
    patronymic = patronymic || '';

    return [lastName, firstName, patronymic].join(' ');
  }

  console.log(getFullName('Александр', 'Пушкин', 'Сергеевич'));
  console.log(getFullName('Harry', 'Potter'));

}