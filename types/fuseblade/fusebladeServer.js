(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fusebladeServer", [], factory);
	else if(typeof exports === 'object')
		exports["fusebladeServer"] = factory();
	else
		root["fusebladeServer"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/FarmerPuzzle.ts":
/*!*****************************!*\
  !*** ./src/FarmerPuzzle.ts ***!
  \*****************************/
/*! exports provided: FPItems, FPActions, FPState, FPSave, FPModel, FPCommandFactory, FPScenario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPItems", function() { return FPItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPActions", function() { return FPActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPState", function() { return FPState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPSave", function() { return FPSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPModel", function() { return FPModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPCommandFactory", function() { return FPCommandFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPScenario", function() { return FPScenario; });
/* harmony import */ var _server_ScenarioData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/ScenarioData */ "./src/server/ScenarioData.ts");
/* harmony import */ var _server_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server/GameModel */ "./src/server/GameModel.ts");
/* harmony import */ var _server_Command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/Command */ "./src/server/Command.ts");
/* harmony import */ var _server_Scenario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server/Scenario */ "./src/server/Scenario.ts");
/* harmony import */ var _server_client_ClientController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server/client/ClientController */ "./src/server/client/ClientController.ts");





var FPItems;
(function (FPItems) {
    FPItems[FPItems["Wolf"] = 0] = "Wolf";
    FPItems[FPItems["Sheep"] = 1] = "Sheep";
    FPItems[FPItems["Cabbage"] = 2] = "Cabbage";
})(FPItems || (FPItems = {}));
var FPActions;
(function (FPActions) {
    FPActions[FPActions["MoveWolf"] = 0] = "MoveWolf";
    FPActions[FPActions["MoveCabbage"] = 1] = "MoveCabbage";
    FPActions[FPActions["MoveSheep"] = 2] = "MoveSheep";
    FPActions[FPActions["MoveFarmer"] = 3] = "MoveFarmer";
})(FPActions || (FPActions = {}));
class FPState {
    load(save) {
        this.leftBank = save.leftBank.slice();
        this.rightBank = save.rightBank.slice();
        this.farmerOnLeftBank = save.farmerOnLeftBank;
    }
    cloneFrom(source) {
        this.leftBank = source.leftBank.slice();
        this.rightBank = source.rightBank.slice();
        this.farmerOnLeftBank = source.farmerOnLeftBank;
    }
    save() {
        return {
            clients: 1,
            leftBank: this.leftBank,
            rightBank: this.rightBank,
            farmerOnLeftBank: this.farmerOnLeftBank
        };
    }
    equals(other) {
        if (this.leftBank.length !== other.leftBank.length)
            return false;
        if (this.farmerOnLeftBank !== other.farmerOnLeftBank)
            return false;
        for (let i = 0, lenA = this.leftBank.length; i < lenA; i++) {
            let found = false;
            for (let j = 0, lenB = other.leftBank.length; j < lenB; j++) {
                if ((this.leftBank[i] === other.leftBank[j])) {
                    found = true;
                    break;
                }
            }
            if (!found)
                return false;
        }
        return true;
    }
    getCurrentPlayer() { return 0; }
    moveToNextPlayer() { }
}
class FPSave extends _server_ScenarioData__WEBPACK_IMPORTED_MODULE_0__["ScenarioSaveData"] {
}
class FPModel extends _server_GameModel__WEBPACK_IMPORTED_MODULE_1__["TurnBasedGameModel"] {
    stateActionMapping(state) {
        if (this._checkIfFailureState(state))
            return [];
        let list = state.farmerOnLeftBank ? state.leftBank : state.rightBank;
        let actionList = new Array(list.length + 1);
        actionList[actionList.length - 1] = FPActions.MoveFarmer;
        for (let i = 0, len = list.length; i < len; i++) {
            if (list[i] === FPItems.Cabbage)
                actionList[i] = FPActions.MoveCabbage;
            else if (list[i] === FPItems.Sheep)
                actionList[i] = FPActions.MoveSheep;
            else if (list[i] === FPItems.Wolf)
                actionList[i] = FPActions.MoveWolf;
        }
        return actionList;
    }
    applyCommands(state, action) {
        if (!action)
            throw new Error("Command submitted was null");
        if (action instanceof Array)
            throw new Error("Must submit a single command as an action (not an array)");
        if (action.commandType === FPActions.MoveFarmer) {
            state.leftBank = state.leftBank;
            state.rightBank = state.rightBank,
                state.farmerOnLeftBank = !state.farmerOnLeftBank;
        }
        else {
            let item;
            if (action.commandType === FPActions.MoveCabbage)
                item = FPItems.Cabbage;
            else if (action.commandType === FPActions.MoveSheep)
                item = FPItems.Sheep;
            else if (action.commandType === FPActions.MoveWolf)
                item = FPItems.Wolf;
            let newLeftBank = [];
            let newRightBank = [];
            for (let i = 0, len = state.leftBank.length; i < len; i++) {
                if (state.leftBank[i] !== item)
                    newLeftBank.push(state.leftBank[i]);
            }
            for (let i = 0, len = state.rightBank.length; i < len; i++) {
                if (state.rightBank[i] !== item)
                    newRightBank.push(state.rightBank[i]);
            }
            if (state.farmerOnLeftBank)
                newRightBank.push(item);
            else
                newLeftBank.push(item);
            state.leftBank = newLeftBank;
            state.rightBank = newRightBank;
            state.farmerOnLeftBank = !state.farmerOnLeftBank;
        }
    }
    goalTest(state) {
        if (this._checkIfFailureState(state))
            return true;
        return state.leftBank.length === 0;
    }
    heuristic(state) {
        return state.leftBank.length * 1000;
    }
    _checkIfFailureState(FarmerPuzzleState) {
        if (FarmerPuzzleState.farmerOnLeftBank) {
            if ((FarmerPuzzleState.rightBank.indexOf(FPItems.Wolf) !== -1 && FarmerPuzzleState.rightBank.indexOf(FPItems.Sheep) !== -1)
                || (FarmerPuzzleState.rightBank.indexOf(FPItems.Cabbage) !== -1 && FarmerPuzzleState.rightBank.indexOf(FPItems.Sheep) !== -1))
                return true;
        }
        else if ((FarmerPuzzleState.leftBank.indexOf(FPItems.Wolf) !== -1 && FarmerPuzzleState.leftBank.indexOf(FPItems.Sheep) !== -1)
            || (FarmerPuzzleState.leftBank.indexOf(FPItems.Cabbage) !== -1 && FarmerPuzzleState.leftBank.indexOf(FPItems.Sheep) !== -1))
            return true;
        return false;
    }
}
class FPCommandFactory {
    setClient(clientID) { }
    setTeam(teamID) { }
    getCommandList() {
        return [FPActions.MoveCabbage,
            FPActions.MoveFarmer,
            FPActions.MoveWolf,
            FPActions.MoveSheep];
    }
    getCommand(c) {
        return new _server_Command__WEBPACK_IMPORTED_MODULE_2__["Command"](c, 0, 0);
    }
}
class FPScenario extends _server_Scenario__WEBPACK_IMPORTED_MODULE_3__["TurnBasedScenario"] {
    constructor() {
        let data = new FPState();
        data.load({ clients: 1, leftBank: [FPItems.Sheep, FPItems.Wolf, FPItems.Cabbage], rightBank: [], farmerOnLeftBank: true });
        super(new FPModel(), data, new _server_client_ClientController__WEBPACK_IMPORTED_MODULE_4__["ClientController"](1, new FPCommandFactory()));
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: NodeServer, AIClientConnection, ClientConnection, ClientController, LocalServerConnection, RandomAIClient, ScenarioSaveData, GameModel, Command, FPScenario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server_NodeServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/NodeServer */ "./src/server/NodeServer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeServer", function() { return _server_NodeServer__WEBPACK_IMPORTED_MODULE_0__["NodeServer"]; });

/* harmony import */ var _server_client_ClientConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server/client/ClientConnection */ "./src/server/client/ClientConnection.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AIClientConnection", function() { return _server_client_ClientConnection__WEBPACK_IMPORTED_MODULE_1__["AIClientConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientConnection", function() { return _server_client_ClientConnection__WEBPACK_IMPORTED_MODULE_1__["ClientConnection"]; });

/* harmony import */ var _server_client_ClientController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/client/ClientController */ "./src/server/client/ClientController.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientController", function() { return _server_client_ClientController__WEBPACK_IMPORTED_MODULE_2__["ClientController"]; });

/* harmony import */ var _server_client_LocalServerConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server/client/LocalServerConnection */ "./src/server/client/LocalServerConnection.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalServerConnection", function() { return _server_client_LocalServerConnection__WEBPACK_IMPORTED_MODULE_3__["LocalServerConnection"]; });

