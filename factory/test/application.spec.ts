import { CityTypeEnum } from "../src/domain/enums/city-type.enum";
import { Order } from "../src/domain/entities/order.entity";
import { CreateTransportFactory } from "../src/application/transport-creator/CreateTransport.client";

describe("Factory method test", () => {
  it("should return hello test", () => {
    expect("hello test").toBe("hello test");
  });

  it("Should return bike for small city", () => {
    const order = new Order(1, "small city order", CityTypeEnum.SMALL);
    const result = CreateTransportFactory.create(order).delivery();
    expect(result).toBe("Delivering with a bike");
  });

  it("Should return motocycle for medium city", () => {
    const order = new Order(2, "medium city order", CityTypeEnum.MEDIUM);
    const result = CreateTransportFactory.create(order).delivery();
    expect(result).toBe("Delivering with a motorcycle");
  });

  it("Should return truck for big city", () => {
    const order = new Order(3, "big city order", CityTypeEnum.BIG);
    const result = CreateTransportFactory.create(order).delivery();
    expect(result).toBe("Delivering with a truck");
  });

  it("Should throw error for invalid city type", () => {
    const order = new Order(4, "invalid city order", 999 as CityTypeEnum);
    expect(() => CreateTransportFactory.create(order)).toThrow(
      "Type 999 does not exists"
    );
  });
});
