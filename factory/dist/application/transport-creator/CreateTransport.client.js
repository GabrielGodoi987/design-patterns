"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransportFactory = void 0;
const Bike_product_1 = require("../../domain/concrect-products/Bike.product");
const motocycle_products_1 = require("../../domain/concrect-products/motocycle.products");
class CreateTransportFactory {
    static create(order) {
        if (order.cityType == 1) {
            return new Bike_product_1.Bike();
        }
        if (order.cityType == 2) {
            return new motocycle_products_1.Motocycle();
        }
        if (order.cityType == 3) {
            return new motocycle_products_1.Motocycle();
        }
        throw new Error(`Type ${order.cityType} does not exists`);
    }
}
exports.CreateTransportFactory = CreateTransportFactory;
//# sourceMappingURL=CreateTransport.client.js.map