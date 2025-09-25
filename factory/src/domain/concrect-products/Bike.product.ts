import { ITransporte } from "../factory/product/transport.interface";

export class Bike implements ITransporte{
  delivery(): string {
    return 'Delivering with a bike';
  }
}