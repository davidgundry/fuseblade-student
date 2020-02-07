import { Server } from "./Server";
import { LocalClientConnection } from "./client/ClientConnection";
export declare class LocalPlayServer extends Server {
    run(): boolean;
    update(delta: number): void;
    connectLocalClient(client: LocalClientConnection<any, any, any>): boolean;
}
