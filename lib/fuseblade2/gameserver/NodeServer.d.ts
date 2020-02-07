import { Server } from "./Server";
export declare class NodeServer extends Server {
    private _ticks;
    private readonly _maxTicks;
    private _delta;
    run(): boolean;
}
