namespace DefaultParameters {
  function getFullName (
    firstName = 'Александр',
    lastName  = 'Пушкин',
    patronymic= 'Сергеевич',
  ) : string
  {
    return lastName + ' '  + firstName + ' ' + patronymic;
  }

  // Пушкин Александр Сергеевич
  console.log(getFullName());

  // Лукашенко Александр Сергеевич
  console.log(getFullName('Лукашенко'));

  // Лукашенко Александр Григорьевич
  console.log(getFullName(undefined, 'Лукашенко', 'Григорьевич'));

  // Лукашенко null Григорьевич
  console.log(getFullName('', 'Лукашенко', 'Григорьевич'));

  // Лукашенко Александр Сергеевич
  console.log(getFullName(void 0, 'Лукашенко'));

  // no comments, for tests
  console.log(getFullName());
}