/* harmony import */ var _server_client_RandomAIClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server/client/RandomAIClient */ "./src/server/client/RandomAIClient.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RandomAIClient", function() { return _server_client_RandomAIClient__WEBPACK_IMPORTED_MODULE_4__["RandomAIClient"]; });

/* harmony import */ var _server_ScenarioData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server/ScenarioData */ "./src/server/ScenarioData.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScenarioSaveData", function() { return _server_ScenarioData__WEBPACK_IMPORTED_MODULE_5__["ScenarioSaveData"]; });

/* harmony import */ var _server_GameModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server/GameModel */ "./src/server/GameModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameModel", function() { return _server_GameModel__WEBPACK_IMPORTED_MODULE_6__["GameModel"]; });

/* harmony import */ var _server_Command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server/Command */ "./src/server/Command.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return _server_Command__WEBPACK_IMPORTED_MODULE_7__["Command"]; });

/* harmony import */ var _FarmerPuzzle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FarmerPuzzle */ "./src/FarmerPuzzle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FPScenario", function() { return _FarmerPuzzle__WEBPACK_IMPORTED_MODULE_8__["FPScenario"]; });













/***/ }),

/***/ "./src/server/Command.ts":
/*!*******************************!*\
  !*** ./src/server/Command.ts ***!
  \*******************************/
/*! exports provided: Command */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
class Command {
    constructor(commandType, clientID, teamID) {
        this.commandType = commandType;
        this.clientID = clientID;
        this.teamID = teamID;
    }
}


/***/ }),

/***/ "./src/server/GameModel.ts":
/*!*********************************!*\
  !*** ./src/server/GameModel.ts ***!
  \*********************************/
/*! exports provided: GameModel, TurnBasedGameModel, SimultanousGameModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModel", function() { return GameModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnBasedGameModel", function() { return TurnBasedGameModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimultanousGameModel", function() { return SimultanousGameModel; });
class GameModel {
}
class TurnBasedGameModel extends GameModel {
}
class SimultanousGameModel extends GameModel {
}


/***/ }),

/***/ "./src/server/NodeServer.ts":
/*!**********************************!*\
  !*** ./src/server/NodeServer.ts ***!
  \**********************************/
/*! exports provided: NodeServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeServer", function() { return NodeServer; });
/* harmony import */ var _Server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Server */ "./src/server/Server.ts");
const fs = __webpack_require__(/*! fs */ "fs");

class NodeServer extends _Server__WEBPACK_IMPORTED_MODULE_0__["Server"] {
    constructor() {
        super(...arguments);
        this._ticks = 0;
        this._maxTicks = 1000;
    }
    run() {
        if (!this.scenario.ready)
            throw new Error("Cannot run server as scenario is not ready");
        if (!this.scenario.created)
            this.scenario.create();
        while (!this.scenario.ended && (this._ticks < this._maxTicks)) {
            this.scenario.update();
            this._ticks++;
        }
        return true;
    }
    saveState() {
        fs.writeFile("data.out", JSON.stringify(this.scenario.getSaveData()), function (err) {
            if (err)
                return console.log(err);
        });
    }
}


/***/ }),

/***/ "./src/server/Scenario.ts":
/*!********************************!*\
  !*** ./src/server/Scenario.ts ***!
  \********************************/
/*! exports provided: Scenario, TurnBasedScenario, SimultanousScenario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scenario", function() { return Scenario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnBasedScenario", function() { return TurnBasedScenario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimultanousScenario", function() { return SimultanousScenario; });
/* harmony import */ var _client_ClientConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client/ClientConnection */ "./src/server/client/ClientConnection.ts");

class Scenario {
    constructor(gameModel, data, clients) {
        this._created = false;
        this._gameModel = gameModel;
        this._data = data;
        this._clients = clients;
    }
    get ended() { return this._ended; }
    get ready() { return this._clients.remainingSlots === 0; }
    get created() { return this._created; }
    get clients() { return this._clients; }
    get gameModel() { return this._gameModel; }
    get data() { return this._data; }
    create() {
        this.clients.createScenario(this._data, this._gameModel);
        this._created = true;
    }
    getSaveData() {
        return this._data.save();
    }
    addClient(client) {
        return this._clients.addClient(client);
    }
    addAITeam(ai) {
        this._clients.addClient(new _client_ClientConnection__WEBPACK_IMPORTED_MODULE_0__["AIClientConnection"](this._clients.nextClient, this._clients.nextTeam, ai));
    }
}
class TurnBasedScenario extends Scenario {
    update() {
        if (!this.ended) {
            this.gameModel.applyCommands(this.data, this.clients.getCommandsOfClient(this.data.getCurrentPlayer()));
            if (this.gameModel.goalTest(this.data))
                this._ended = true;
            this.data.moveToNextPlayer();
            this.clients.sendDataUpdate(this.data);
        }
    }
}
class SimultanousScenario extends Scenario {
    update() {
        if (!this.ended) {
            let commands = this.clients.getCommands();
            this.gameModel.applyCommands(this.data, commands);
            if (this.gameModel.goalTest(this.data))
                this._ended = true;
            this.clients.sendDataUpdate(this.data);
        }
    }
}


/***/ }),

/***/ "./src/server/ScenarioData.ts":
/*!************************************!*\
  !*** ./src/server/ScenarioData.ts ***!
  \************************************/
/*! exports provided: ScenarioSaveData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScenarioSaveData", function() { return ScenarioSaveData; });
class ScenarioSaveData {
}


/***/ }),

/***/ "./src/server/Server.ts":
/*!******************************!*\
  !*** ./src/server/Server.ts ***!
  \******************************/
/*! exports provided: Server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
class Server {
    loadScenario(scenario) {
        this.scenario = scenario;
        if (this.scenario.ready)
            this.scenario.create();
    }
}


/***/ }),

/***/ "./src/server/client/ClientConnection.ts":
/*!***********************************************!*\
  !*** ./src/server/client/ClientConnection.ts ***!
  \***********************************************/
/*! exports provided: ClientConnection, LocalClientConnection, AIClientConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientConnection", function() { return ClientConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalClientConnection", function() { return LocalClientConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIClientConnection", function() { return AIClientConnection; });
class ClientConnection {
    constructor(clientID, teamID) {
        this._isObserver = false;
        this.clientID = clientID;
        this.teamID = teamID;
    }
    get isObserver() { return this._isObserver; }
}
class LocalClientConnection extends ClientConnection {
    constructor(clientID, teamID, client) {
        super(clientID, teamID);
        this._local = client;
    }
    createScenario(data, gameModel) { }
    sendDataUpdate(data) { }
    grabCommands(commandFactory) {
        let a = this._commandsBuffer;
        this._commandsBuffer = [];
        return a;
    }
    recieveCommand(command) {
        this._commandsBuffer.push(command);
    }
}
class AIClientConnection extends ClientConnection {
    constructor(clientID, teamID, client) {
        super(clientID, teamID);
        this._ai = client;
    }
    createScenario(data, gameModel) {
        this._data = data;
        this._ai.create(this.clientID, this.teamID, gameModel);
    }
    sendDataUpdate(data) {
        this._data = data;
    }
    grabCommands(commandFactory) {
        commandFactory.setClient(this.clientID);
        commandFactory.setTeam(this.teamID);
        return this._ai.update(this._data, commandFactory);
    }
}


/***/ }),

/***/ "./src/server/client/ClientController.ts":
/*!***********************************************!*\
  !*** ./src/server/client/ClientController.ts ***!
  \***********************************************/
