var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
var Handler = (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (e) {
        console.log('clicked');
    };
    return Handler;
}());
var h = new Handler(), button = {
    addClickListener: function (onclick) {
        var event = new Event('some event');
        onclick(event);
    }
};
button.addClickListener(h.onClickBad);
//# sourceMappingURL=function-this.js.map