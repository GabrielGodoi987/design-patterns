import { ITransporte } from "../factory/product/transport.interface";

export class Truck implements ITransporte{
    delivery(): string {
        return "Delivering with a truck";
    }
}