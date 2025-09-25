import { CityTypeEnum } from "../enums/city-type.enum";

export class Order {
  id: string;
  destination: string;
  cityType: CityTypeEnum;

  constructor(id: string, destination: string, cityType: CityTypeEnum) {
    this.id = id;
    this.destination = destination;
    this.cityType = cityType;
  }
}
