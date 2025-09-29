import { Order } from "../../domain/entities/order.entity";
import { ITransporte } from "../../domain/factory/product/transport.interface";
export declare class CreateTransportFactory {
    static create(order: Order): ITransporte;
}
