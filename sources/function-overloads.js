var FunctionOverloads;
(function (FunctionOverloads) {
    function add(x, y) {
        return x + y;
    }
    console.log(add(5, 4));
    console.log(add('5', '4'));
    function getInfo(val) {
        if (typeof val === 'string')
            return 'Имя = ' + val;
        else if (typeof val === 'number')
            return 'Возраст = ' + val;
        else
            return 'undefined';
    }
    console.log(getInfo('Tom'));
    console.log(getInfo(34));
})(FunctionOverloads || (FunctionOverloads = {}));
//# sourceMappingURL=function-overloads.js.map