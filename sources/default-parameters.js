var DefaultParameters;
(function (DefaultParameters) {
    function getFullName(firstName, lastName, patronymic) {
        if (firstName === void 0) { firstName = 'Александр'; }
        if (lastName === void 0) { lastName = 'Пушкин'; }
        if (patronymic === void 0) { patronymic = 'Сергеевич'; }
        return lastName + ' ' + firstName + ' ' + patronymic;
    }
    console.log(getFullName());
    console.log(getFullName('Лукашенко'));
    console.log(getFullName(undefined, 'Лукашенко', 'Григорьевич'));
    console.log(getFullName('', 'Лукашенко', 'Григорьевич'));
    console.log(getFullName(void 0, 'Лукашенко'));
    console.log(getFullName());
})(DefaultParameters || (DefaultParameters = {}));
//# sourceMappingURL=default-parameters.js.map