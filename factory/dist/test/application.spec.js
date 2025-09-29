"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_type_enum_1 = require("src/domain/enums/city-type.enum");
const order_entity_1 = require("src/domain/entities/order.entity");
const CreateTransport_client_1 = require("src/application/transport-creator/CreateTransport.client");
const Bike_product_1 = require("src/domain/concrect-products/Bike.product");
describe("Factory method test", () => {
    it("should return hello test", () => {
        const test = "hello test";
        expect(test).toBe("hello test");
    });
    it("Should return bike option", () => {
        const smallCityOrder = new order_entity_1.Order(1, "small city franks", city_type_enum_1.CityTypeEnum.SMALL);
        const result = CreateTransport_client_1.CreateTransportFactory.create(smallCityOrder);
        console.log(result);
        expect(result).toBe(new Bike_product_1.Bike());
    });
});
