import { CityTypeEnum } from "../enums/city-type.enum";

export class Order {
  id: number;
  destination: string;
  cityType: CityTypeEnum;

  constructor(id: number, destination: string, cityType: CityTypeEnum) {
    this.id = id;
    this.destination = destination;
    this.cityType = cityType;
  }
}
