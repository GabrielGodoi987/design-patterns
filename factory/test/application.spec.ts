import { CityTypeEnum } from "../src/domain/enums/city-type.enum";
import { Order } from "../src/domain/entities/order.entity";
import { CreateTransportFactory } from "../src/application/transport-creator/CreateTransport.client";
import { Bike } from "../src/domain/concrect-products/Bike.product";

describe("Factory method test", () => {
  it("should return hello test", () => {
    const test = "hello test";
    expect(test).toBe("hello test");
  });

  it("Should return bike option", () => {
    const smallCityOrder = new Order(1, "small city franks", CityTypeEnum.SMALL);
    
    const result = CreateTransportFactory.create(smallCityOrder).delivery()

    expect(result).toBe("Delivering with a bike");
  });
});