/*! exports provided: ClientController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientController", function() { return ClientController; });
class ClientController {
    constructor(maxClients, commandFactory) {
        this._clients = [];
        this._clientsCount = 0;
        this._clients = new Array(maxClients);
        this.commandFactory = commandFactory;
    }
    get clientsCount() { return this._clientsCount; }
    get maxClients() { return this._clients.length; }
    get remainingSlots() { return this._clients.length - this._clientsCount; }
    get nextClient() {
        let next = 0;
        for (let i = 0; i < this._clients.length; i++)
            if (this._clients[i])
                if (this._clients[i].clientID === next)
                    next++;
        return next;
    }
    get nextTeam() {
        let next = 0;
        for (let i = 0; i < this._clients.length; i++)
            if (this._clients[i])
                if (this._clients[i].teamID === next)
                    next++;
        return next;
    }
    addClient(client) {
        for (let i = 0; i < this._clientsCount; i++)
            if (this._clients[i].clientID === client.clientID)
                return false;
        if (this._clientsCount === this._clients.length)
            return false;
        this._clients[this._clientsCount] = client;
        this._clientsCount++;
        return true;
    }
    createScenario(data, gameModel) {
        for (let i = 0, len = this._clientsCount; i < len; i++)
            this._clients[i].createScenario(data, gameModel);
    }
    sendDataUpdate(data, clientToAct) {
        for (let i = 0, len = this._clientsCount; i < len; i++)
            this._clients[i].sendDataUpdate(data);
    }
    getCommands() {
        let commands = [];
        for (let i = 0, len = this._clientsCount; i < len; i++) {
            if (!this._clients[i].isObserver)
                commands = commands.concat(this._clients[i].grabCommands(this.commandFactory));
        }
        return commands;
    }
    getCommandsOfClient(clientIndex) {
        if (!this._clients[clientIndex].isObserver)
            return this._clients[clientIndex].grabCommands(this.commandFactory);
    }
}


/***/ }),

/***/ "./src/server/client/LocalServerConnection.ts":
/*!****************************************************!*\
  !*** ./src/server/client/LocalServerConnection.ts ***!
  \****************************************************/
/*! exports provided: LocalServerConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalServerConnection", function() { return LocalServerConnection; });
class LocalServerConnection {
}


/***/ }),

/***/ "./src/server/client/RandomAIClient.ts":
/*!*********************************************!*\
  !*** ./src/server/client/RandomAIClient.ts ***!
  \*********************************************/
