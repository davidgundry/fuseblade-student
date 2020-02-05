import { Server } from "./Server";
import { LocalClientConnection } from "./client/ClientConnection";
export declare class LocalPlayServer extends Server {
    run(): boolean;
    update(): void;
    connectLocalClient(client: LocalClientConnection<any, any, any>): boolean;
}
