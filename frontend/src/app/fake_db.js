"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cars = void 0;
exports.Cars = [];
for (var i = 0; i < 100; i++) {
    exports.Cars.push({
        id: i + 1,
        model: "model ".concat(i + 1),
        brand: "brand ".concat(i + 1),
        year: 1952,
        color: 'black',
        category: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur consequatur, eaque',
        price: 150000,
        imgURL: '',
        liked: true
    });
}
