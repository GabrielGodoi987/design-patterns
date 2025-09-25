import { ITransporte } from "../factory/product/transport.interface";

export class Motocycle implements ITransporte {
  delivery(): string {
    return "Delivering with motocycle";
  }
}
