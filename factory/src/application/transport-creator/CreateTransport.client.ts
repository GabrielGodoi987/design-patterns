import { Bike } from "../../domain/concrect-products/Bike.product";
import { Motocycle } from "../../domain/concrect-products/motocycle.products";
import { Order } from "../../domain/entities/order.entity";
import { CityTypeEnum } from "../../domain/enums/city-type.enum";
import { ITransporte } from "../../domain/factory/product/transport.interface";

export class CreateTransportFactory {
  static create(order: Order): ITransporte {
    if (order.cityType == 1) {
      return new Bike();
    }
    if (order.cityType == 2) {
      return new Motocycle();
    }
    if (order.cityType == 3) {
      return new Motocycle();
    }

    throw new Error(`Type ${order.cityType} does not exists`);
  }
}
