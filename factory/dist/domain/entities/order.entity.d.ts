import { CityTypeEnum } from "../enums/city-type.enum";
export declare class Order {
    id: number;
    destination: string;
    cityType: CityTypeEnum;
    constructor(id: number, destination: string, cityType: CityTypeEnum);
}