/*! exports provided: RandomAIClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomAIClient", function() { return RandomAIClient; });
class RandomAIClient {
    create(clientID, teamID, gameModel) {
        this._gameModel = gameModel;
    }
    update(data, commandFactory) {
        let list = this._gameModel.stateActionMapping(data);
        if (list.length > 0) {
            let id = Math.round(Math.random() * list.length - 1);
            return commandFactory.getCommand(list[id]);
        }
        return null;
    }
    scenarioEnded(data) {
    }
}


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNlYmxhZGVTZXJ2ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1c2VibGFkZVNlcnZlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdXNlYmxhZGVTZXJ2ZXIvLi9zcmMvRmFybWVyUHV6emxlLnRzIiwid2VicGFjazovL2Z1c2VibGFkZVNlcnZlci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9mdXNlYmxhZGVTZXJ2ZXIvLi9zcmMvc2VydmVyL0NvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vZnVzZWJsYWRlU2VydmVyLy4vc3JjL3NlcnZlci9HYW1lTW9kZWwudHMiLCJ3ZWJwYWNrOi8vZnVzZWJsYWRlU2VydmVyLy4vc3JjL3NlcnZlci9Ob2RlU2VydmVyLnRzIiwid2VicGFjazovL2Z1c2VibGFkZVNlcnZlci8uL3NyYy9zZXJ2ZXIvU2NlbmFyaW8udHMiLCJ3ZWJwYWNrOi8vZnVzZWJsYWRlU2VydmVyLy4vc3JjL3NlcnZlci9TY2VuYXJpb0RhdGEudHMiLCJ3ZWJwYWNrOi8vZnVzZWJsYWRlU2VydmVyLy4vc3JjL3NlcnZlci9TZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vZnVzZWJsYWRlU2VydmVyLy4vc3JjL3NlcnZlci9jbGllbnQvQ2xpZW50Q29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly9mdXNlYmxhZGVTZXJ2ZXIvLi9zcmMvc2VydmVyL2NsaWVudC9DbGllbnRDb250cm9sbGVyLnRzIiwid2VicGFjazovL2Z1c2VibGFkZVNlcnZlci8uL3NyYy9zZXJ2ZXIvY2xpZW50L0xvY2FsU2VydmVyQ29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly9mdXNlYmxhZGVTZXJ2ZXIvLi9zcmMvc2VydmVyL2NsaWVudC9SYW5kb21BSUNsaWVudC50cyIsIndlYnBhY2s6Ly9mdXNlYmxhZGVTZXJ2ZXIvZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7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WUFDbEQsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFPO0lBR3JCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7O0FDOUJELCtCIiwiZmlsZSI6ImZ1c2VibGFkZVNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVzZWJsYWRlU2VydmVyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1c2VibGFkZVNlcnZlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdXNlYmxhZGVTZXJ2ZXJcIl0gPSBmYWN0b3J5KCk7XG59KShnbG9iYWwsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgVHVybkJhc2VkU2NlbmFyaW9EYXRhLCBTY2VuYXJpb1NhdmVEYXRhIH0gZnJvbSBcIi4vc2VydmVyL1NjZW5hcmlvRGF0YVwiO1xuaW1wb3J0IHsgVHVybkJhc2VkR2FtZU1vZGVsIH0gZnJvbSBcIi4vc2VydmVyL0dhbWVNb2RlbFwiO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCIuL3NlcnZlci9Db21tYW5kXCI7XG5pbXBvcnQgeyBDb21tYW5kRmFjdG9yeSB9IGZyb20gXCIuL3NlcnZlci9Db21tYW5kRmFjdG9yeVwiO1xuaW1wb3J0IHsgVHVybkJhc2VkU2NlbmFyaW8gfSBmcm9tIFwiLi9zZXJ2ZXIvU2NlbmFyaW9cIjtcbmltcG9ydCB7IENsaWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi9zZXJ2ZXIvY2xpZW50L0NsaWVudENvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGVudW0gRlBJdGVtc1xue1xuICAgIFdvbGYsXG4gICAgU2hlZXAsXG4gICAgQ2FiYmFnZVxufVxuXG5cbmV4cG9ydCBlbnVtIEZQQWN0aW9uc1xue1xuICAgIE1vdmVXb2xmLFxuICAgIE1vdmVDYWJiYWdlLFxuICAgIE1vdmVTaGVlcCxcbiAgICBNb3ZlRmFybWVyLFxufVxuXG5leHBvcnQgY2xhc3MgRlBTdGF0ZSBpbXBsZW1lbnRzIFR1cm5CYXNlZFNjZW5hcmlvRGF0YTxGUFNhdmU+XG57XG4gICAgbGVmdEJhbms6IEZQSXRlbXNbXTtcbiAgICByaWdodEJhbms6IEZQSXRlbXNbXTtcbiAgICBmYXJtZXJPbkxlZnRCYW5rOiBib29sZWFuO1xuXG4gICAgbG9hZChzYXZlOiBGUFNhdmUpXG4gICAge1xuICAgICAgICB0aGlzLmxlZnRCYW5rID0gc2F2ZS5sZWZ0QmFuay5zbGljZSgpO1xuICAgICAgICB0aGlzLnJpZ2h0QmFuayA9IHNhdmUucmlnaHRCYW5rLnNsaWNlKCk7XG4gICAgICAgIHRoaXMuZmFybWVyT25MZWZ0QmFuayA9IHNhdmUuZmFybWVyT25MZWZ0QmFuaztcbiAgICB9XG5cbiAgICBjbG9uZUZyb20oc291cmNlOiBGUFN0YXRlKVxuICAgIHtcbiAgICAgICAgdGhpcy5sZWZ0QmFuayA9IHNvdXJjZS5sZWZ0QmFuay5zbGljZSgpO1xuICAgICAgICB0aGlzLnJpZ2h0QmFuayA9IHNvdXJjZS5yaWdodEJhbmsuc2xpY2UoKTtcbiAgICAgICAgdGhpcy5mYXJtZXJPbkxlZnRCYW5rID0gc291cmNlLmZhcm1lck9uTGVmdEJhbms7XG4gICAgfVxuXG4gICAgc2F2ZSgpOiBGUFNhdmVcbiAgICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGllbnRzOiAxLFxuICAgICAgICAgICAgbGVmdEJhbms6IHRoaXMubGVmdEJhbmssXG4gICAgICAgICAgICByaWdodEJhbms6IHRoaXMucmlnaHRCYW5rLFxuICAgICAgICAgICAgZmFybWVyT25MZWZ0QmFuazogdGhpcy5mYXJtZXJPbkxlZnRCYW5rXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlcXVhbHMgKG90aGVyOiBGUFN0YXRlKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMubGVmdEJhbmsubGVuZ3RoICE9PSBvdGhlci5sZWZ0QmFuay5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZmFybWVyT25MZWZ0QmFuayAhPT0gb3RoZXIuZmFybWVyT25MZWZ0QmFuaylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpPTAsbGVuQT10aGlzLmxlZnRCYW5rLmxlbmd0aDtpPGxlbkE7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MCxsZW5CPW90aGVyLmxlZnRCYW5rLmxlbmd0aDtqPGxlbkI7aisrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy5sZWZ0QmFua1tpXSA9PT0gb3RoZXIubGVmdEJhbmtbal0pKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZvdW5kKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50UGxheWVyKCkgeyByZXR1cm4gMDsgfVxuICAgIG1vdmVUb05leHRQbGF5ZXIoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRlBTYXZlIGV4dGVuZHMgU2NlbmFyaW9TYXZlRGF0YVxue1xuICAgIGNsaWVudHM6IDE7XG4gICAgbGVmdEJhbms6IEZQSXRlbXNbXTtcbiAgICByaWdodEJhbms6IEZQSXRlbXNbXTtcbiAgICBmYXJtZXJPbkxlZnRCYW5rOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgRlBNb2RlbCBleHRlbmRzIFR1cm5CYXNlZEdhbWVNb2RlbDxGUFN0YXRlLCBGUFNhdmUsIEZQQWN0aW9ucz5cbntcbiAgICBzdGF0ZUFjdGlvbk1hcHBpbmc8RlBBY3Rpb25zPihzdGF0ZTogRlBTdGF0ZSk6IEZQQWN0aW9uc1tdXG4gICAge1xuICAgICAgICBpZiAodGhpcy5fY2hlY2tJZkZhaWx1cmVTdGF0ZShzdGF0ZSkpXG4gICAgICAgICAgICByZXR1cm4gW107XG5cbiAgICAgICAgbGV0IGxpc3QgPSBzdGF0ZS5mYXJtZXJPbkxlZnRCYW5rID8gc3RhdGUubGVmdEJhbmsgOiBzdGF0ZS5yaWdodEJhbms7XG4gICAgICAgIGxldCBhY3Rpb25MaXN0ID0gbmV3IEFycmF5KGxpc3QubGVuZ3RoKzEpO1xuICAgICAgICBhY3Rpb25MaXN0W2FjdGlvbkxpc3QubGVuZ3RoLTFdID0gRlBBY3Rpb25zLk1vdmVGYXJtZXI7XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49bGlzdC5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gRlBJdGVtcy5DYWJiYWdlKVxuICAgICAgICAgICAgICAgIGFjdGlvbkxpc3RbaV0gPSBGUEFjdGlvbnMuTW92ZUNhYmJhZ2U7XG4gICAgICAgICAgICBlbHNlIGlmIChsaXN0W2ldID09PSBGUEl0ZW1zLlNoZWVwKVxuICAgICAgICAgICAgICAgIGFjdGlvbkxpc3RbaV0gPSBGUEFjdGlvbnMuTW92ZVNoZWVwO1xuICAgICAgICAgICAgZWxzZSBpZiAobGlzdFtpXSA9PT0gRlBJdGVtcy5Xb2xmKVxuICAgICAgICAgICAgICAgIGFjdGlvbkxpc3RbaV0gPSBGUEFjdGlvbnMuTW92ZVdvbGY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aW9uTGlzdDtcbiAgICB9XG5cbiAgICBhcHBseUNvbW1hbmRzKHN0YXRlOiBGUFN0YXRlLCBhY3Rpb246IENvbW1hbmQ8RlBBY3Rpb25zPik6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmICghYWN0aW9uKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29tbWFuZCBzdWJtaXR0ZWQgd2FzIG51bGxcIik7XG4gICAgICAgIGlmIChhY3Rpb24gaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3Qgc3VibWl0IGEgc2luZ2xlIGNvbW1hbmQgYXMgYW4gYWN0aW9uIChub3QgYW4gYXJyYXkpXCIpO1xuICAgICAgICBpZiAoYWN0aW9uLmNvbW1hbmRUeXBlID09PSBGUEFjdGlvbnMuTW92ZUZhcm1lcilcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhdGUubGVmdEJhbmsgPSBzdGF0ZS5sZWZ0QmFuaztcbiAgICAgICAgICAgIHN0YXRlLnJpZ2h0QmFuayA9IHN0YXRlLnJpZ2h0QmFuayxcbiAgICAgICAgICAgIHN0YXRlLmZhcm1lck9uTGVmdEJhbmsgPSAhc3RhdGUuZmFybWVyT25MZWZ0QmFuaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVtOiBGUEl0ZW1zO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5jb21tYW5kVHlwZSA9PT0gRlBBY3Rpb25zLk1vdmVDYWJiYWdlKVxuICAgICAgICAgICAgICAgIGl0ZW0gPSBGUEl0ZW1zLkNhYmJhZ2U7XG4gICAgICAgICAgICBlbHNlIGlmIChhY3Rpb24uY29tbWFuZFR5cGUgPT09IEZQQWN0aW9ucy5Nb3ZlU2hlZXApXG4gICAgICAgICAgICAgICAgaXRlbSA9IEZQSXRlbXMuU2hlZXA7XG4gICAgICAgICAgICBlbHNlIGlmIChhY3Rpb24uY29tbWFuZFR5cGUgPT09IEZQQWN0aW9ucy5Nb3ZlV29sZilcbiAgICAgICAgICAgICAgICBpdGVtID0gRlBJdGVtcy5Xb2xmO1xuXG4gICAgICAgICAgICBsZXQgbmV3TGVmdEJhbmsgPSBbXTtcbiAgICAgICAgICAgIGxldCBuZXdSaWdodEJhbmsgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MCxsZW49c3RhdGUubGVmdEJhbmsubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUubGVmdEJhbmtbaV0gIT09IGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIG5ld0xlZnRCYW5rLnB1c2goc3RhdGUubGVmdEJhbmtbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaT0wLGxlbj1zdGF0ZS5yaWdodEJhbmsubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmlnaHRCYW5rW2ldICE9PSBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBuZXdSaWdodEJhbmsucHVzaChzdGF0ZS5yaWdodEJhbmtbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlLmZhcm1lck9uTGVmdEJhbmspXG4gICAgICAgICAgICAgICAgbmV3UmlnaHRCYW5rLnB1c2goaXRlbSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbmV3TGVmdEJhbmsucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHN0YXRlLmxlZnRCYW5rID0gbmV3TGVmdEJhbms7XG4gICAgICAgICAgICBzdGF0ZS5yaWdodEJhbmsgPSBuZXdSaWdodEJhbms7XG4gICAgICAgICAgICBzdGF0ZS5mYXJtZXJPbkxlZnRCYW5rID0gIXN0YXRlLmZhcm1lck9uTGVmdEJhbms7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb2FsVGVzdChzdGF0ZTogRlBTdGF0ZSk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmICh0aGlzLl9jaGVja0lmRmFpbHVyZVN0YXRlKHN0YXRlKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gc3RhdGUubGVmdEJhbmsubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIGhldXJpc3RpYyhzdGF0ZTogRlBTdGF0ZSlcbiAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5sZWZ0QmFuay5sZW5ndGgqMTAwMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja0lmRmFpbHVyZVN0YXRlKEZhcm1lclB1enpsZVN0YXRlOiBGUFN0YXRlKVxuICAgIHtcbiAgICAgICAgaWYgKEZhcm1lclB1enpsZVN0YXRlLmZhcm1lck9uTGVmdEJhbmspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoRmFybWVyUHV6emxlU3RhdGUucmlnaHRCYW5rLmluZGV4T2YoRlBJdGVtcy5Xb2xmKSAhPT0gLTEgJiYgRmFybWVyUHV6emxlU3RhdGUucmlnaHRCYW5rLmluZGV4T2YoRlBJdGVtcy5TaGVlcCkgIT09IC0xKSBcbiAgICAgICAgICAgICAgICB8fCAoRmFybWVyUHV6emxlU3RhdGUucmlnaHRCYW5rLmluZGV4T2YoRlBJdGVtcy5DYWJiYWdlKSAhPT0gLTEgJiYgRmFybWVyUHV6emxlU3RhdGUucmlnaHRCYW5rLmluZGV4T2YoRlBJdGVtcy5TaGVlcCkgIT09IC0xKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoRmFybWVyUHV6emxlU3RhdGUubGVmdEJhbmsuaW5kZXhPZihGUEl0ZW1zLldvbGYpICE9PSAtMSAmJiBGYXJtZXJQdXp6bGVTdGF0ZS5sZWZ0QmFuay5pbmRleE9mKEZQSXRlbXMuU2hlZXApICE9PSAtMSkgXG4gICAgICAgICAgICB8fCAoRmFybWVyUHV6emxlU3RhdGUubGVmdEJhbmsuaW5kZXhPZihGUEl0ZW1zLkNhYmJhZ2UpICE9PSAtMSAmJiBGYXJtZXJQdXp6bGVTdGF0ZS5sZWZ0QmFuay5pbmRleE9mKEZQSXRlbXMuU2hlZXApICE9PSAtMSkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZQQ29tbWFuZEZhY3RvcnkgaW1wbGVtZW50cyBDb21tYW5kRmFjdG9yeTxGUEFjdGlvbnM+XG57XG4gICAgc2V0Q2xpZW50KGNsaWVudElEOiBudW1iZXIpOiB2b2lkIHsgfVxuICAgIHNldFRlYW0odGVhbUlEOiBudW1iZXIpOiB2b2lkIHsgfVxuICAgIGdldENvbW1hbmRMaXN0KCk6IG51bWJlcltdXG4gICAge1xuICAgICAgICByZXR1cm4gW0ZQQWN0aW9ucy5Nb3ZlQ2FiYmFnZSxcbiAgICAgICAgICAgICAgICBGUEFjdGlvbnMuTW92ZUZhcm1lcixcbiAgICAgICAgICAgICAgICBGUEFjdGlvbnMuTW92ZVdvbGYsXG4gICAgICAgICAgICAgICAgRlBBY3Rpb25zLk1vdmVTaGVlcF07XG4gICAgfVxuICAgIGdldENvbW1hbmQoYzogbnVtYmVyKTogQ29tbWFuZDxGUEFjdGlvbnM+XG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IENvbW1hbmQ8RlBBY3Rpb25zPihjLCAwLCAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGUFNjZW5hcmlvIGV4dGVuZHMgVHVybkJhc2VkU2NlbmFyaW88RlBNb2RlbCwgRlBTdGF0ZSwgRlBTYXZlLCBGUEFjdGlvbnM+XG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRlBTdGF0ZSgpO1xuICAgICAgICBkYXRhLmxvYWQoe2NsaWVudHM6IDEsIGxlZnRCYW5rOiBbIEZQSXRlbXMuU2hlZXAsIEZQSXRlbXMuV29sZiwgRlBJdGVtcy5DYWJiYWdlXSwgcmlnaHRCYW5rOiBbIF0sIGZhcm1lck9uTGVmdEJhbms6IHRydWV9KTtcbiAgICAgICAgc3VwZXIobmV3IEZQTW9kZWwoKSwgZGF0YSwgbmV3IENsaWVudENvbnRyb2xsZXI8RlBTdGF0ZSwgRlBTYXZlLCBGUEFjdGlvbnM+KDEsIG5ldyBGUENvbW1hbmRGYWN0b3J5KCkpKVxuICAgIH1cbn1cbiIsImV4cG9ydCB7IE5vZGVTZXJ2ZXIgfSBmcm9tIFwiLi9zZXJ2ZXIvTm9kZVNlcnZlclwiO1xuZXhwb3J0IHsgQUlDbGllbnRDb25uZWN0aW9uIH0gZnJvbSBcIi4vc2VydmVyL2NsaWVudC9DbGllbnRDb25uZWN0aW9uXCI7XG5cbmV4cG9ydCB7IEFJQ2xpZW50IH0gZnJvbSBcIi4vc2VydmVyL2NsaWVudC9BSUNsaWVudFwiO1xuZXhwb3J0IHsgQ2xpZW50Q29ubmVjdGlvbiB9IGZyb20gXCIuL3NlcnZlci9jbGllbnQvQ2xpZW50Q29ubmVjdGlvblwiXG5leHBvcnQgeyBDbGllbnRDb250cm9sbGVyIH0gZnJvbSBcIi4vc2VydmVyL2NsaWVudC9DbGllbnRDb250cm9sbGVyXCJcbmV4cG9ydCB7IExvY2FsU2VydmVyQ29ubmVjdGlvbiB9IGZyb20gXCIuL3NlcnZlci9jbGllbnQvTG9jYWxTZXJ2ZXJDb25uZWN0aW9uXCJcbmV4cG9ydCB7IFJhbmRvbUFJQ2xpZW50IH0gZnJvbSBcIi4vc2VydmVyL2NsaWVudC9SYW5kb21BSUNsaWVudFwiXG5cbmV4cG9ydCB7IFNjZW5hcmlvRGF0YSwgU2NlbmFyaW9TYXZlRGF0YSB9IGZyb20gXCIuL3NlcnZlci9TY2VuYXJpb0RhdGFcIjtcbmV4cG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuL3NlcnZlci9HYW1lTW9kZWxcIjtcbmV4cG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi9zZXJ2ZXIvQ29tbWFuZFwiO1xuZXhwb3J0IHsgQ29tbWFuZEZhY3RvcnkgfSBmcm9tIFwiLi9zZXJ2ZXIvQ29tbWFuZEZhY3RvcnlcIjtcblxuZXhwb3J0IHsgRlBTY2VuYXJpbyB9IGZyb20gXCIuL0Zhcm1lclB1enpsZVwiIiwiZXhwb3J0IGNsYXNzIENvbW1hbmQ8VD5cbntcbiAgICBjb21tYW5kVHlwZTogbnVtYmVyO1xuICAgIGNsaWVudElEOiBudW1iZXI7XG4gICAgdGVhbUlEOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb21tYW5kVHlwZTogbnVtYmVyLCBjbGllbnRJRDogbnVtYmVyLCB0ZWFtSUQ6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuY29tbWFuZFR5cGUgPSBjb21tYW5kVHlwZTtcbiAgICAgICAgdGhpcy5jbGllbnRJRCA9IGNsaWVudElEO1xuICAgICAgICB0aGlzLnRlYW1JRCA9IHRlYW1JRDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCIuL0NvbW1hbmRcIjtcblxuaW1wb3J0IHsgU2NlbmFyaW9EYXRhLCBTY2VuYXJpb1NhdmVEYXRhLCBUdXJuQmFzZWRTY2VuYXJpb0RhdGEgfSBmcm9tIFwic2VydmVyL1NjZW5hcmlvRGF0YVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2FtZU1vZGVsPEQgZXh0ZW5kcyBTY2VuYXJpb0RhdGE8Uz4sUyBleHRlbmRzIFNjZW5hcmlvU2F2ZURhdGEsIEM+XG57XG4gICAgYWJzdHJhY3QgZ29hbFRlc3QoZGF0YTogRCk6IGJvb2xlYW47XG4gICAgYWJzdHJhY3Qgc3RhdGVBY3Rpb25NYXBwaW5nKGRhdGE6IEQpOiBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFR1cm5CYXNlZEdhbWVNb2RlbDxEIGV4dGVuZHMgVHVybkJhc2VkU2NlbmFyaW9EYXRhPFM+LFMgZXh0ZW5kcyBTY2VuYXJpb1NhdmVEYXRhLCBDPiBleHRlbmRzIEdhbWVNb2RlbDxELFMsIEM+XG57XG4gICAgYWJzdHJhY3QgYXBwbHlDb21tYW5kcyhkYXRhOiBELCBjb21tYW5kOiBDb21tYW5kPEM+IHwgIENvbW1hbmQ8Qz5bXSk6IHZvaWRcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNpbXVsdGFub3VzR2FtZU1vZGVsPEQgZXh0ZW5kcyBTY2VuYXJpb0RhdGE8Uz4sUyBleHRlbmRzIFNjZW5hcmlvU2F2ZURhdGEsIEM+IGV4dGVuZHMgR2FtZU1vZGVsPEQsUywgQz5cbntcbiAgICBhYnN0cmFjdCBhcHBseUNvbW1hbmRzKGRhdGE6IEQsIGNvbW1hbmQ6IENvbW1hbmQ8Qz4gfCAgQ29tbWFuZDxDPltdKTogdm9pZFxufSIsImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcIi4vU2VydmVyXCI7XG5cbmV4cG9ydCBjbGFzcyBOb2RlU2VydmVyIGV4dGVuZHMgU2VydmVyXG57XG4gICAgcHJpdmF0ZSBfdGlja3M6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfbWF4VGlja3M6IG51bWJlciA9IDEwMDA7XG5cbiAgICBydW4oKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjZW5hcmlvLnJlYWR5KVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJ1biBzZXJ2ZXIgYXMgc2NlbmFyaW8gaXMgbm90IHJlYWR5XCIpO1xuICAgICAgICBpZiAoIXRoaXMuc2NlbmFyaW8uY3JlYXRlZClcbiAgICAgICAgICAgIHRoaXMuc2NlbmFyaW8uY3JlYXRlKCk7XG4gICAgICAgIHdoaWxlKCF0aGlzLnNjZW5hcmlvLmVuZGVkICYmICh0aGlzLl90aWNrcyA8IHRoaXMuX21heFRpY2tzKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zY2VuYXJpby51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuX3RpY2tzKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHNhdmVTdGF0ZSgpXG4gICAge1xuICAgICAgICBmcy53cml0ZUZpbGUoXCJkYXRhLm91dFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnNjZW5hcmlvLmdldFNhdmVEYXRhKCkpLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGlmKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7IFxuICAgIH1cblxufSIsImltcG9ydCB7IENsaWVudENvbnRyb2xsZXIgfSBmcm9tIFwic2VydmVyL2NsaWVudC9DbGllbnRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHYW1lTW9kZWwsIFNpbXVsdGFub3VzR2FtZU1vZGVsLCBUdXJuQmFzZWRHYW1lTW9kZWwgfSBmcm9tIFwiLi9HYW1lTW9kZWxcIjtcbmltcG9ydCB7IFNjZW5hcmlvRGF0YSwgU2NlbmFyaW9TYXZlRGF0YSwgVHVybkJhc2VkU2NlbmFyaW9EYXRhIH0gZnJvbSBcInNlcnZlci9TY2VuYXJpb0RhdGFcIjtcbmltcG9ydCB7IENsaWVudENvbm5lY3Rpb24sIEFJQ2xpZW50Q29ubmVjdGlvbiB9IGZyb20gXCIuL2NsaWVudC9DbGllbnRDb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBBSUNsaWVudCB9IGZyb20gXCIuL2NsaWVudC9BSUNsaWVudFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2NlbmFyaW88RyBleHRlbmRzIEdhbWVNb2RlbDxELFMsQz4sIEQgZXh0ZW5kcyBTY2VuYXJpb0RhdGE8Uz4sIFMgZXh0ZW5kcyBTY2VuYXJpb1NhdmVEYXRhLCBDPlxue1xuICAgIHByaXZhdGUgX2dhbWVNb2RlbDogRztcbiAgICBwcml2YXRlIF9kYXRhOiBEO1xuICAgIHByaXZhdGUgX2NsaWVudHM6IENsaWVudENvbnRyb2xsZXI8RCxTLEM+XG5cbiAgICBwcm90ZWN0ZWQgX2VuZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBkYXRhIFxuICAgICAqIEBwYXJhbSBnYW1lTW9kZWwgXG4gICAgICogQHBhcmFtIGNsaWVudHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihnYW1lTW9kZWw6IEcsIGRhdGE6IEQsIGNsaWVudHM6IENsaWVudENvbnRyb2xsZXI8RCxTLEM+KVxuICAgIHtcbiAgICAgICAgdGhpcy5fZ2FtZU1vZGVsID0gZ2FtZU1vZGVsO1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fY2xpZW50cyA9IGNsaWVudHM7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCkgeyByZXR1cm4gdGhpcy5fZW5kZWQ7IH1cbiAgICBnZXQgcmVhZHkoKSB7IHJldHVybiB0aGlzLl9jbGllbnRzLnJlbWFpbmluZ1Nsb3RzID09PSAwOyB9XG4gICAgZ2V0IGNyZWF0ZWQoKSB7IHJldHVybiB0aGlzLl9jcmVhdGVkOyB9XG4gICAgcHJvdGVjdGVkIGdldCBjbGllbnRzKCkgeyByZXR1cm4gdGhpcy5fY2xpZW50czsgfVxuICAgIHByb3RlY3RlZCBnZXQgZ2FtZU1vZGVsKCkgeyByZXR1cm4gdGhpcy5fZ2FtZU1vZGVsOyB9XG4gICAgcHJvdGVjdGVkIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5fZGF0YTsgfVxuXG4gICAgYWJzdHJhY3QgdXBkYXRlKCk6IHZvaWRcblxuICAgIGNyZWF0ZSgpXG4gICAge1xuICAgICAgICB0aGlzLmNsaWVudHMuY3JlYXRlU2NlbmFyaW8odGhpcy5fZGF0YSwgdGhpcy5fZ2FtZU1vZGVsKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0U2F2ZURhdGEoKTogU1xuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuc2F2ZSgpXG4gICAgfVxuXG4gICAgYWRkQ2xpZW50KGNsaWVudDogQ2xpZW50Q29ubmVjdGlvbjxELFMsQz4pOiBib29sZWFuXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50cy5hZGRDbGllbnQoY2xpZW50KTtcbiAgICB9XG5cbiAgICBhZGRBSVRlYW0oYWk6IEFJQ2xpZW50PEQsUyxDPilcbiAgICB7XG4gICAgICAgIHRoaXMuX2NsaWVudHMuYWRkQ2xpZW50KG5ldyBBSUNsaWVudENvbm5lY3Rpb24odGhpcy5fY2xpZW50cy5uZXh0Q2xpZW50LHRoaXMuX2NsaWVudHMubmV4dFRlYW0sYWkpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUdXJuQmFzZWRTY2VuYXJpbzxHIGV4dGVuZHMgVHVybkJhc2VkR2FtZU1vZGVsPEQsUyxDPiwgRCBleHRlbmRzIFR1cm5CYXNlZFNjZW5hcmlvRGF0YTxTPiwgUyBleHRlbmRzIFNjZW5hcmlvU2F2ZURhdGEsIEM+IGV4dGVuZHMgU2NlbmFyaW88RywgRCwgUywgQz5cbntcbiAgICB1cGRhdGUoKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuZGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5hcHBseUNvbW1hbmRzKHRoaXMuZGF0YSwgdGhpcy5jbGllbnRzLmdldENvbW1hbmRzT2ZDbGllbnQodGhpcy5kYXRhLmdldEN1cnJlbnRQbGF5ZXIoKSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmdvYWxUZXN0KHRoaXMuZGF0YSkpXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kYXRhLm1vdmVUb05leHRQbGF5ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50cy5zZW5kRGF0YVVwZGF0ZSh0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2ltdWx0YW5vdXNTY2VuYXJpbzxHIGV4dGVuZHMgU2ltdWx0YW5vdXNHYW1lTW9kZWw8RCxTLEM+LCBEIGV4dGVuZHMgU2NlbmFyaW9EYXRhPFM+LCBTIGV4dGVuZHMgU2NlbmFyaW9TYXZlRGF0YSwgQz4gZXh0ZW5kcyBTY2VuYXJpbzxHLCBELCBTLCBDPlxue1xuICAgIHVwZGF0ZSgpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMuZW5kZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjb21tYW5kcyA9IHRoaXMuY2xpZW50cy5nZXRDb21tYW5kcygpXG4gICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5hcHBseUNvbW1hbmRzKHRoaXMuZGF0YSwgY29tbWFuZHMpXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lTW9kZWwuZ29hbFRlc3QodGhpcy5kYXRhKSlcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNsaWVudHMuc2VuZERhdGFVcGRhdGUodGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU2NlbmFyaW9EYXRhPFQgZXh0ZW5kcyBTY2VuYXJpb1NhdmVEYXRhPlxue1xuICAgIGxvYWQoc2F2ZURhdGE6IFQpOiB2b2lkO1xuXG4gICAgY2xvbmVGcm9tKGRhdGE6IFNjZW5hcmlvRGF0YTxUPik6IHZvaWQ7XG5cbiAgICBzYXZlKCk6IFQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2VuYXJpb1NhdmVEYXRhXG57XG4gICAgYWJzdHJhY3QgY2xpZW50czogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR1cm5CYXNlZFNjZW5hcmlvRGF0YTxUIGV4dGVuZHMgU2NlbmFyaW9TYXZlRGF0YT4gZXh0ZW5kcyBTY2VuYXJpb0RhdGE8VD5cbntcbiAgICBnZXRDdXJyZW50UGxheWVyKCk6IG51bWJlcjtcblxuICAgIG1vdmVUb05leHRQbGF5ZXIoKTogdm9pZDtcbn0iLCJpbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gXCIuL1NjZW5hcmlvXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZXJ2ZXJcbntcbiAgICBwcm90ZWN0ZWQgc2NlbmFyaW86IFNjZW5hcmlvPGFueSwgYW55LCBhbnksIGFueT47XG5cbiAgICBsb2FkU2NlbmFyaW8oc2NlbmFyaW86IFNjZW5hcmlvPGFueSwgYW55LCBhbnksIGFueT4pXG4gICAge1xuICAgICAgICB0aGlzLnNjZW5hcmlvID0gc2NlbmFyaW87XG4gICAgICAgIGlmICh0aGlzLnNjZW5hcmlvLnJlYWR5KVxuICAgICAgICAgICAgdGhpcy5zY2VuYXJpby5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBydW4oKTogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi4vQ29tbWFuZFwiO1xuaW1wb3J0IHsgQUlDbGllbnQgfSBmcm9tIFwiLi9BSUNsaWVudFwiO1xuaW1wb3J0IHsgU2NlbmFyaW9EYXRhLCBTY2VuYXJpb1NhdmVEYXRhIH0gZnJvbSBcInNlcnZlci9TY2VuYXJpb0RhdGFcIjtcbmltcG9ydCB7IENvbW1hbmRGYWN0b3J5IH0gZnJvbSBcInNlcnZlci9Db21tYW5kRmFjdG9yeVwiO1xuaW1wb3J0IHsgR2FtZU1vZGVsIH0gZnJvbSBcInNlcnZlci9HYW1lTW9kZWxcIjtcbmltcG9ydCB7IExvY2FsU2VydmVyQ29ubmVjdGlvbiB9IGZyb20gXCJMb2NhbFNlcnZlckNvbm5lY3Rpb25cIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENsaWVudENvbm5lY3Rpb248RCBleHRlbmRzIFNjZW5hcmlvRGF0YTxTPiwgUyBleHRlbmRzIFNjZW5hcmlvU2F2ZURhdGEsIEM+XG57XG4gICAgcHVibGljIHJlYWRvbmx5IGNsaWVudElEOiBudW1iZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IHRlYW1JRDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2lzT2JzZXJ2ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGFic3RyYWN0IHNlbmREYXRhVXBkYXRlKGRhdGE6IEQpOiB2b2lkO1xuICAgIGFic3RyYWN0IGdyYWJDb21tYW5kcyhjb21tYW5kRmFjdG9yeTogQ29tbWFuZEZhY3Rvcnk8Qz4pOiBDb21tYW5kPEM+W10gfCBDb21tYW5kPEM+XG4gICAgYWJzdHJhY3QgY3JlYXRlU2NlbmFyaW8oZGF0YTogRCwgZ2FtZU1vZGVsOiBHYW1lTW9kZWw8RCxTLEM+KTogdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElEOiBudW1iZXIsIHRlYW1JRDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5jbGllbnRJRCA9IGNsaWVudElEO1xuICAgICAgICB0aGlzLnRlYW1JRCA9IHRlYW1JRDtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGlzT2JzZXJ2ZXIoKSB7IHJldHVybiB0aGlzLl9pc09ic2VydmVyOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbENsaWVudENvbm5lY3Rpb248RCBleHRlbmRzIFNjZW5hcmlvRGF0YTxTPiwgUyBleHRlbmRzIFNjZW5hcmlvU2F2ZURhdGEsIEM+IGV4dGVuZHMgQ2xpZW50Q29ubmVjdGlvbjxELCBTLCBDPlxue1xuICAgIHByaXZhdGUgX2xvY2FsOiBMb2NhbFNlcnZlckNvbm5lY3Rpb247XG4gICAgcHJvdGVjdGVkIF9jb21tYW5kc0J1ZmZlcjogQ29tbWFuZDxDPltdO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50SUQ6IG51bWJlciwgdGVhbUlEOiBudW1iZXIsIGNsaWVudDogTG9jYWxTZXJ2ZXJDb25uZWN0aW9uKVxuICAgIHtcbiAgICAgICAgc3VwZXIoY2xpZW50SUQsIHRlYW1JRCk7XG4gICAgICAgIHRoaXMuX2xvY2FsID0gY2xpZW50O1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5hcmlvKGRhdGE6IEQsIGdhbWVNb2RlbDogR2FtZU1vZGVsPEQsUyxDPik6IHZvaWQge31cblxuICAgIHNlbmREYXRhVXBkYXRlKGRhdGE6IEQpOiB2b2lkICB7fVxuXG4gICAgZ3JhYkNvbW1hbmRzKGNvbW1hbmRGYWN0b3J5OiBDb21tYW5kRmFjdG9yeTxDPik6IENvbW1hbmQ8Qz4gfCBDb21tYW5kPEM+W11cbiAgICB7XG4gICAgICAgIGxldCBhID0gdGhpcy5fY29tbWFuZHNCdWZmZXI7XG4gICAgICAgIHRoaXMuX2NvbW1hbmRzQnVmZmVyID0gW107XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHJlY2lldmVDb21tYW5kKGNvbW1hbmQ6IENvbW1hbmQ8Qz4pXG4gICAge1xuICAgICAgICB0aGlzLl9jb21tYW5kc0J1ZmZlci5wdXNoKGNvbW1hbmQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFJQ2xpZW50Q29ubmVjdGlvbjxEIGV4dGVuZHMgU2NlbmFyaW9EYXRhPFM+LCBTIGV4dGVuZHMgU2NlbmFyaW9TYXZlRGF0YSwgQz4gZXh0ZW5kcyBDbGllbnRDb25uZWN0aW9uPEQsIFMsIEM+XG57XG4gICAgcHJpdmF0ZSBfYWk6IEFJQ2xpZW50PEQsIFMsIEM+O1xuICAgIHByaXZhdGUgX2RhdGE6IEQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnRJRDogbnVtYmVyLCB0ZWFtSUQ6IG51bWJlciwgY2xpZW50OiBBSUNsaWVudDxELCBTLCBDPilcbiAgICB7XG4gICAgICAgIHN1cGVyKGNsaWVudElELCB0ZWFtSUQpXG4gICAgICAgIHRoaXMuX2FpID0gY2xpZW50O1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5hcmlvKGRhdGE6IEQsIGdhbWVNb2RlbDogR2FtZU1vZGVsPEQsUyxDPik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9haS5jcmVhdGUodGhpcy5jbGllbnRJRCwgdGhpcy50ZWFtSUQsIGdhbWVNb2RlbClcbiAgICB9XG5cbiAgICBzZW5kRGF0YVVwZGF0ZShkYXRhOiBEKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgZ3JhYkNvbW1hbmRzKGNvbW1hbmRGYWN0b3J5OiBDb21tYW5kRmFjdG9yeTxDPik6IENvbW1hbmQ8Qz4gfCBDb21tYW5kPEM+W11cbiAgICB7XG4gICAgICAgIGNvbW1hbmRGYWN0b3J5LnNldENsaWVudCh0aGlzLmNsaWVudElEKTtcbiAgICAgICAgY29tbWFuZEZhY3Rvcnkuc2V0VGVhbSh0aGlzLnRlYW1JRCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9haS51cGRhdGUodGhpcy5fZGF0YSwgY29tbWFuZEZhY3RvcnkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDbGllbnRDb25uZWN0aW9uIH0gZnJvbSBcIi4vQ2xpZW50Q29ubmVjdGlvblwiO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCIuLi9Db21tYW5kXCI7XG5pbXBvcnQgeyBTY2VuYXJpb0RhdGEsIFNjZW5hcmlvU2F2ZURhdGEgfSBmcm9tIFwic2VydmVyL1NjZW5hcmlvRGF0YVwiO1xuaW1wb3J0IHsgR2FtZU1vZGVsIH0gZnJvbSBcInNlcnZlci9HYW1lTW9kZWxcIjtcbmltcG9ydCB7IENvbW1hbmRGYWN0b3J5IH0gZnJvbSBcInNlcnZlci9Db21tYW5kRmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgQ2xpZW50Q29udHJvbGxlcjxEIGV4dGVuZHMgU2NlbmFyaW9EYXRhPFM+LFMgZXh0ZW5kcyBTY2VuYXJpb1NhdmVEYXRhLEM+XG57XG4gICAgcHJpdmF0ZSBfY2xpZW50czogQ2xpZW50Q29ubmVjdGlvbjxELFMsQz5bXSA9IFtdO1xuICAgIHByaXZhdGUgX2NsaWVudHNDb3VudDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbW1hbmRGYWN0b3J5OiBDb21tYW5kRmFjdG9yeTxDPjtcblxuICAgIGNvbnN0cnVjdG9yKG1heENsaWVudHM6IG51bWJlciwgY29tbWFuZEZhY3Rvcnk6IENvbW1hbmRGYWN0b3J5PEM+KVxuICAgIHtcbiAgICAgICAgdGhpcy5fY2xpZW50cyA9IG5ldyBBcnJheShtYXhDbGllbnRzKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRmFjdG9yeSA9IGNvbW1hbmRGYWN0b3J5O1xuICAgIH1cblxuICAgIGdldCBjbGllbnRzQ291bnQoKSB7IHJldHVybiB0aGlzLl9jbGllbnRzQ291bnQ7IH1cbiAgICBnZXQgbWF4Q2xpZW50cygpIHsgcmV0dXJuIHRoaXMuX2NsaWVudHMubGVuZ3RoOyB9XG4gICAgZ2V0IHJlbWFpbmluZ1Nsb3RzKCkgeyByZXR1cm4gdGhpcy5fY2xpZW50cy5sZW5ndGggLSB0aGlzLl9jbGllbnRzQ291bnQ7IH1cbiAgICBnZXQgbmV4dENsaWVudCgpOiBudW1iZXIge1xuICAgICAgICBsZXQgbmV4dCA9IDA7XG4gICAgICAgIGZvciAobGV0IGk9MDtpPHRoaXMuX2NsaWVudHMubGVuZ3RoO2krKylcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbGllbnRzW2ldKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jbGllbnRzW2ldLmNsaWVudElEID09PSBuZXh0KVxuICAgICAgICAgICAgICAgICAgICBuZXh0KytcbiAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfVxuICAgIGdldCBuZXh0VGVhbSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgbmV4dCA9IDA7XG4gICAgICAgIGZvciAobGV0IGk9MDtpPHRoaXMuX2NsaWVudHMubGVuZ3RoO2krKylcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbGllbnRzW2ldKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jbGllbnRzW2ldLnRlYW1JRCA9PT0gbmV4dClcbiAgICAgICAgICAgICAgICAgICAgbmV4dCsrXG4gICAgICAgIHJldHVybiBuZXh0O1xuICAgIH1cblxuICAgIGFkZENsaWVudChjbGllbnQ6IENsaWVudENvbm5lY3Rpb248RCwgUywgQz4pOiBib29sZWFuXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpPTA7aTx0aGlzLl9jbGllbnRzQ291bnQ7aSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMuX2NsaWVudHNbaV0uY2xpZW50SUQgPT09IGNsaWVudC5jbGllbnRJRClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9jbGllbnRzQ291bnQgPT09IHRoaXMuX2NsaWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLl9jbGllbnRzW3RoaXMuX2NsaWVudHNDb3VudF0gPSBjbGllbnQ7XG4gICAgICAgIHRoaXMuX2NsaWVudHNDb3VudCsrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjcmVhdGVTY2VuYXJpbyhkYXRhOiBELCBnYW1lTW9kZWw6IEdhbWVNb2RlbDxELFMsQz4pOiB2b2lkXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXRoaXMuX2NsaWVudHNDb3VudDtpPGxlbjtpKyspXG4gICAgICAgICAgICB0aGlzLl9jbGllbnRzW2ldLmNyZWF0ZVNjZW5hcmlvKGRhdGEsIGdhbWVNb2RlbCk7XG4gICAgfVxuXG4gICAgc2VuZERhdGFVcGRhdGUoZGF0YTogRCwgY2xpZW50VG9BY3Q/OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXRoaXMuX2NsaWVudHNDb3VudDtpPGxlbjtpKyspXG4gICAgICAgICAgICB0aGlzLl9jbGllbnRzW2ldLnNlbmREYXRhVXBkYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIGdldENvbW1hbmRzKCk6IENvbW1hbmQ8Qz5bXVxuICAgIHtcbiAgICAgICAgbGV0IGNvbW1hbmRzID0gW107XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fY2xpZW50c0NvdW50O2k8bGVuO2krKykgLy9UT0RPOiBtaWdodCB3YW50IHRvIHJhbmRvbWlzZSBvcmRlciBpbiBjYXNlIHRoaXMgbGVhZHMgdG8gYmlhc1xuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NsaWVudHNbaV0uaXNPYnNlcnZlcilcbiAgICAgICAgICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdCh0aGlzLl9jbGllbnRzW2ldLmdyYWJDb21tYW5kcyh0aGlzLmNvbW1hbmRGYWN0b3J5KSk7Ly9UT0RPOiBwcm9iYWJseSBub3Qgd2hhdCBJIHdhbnQgd2l0aCBjb21tYW5kIGFuZCBjb21tYW5kW11cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgfVxuXG4gICAgZ2V0Q29tbWFuZHNPZkNsaWVudChjbGllbnRJbmRleDogbnVtYmVyKTogQ29tbWFuZDxDPiB8IENvbW1hbmQ8Qz5bXVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jbGllbnRzW2NsaWVudEluZGV4XS5pc09ic2VydmVyKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudHNbY2xpZW50SW5kZXhdLmdyYWJDb21tYW5kcyh0aGlzLmNvbW1hbmRGYWN0b3J5KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTG9jYWxTZXJ2ZXJDb25uZWN0aW9uXG57XG4gICAgXG59IiwiaW1wb3J0IHsgQUlDbGllbnQgfSBmcm9tIFwiLi9BSUNsaWVudFwiO1xuaW1wb3J0IHsgU2NlbmFyaW9EYXRhLCBTY2VuYXJpb1NhdmVEYXRhIH0gZnJvbSBcInNlcnZlci9TY2VuYXJpb0RhdGFcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCJzZXJ2ZXIvR2FtZU1vZGVsXCI7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcIi4uL0NvbW1hbmRcIjtcbmltcG9ydCB7IENvbW1hbmRGYWN0b3J5IH0gZnJvbSBcInNlcnZlci9Db21tYW5kRmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZG9tQUlDbGllbnQ8RCBleHRlbmRzIFNjZW5hcmlvRGF0YTxTPiwgUyBleHRlbmRzIFNjZW5hcmlvU2F2ZURhdGEsIEM+IGltcGxlbWVudHMgQUlDbGllbnQ8RCxTLEM+XG57XG4gICAgcHJpdmF0ZSBfZ2FtZU1vZGVsOiBHYW1lTW9kZWw8RCwgUywgQz47XG5cbiAgICBjcmVhdGUoY2xpZW50SUQ6IG51bWJlciwgdGVhbUlEOiBudW1iZXIsIGdhbWVNb2RlbDogR2FtZU1vZGVsPEQsUyxDPik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX2dhbWVNb2RlbCA9IGdhbWVNb2RlbDtcbiAgICB9XG5cbiAgICB1cGRhdGU8Qz4oZGF0YTogRCwgY29tbWFuZEZhY3Rvcnk6IENvbW1hbmRGYWN0b3J5PEM+KTogQ29tbWFuZDxDPltdIHwgQ29tbWFuZDxDPlxuICAgIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLl9nYW1lTW9kZWwuc3RhdGVBY3Rpb25NYXBwaW5nKGRhdGEpO1xuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBsaXN0Lmxlbmd0aC0xKVxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmRGYWN0b3J5LmdldENvbW1hbmQobGlzdFtpZF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNjZW5hcmlvRW5kZWQoZGF0YTogRCk6IHZvaWRcbiAgICB7XG5cbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==