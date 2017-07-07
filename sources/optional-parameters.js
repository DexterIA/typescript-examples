var OptionalParameters;
(function (OptionalParameters) {
    function add(a, b) {
        return a + b;
    }
    console.log(add(4, 5));
    function getFullName(firstName, lastName, patronymic) {
        patronymic = patronymic || '';
        return [lastName, firstName, patronymic].join(' ');
    }
    console.log(getFullName('Александр', 'Пушкин', 'Сергеевич'));
    console.log(getFullName('Harry', 'Potter'));
})(OptionalParameters || (OptionalParameters = {}));
//# sourceMappingURL=optional-parameters.js.map