import { Bike } from "../../domain/concrect-products/Bike.product";
import { Motocycle } from "../../domain/concrect-products/motocycle.products";
import { CityTypeEnum } from "../../domain/enums/city-type.enum";
import { ITransporte } from "../../domain/factory/product/transport.interface";

export class CreateTransportFactory {
  create(cityType: CityTypeEnum): ITransporte {
    if (cityType == 1) {
      return new Bike();
    }
    if (cityType == 2) {
      return new Motocycle();
    }
    if (cityType == 3) {
      return new Motocycle();
    }

    throw new Error(`Type ${cityType} does not exists`);
  }
}
