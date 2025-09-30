import { Bike } from "../../domain/concrect-products/Bike.product";
import { Motocycle } from "../../domain/concrect-products/motocycle.products";
import { Order } from "../../domain/entities/order.entity";
import { Truck } from "../../../src/domain/concrect-products/truck.product";
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
      return new Truck();
    }

    throw new Error(`Type ${order.cityType} does not exists`);
  }
}
