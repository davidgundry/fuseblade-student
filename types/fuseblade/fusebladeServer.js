(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("GamesAIScenarioFactory", [], factory);
	else if(typeof exports === 'object')
		exports["GamesAIScenarioFactory"] = factory();
	else
		root["GamesAIScenarioFactory"] = factory();
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
/* harmony import */ var _server_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/GameModel */ "./src/server/GameModel.ts");
/* harmony import */ var _server_Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server/Command */ "./src/server/Command.ts");
/* harmony import */ var _server_Scenario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/Scenario */ "./src/server/Scenario.ts");
/* harmony import */ var _server_client_ClientController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server/client/ClientController */ "./src/server/client/ClientController.ts");




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
    clients() { return 1; }
    save() {
        return {
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
class FPSave {
}
class FPModel extends _server_GameModel__WEBPACK_IMPORTED_MODULE_0__["TurnBasedGameModel"] {
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
        return new _server_Command__WEBPACK_IMPORTED_MODULE_1__["Command"](c, 0, 0);
    }
}
class FPScenario extends _server_Scenario__WEBPACK_IMPORTED_MODULE_2__["TurnBasedScenario"] {
    constructor() {
        let data = new FPState();
        data.load({ leftBank: [FPItems.Sheep, FPItems.Wolf, FPItems.Cabbage], rightBank: [], farmerOnLeftBank: true });
        super(new FPModel(), data, new _server_client_ClientController__WEBPACK_IMPORTED_MODULE_3__["ClientController"](1, new FPCommandFactory()));
    }
}


/***/ }),

/***/ "./src/ScenarioFactory.ts":
/*!********************************!*\
  !*** ./src/ScenarioFactory.ts ***!
  \********************************/
/*! exports provided: ScenarioFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScenarioFactory", function() { return ScenarioFactory; });
/* harmony import */ var FarmerPuzzle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! FarmerPuzzle */ "./src/FarmerPuzzle.ts");
/* harmony import */ var fuseblade_FBScenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuseblade/FBScenario */ "./src/fuseblade/FBScenario.ts");


class ScenarioFactory {
    createFusebladeScenario(saveData) {
        return new fuseblade_FBScenario__WEBPACK_IMPORTED_MODULE_1__["FBScenario"](saveData);
    }
    createFarmerPuzzleScenario() {
        return new FarmerPuzzle__WEBPACK_IMPORTED_MODULE_0__["FPScenario"]();
    }
}


/***/ }),

/***/ "./src/fuseblade/CommandFactory.ts":
/*!*****************************************!*\
  !*** ./src/fuseblade/CommandFactory.ts ***!
  \*****************************************/
/*! exports provided: CommandFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandFactory", function() { return CommandFactory; });
/* harmony import */ var _FBActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FBActions */ "./src/fuseblade/FBActions.ts");
/* harmony import */ var _FBCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FBCommand */ "./src/fuseblade/FBCommand.ts");


class CommandFactory {
    constructor() {
        this._allActions = [];
        for (let item in _FBActions__WEBPACK_IMPORTED_MODULE_0__["FBActions"]) {
            if (!isNaN(Number(item))) {
                this._allActions.push[item];
            }
        }
    }
    setClient(clientID) {
        this._currentClient = clientID;
    }
    setTeam(teamID) {
        this._currentTeam = teamID;
    }
    getCommand(t, agentID) {
        return new _FBCommand__WEBPACK_IMPORTED_MODULE_1__["FBCommand"](t, this._currentClient, this._currentTeam, agentID || 0);
    }
    getCommandList() {
        return this._allActions;
    }
}


/***/ }),

/***/ "./src/fuseblade/FBActions.ts":
/*!************************************!*\
  !*** ./src/fuseblade/FBActions.ts ***!
  \************************************/
/*! exports provided: FBActions, AgentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBActions", function() { return FBActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentCommand", function() { return AgentCommand; });
/* harmony import */ var server_Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server/Command */ "./src/server/Command.ts");

var FBActions;
(function (FBActions) {
    FBActions[FBActions["AgentMoveForward"] = 0] = "AgentMoveForward";
    FBActions[FBActions["AgentMoveBackward"] = 1] = "AgentMoveBackward";
    FBActions[FBActions["AgentStrafeLeft"] = 2] = "AgentStrafeLeft";
    FBActions[FBActions["AgentStrafeRight"] = 3] = "AgentStrafeRight";
    FBActions[FBActions["AgentStopMoving"] = 4] = "AgentStopMoving";
})(FBActions || (FBActions = {}));
class AgentCommand extends server_Command__WEBPACK_IMPORTED_MODULE_0__["Command"] {
    constructor(commandType, clientID, teamID, agentID) {
        super(commandType, clientID, teamID);
        this.agentID = agentID;
    }
}


/***/ }),

/***/ "./src/fuseblade/FBCommand.ts":
/*!************************************!*\
  !*** ./src/fuseblade/FBCommand.ts ***!
  \************************************/
/*! exports provided: FBCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBCommand", function() { return FBCommand; });
/* harmony import */ var server_Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server/Command */ "./src/server/Command.ts");

class FBCommand extends server_Command__WEBPACK_IMPORTED_MODULE_0__["Command"] {
    constructor(commandType, clientID, teamID, agentID) {
        super(commandType, clientID, teamID);
        this.agentID = agentID;
    }
}


/***/ }),

/***/ "./src/fuseblade/FBGameModel.ts":
/*!**************************************!*\
  !*** ./src/fuseblade/FBGameModel.ts ***!
  \**************************************/
/*! exports provided: FBGameModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBGameModel", function() { return FBGameModel; });
/* harmony import */ var server_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server/GameModel */ "./src/server/GameModel.ts");
/* harmony import */ var _FBActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FBActions */ "./src/fuseblade/FBActions.ts");


class FBGameModel extends server_GameModel__WEBPACK_IMPORTED_MODULE_0__["SimultanousGameModel"] {
    constructor() {
        super();
        this._allActions = [];
        for (let item in _FBActions__WEBPACK_IMPORTED_MODULE_1__["FBActions"]) {
            if (!isNaN(Number(item))) {
                this._allActions.push(parseInt(item));
            }
        }
    }
    stateActionMapping(data) {
        return this._allActions;
    }
    applyCommands(data, commands) {
        for (let i = 0; i < commands.length; i++)
            if (commands[i]) {
                console.log("Applying command", commands[i].commandType, "to agent", commands[i].agentID, "on team", commands[i].teamID);
                if (commands[i].commandType === _FBActions__WEBPACK_IMPORTED_MODULE_1__["FBActions"].AgentMoveForward) {
                    data.agents[commands[i].teamID][commands[i].agentID].velocityY = 10;
                }
                if (commands[i].commandType === _FBActions__WEBPACK_IMPORTED_MODULE_1__["FBActions"].AgentMoveBackward) {
                    data.agents[commands[i].teamID][commands[i].agentID].velocityY = -10;
                }
                if (commands[i].commandType === _FBActions__WEBPACK_IMPORTED_MODULE_1__["FBActions"].AgentStopMoving) {
                    data.agents[commands[i].teamID][commands[i].agentID].velocityX = 0;
                    data.agents[commands[i].teamID][commands[i].agentID].velocityY = 0;
                }
            }
    }
    goalTest(data) {
        let alivePlayers = 0;
        for (let i = 0; i < data.agentsLength.length; i++)
            if (data.agentsLength[i] !== 0)
                alivePlayers++;
        if (alivePlayers <= 1)
            return true;
        return false;
    }
}


/***/ }),

/***/ "./src/fuseblade/FBScenario.ts":
/*!*************************************!*\
  !*** ./src/fuseblade/FBScenario.ts ***!
  \*************************************/
/*! exports provided: FBScenario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBScenario", function() { return FBScenario; });
/* harmony import */ var server_Scenario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server/Scenario */ "./src/server/Scenario.ts");
/* harmony import */ var _FBGameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FBGameModel */ "./src/fuseblade/FBGameModel.ts");
/* harmony import */ var _FBScenarioData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FBScenarioData */ "./src/fuseblade/FBScenarioData.ts");
/* harmony import */ var server_client_ClientController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! server/client/ClientController */ "./src/server/client/ClientController.ts");
/* harmony import */ var _CommandFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommandFactory */ "./src/fuseblade/CommandFactory.ts");





class FBScenario extends server_Scenario__WEBPACK_IMPORTED_MODULE_0__["SimultanousScenario"] {
    constructor(saveData) {
        let data = new _FBScenarioData__WEBPACK_IMPORTED_MODULE_2__["FBScenarioData"]();
        data.load(saveData);
        let clientController = new server_client_ClientController__WEBPACK_IMPORTED_MODULE_3__["ClientController"](data.clients(), new _CommandFactory__WEBPACK_IMPORTED_MODULE_4__["CommandFactory"]());
        let gameModel = new _FBGameModel__WEBPACK_IMPORTED_MODULE_1__["FBGameModel"]();
        super(gameModel, data, clientController);
    }
}


/***/ }),

/***/ "./src/fuseblade/FBScenarioData.ts":
/*!*****************************************!*\
  !*** ./src/fuseblade/FBScenarioData.ts ***!
  \*****************************************/
/*! exports provided: WallType, FBScenarioData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallType", function() { return WallType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBScenarioData", function() { return FBScenarioData; });
var WallType;
(function (WallType) {
    WallType[WallType["None"] = 0] = "None";
    WallType[WallType["Low"] = 1] = "Low";
    WallType[WallType["High"] = 2] = "High";
})(WallType || (WallType = {}));
class FBScenarioData {
    cloneFrom(source) {
    }
    clients() {
        return this.teams.length;
    }
    load(saveData) {
        this.teams = saveData.teams;
        this.agents = saveData.agents;
        this.agentsLength = saveData.agents.map(x => x.length);
        this.map = new Array(saveData.map.length);
        this.influence = new Array(saveData.map.length);
        for (let i = 0, len = this.map.length; i < len; i++) {
            this.map[i] = new Array(saveData.map[i].length);
            this.influence[i] = new Array(saveData.map[i].length);
            for (let j = 0, len = this.map.length; j < len; j++) {
                this.influence[i][j] = new Array(saveData.teams.length);
                this.map[i][j] = saveData.map[i][j];
                if (saveData.influence) {
                    for (let k = 0, len = this.influence[i][j].length; k < len; k++)
                        this.influence[i][j][k] = saveData.influence[i][j][k];
                }
                else {
                    for (let k = 0, len = this.influence[i][j].length; k < len; k++)
                        this.influence[i][j][k] = 0;
                }
            }
        }
        this.worldObjects = saveData.worldObjects;
        this.worldObjectsLength = saveData.worldObjects.length;
    }
    save() {
        let teams = new Array(this.teams.length);
        for (let i = 0, len = this.teams.length; i < len; i++) {
            teams[i] = this.teams[i];
        }
        let map = new Array(this.map.length);
        let influence = new Array(this.influence.length);
        for (let i = 0, len = this.map.length; i < len; i++) {
            map[i] = new Array(this.map[i].length);
            influence[i] = new Array(this.map[i].length);
            for (let j = 0, len = this.map.length; j < len; j++) {
                influence[i][j] = new Array(this.teams.length);
                map[i][j] = this.map[i][j];
                for (let k = 0, len = this.influence[i][j].length; k < len; k++)
                    influence[i][j][k] = this.influence[i][j][k];
            }
        }
        let worldObjects = new Array(this.worldObjectsLength);
        for (let i = 0; i < this.worldObjectsLength; i++) {
            worldObjects[i] = this.worldObjects[i];
        }
        let agents = new Array(this.teams.length);
        for (let i = 0; i < this.agents.length; i++) {
            agents[i] = new Array(this.agents[i].length);
            for (let j = 0; j < this.agents[i].length; j++)
                agents[i][j] = this.agents[i][j];
        }
        let save = {
            teams: teams,
            map: map,
            influence: influence,
            worldObjects: worldObjects,
            agents: agents
        };
        return save;
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default, NodeServer, AIClientConnection, ClientConnection, ClientController, LocalServerConnection, RandomAIClient, GameModel, Command, FPScenario, FBScenario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ScenarioFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScenarioFactory */ "./src/ScenarioFactory.ts");
/* harmony import */ var _server_NodeServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server/NodeServer */ "./src/server/NodeServer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeServer", function() { return _server_NodeServer__WEBPACK_IMPORTED_MODULE_1__["NodeServer"]; });

/* harmony import */ var _server_client_ClientConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/client/ClientConnection */ "./src/server/client/ClientConnection.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AIClientConnection", function() { return _server_client_ClientConnection__WEBPACK_IMPORTED_MODULE_2__["AIClientConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientConnection", function() { return _server_client_ClientConnection__WEBPACK_IMPORTED_MODULE_2__["ClientConnection"]; });

/* harmony import */ var _server_client_ClientController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server/client/ClientController */ "./src/server/client/ClientController.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientController", function() { return _server_client_ClientController__WEBPACK_IMPORTED_MODULE_3__["ClientController"]; });

/* harmony import */ var _server_client_LocalServerConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server/client/LocalServerConnection */ "./src/server/client/LocalServerConnection.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalServerConnection", function() { return _server_client_LocalServerConnection__WEBPACK_IMPORTED_MODULE_4__["LocalServerConnection"]; });

/* harmony import */ var _server_client_RandomAIClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server/client/RandomAIClient */ "./src/server/client/RandomAIClient.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RandomAIClient", function() { return _server_client_RandomAIClient__WEBPACK_IMPORTED_MODULE_5__["RandomAIClient"]; });

/* harmony import */ var _server_GameModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server/GameModel */ "./src/server/GameModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameModel", function() { return _server_GameModel__WEBPACK_IMPORTED_MODULE_6__["GameModel"]; });

/* harmony import */ var _server_Command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server/Command */ "./src/server/Command.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return _server_Command__WEBPACK_IMPORTED_MODULE_7__["Command"]; });

/* harmony import */ var _FarmerPuzzle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FarmerPuzzle */ "./src/FarmerPuzzle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FPScenario", function() { return _FarmerPuzzle__WEBPACK_IMPORTED_MODULE_8__["FPScenario"]; });

/* harmony import */ var _fuseblade_FBScenario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fuseblade/FBScenario */ "./src/fuseblade/FBScenario.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBScenario", function() { return _fuseblade_FBScenario__WEBPACK_IMPORTED_MODULE_9__["FBScenario"]; });


/* harmony default export */ __webpack_exports__["default"] = (ScenarioFactory__WEBPACK_IMPORTED_MODULE_0__["ScenarioFactory"]);












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
/* harmony import */ var _NodeServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeServer */ "./src/server/NodeServer.ts");


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
    load(save) {
        this._data.load(save);
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
    runHeadless() {
        let nodeServer = new _NodeServer__WEBPACK_IMPORTED_MODULE_1__["NodeServer"]();
        nodeServer.loadScenario(this);
        if (nodeServer.run()) {
            nodeServer.saveState();
            return true;
        }
        return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYW1lc0FJU2NlbmFyaW9GYWN0b3J5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9HYW1lc0FJU2NlbmFyaW9GYWN0b3J5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0dhbWVzQUlTY2VuYXJpb0ZhY3RvcnkvLi9zcmMvRmFybWVyUHV6emxlLnRzIiwid2VicGFjazovL0dhbWVzQUlTY2VuYXJpb0ZhY3RvcnkvLi9zcmMvU2NlbmFyaW9GYWN0b3J5LnRzIiwid2VicGFjazovL0dhbWVzQUlTY2VuYXJpb0ZhY3RvcnkvLi9zcmMvZnVzZWJsYWRlL0NvbW1hbmRGYWN0b3J5LnRzIiwid2VicGFjazovL0dhbWVzQUlTY2VuYXJpb0ZhY3RvcnkvLi9zcmMvZnVzZWJsYWRlL0ZCQWN0aW9ucy50cyIsIndlYnBhY2s6Ly9HYW1lc0FJU2NlbmFyaW9GYWN0b3J5Ly4vc3JjL2Z1c2VibGFkZS9GQkNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vR2FtZXNBSVNjZW5hcmlvRmFjdG9yeS8uL3NyYy9mdXNlYmxhZGUvRkJHYW1lTW9kZWwudHMiLCJ3ZWJwYWNrOi8vR2FtZXNBSVNjZW5hcmlvRmFjdG9yeS8uL3NyYy9mdXNlYmxhZGUvRkJTY2VuYXJpby50cyIsIndlYnBhY2s6Ly9HYW1lc0FJU2NlbmFyaW9GYWN0b3J5Ly4vc3JjL2Z1c2VibGFkZS9GQlNjZW5hcmlvRGF0YS50cyIsIndlYnBhY2s6Ly9HYW1lc0FJU2NlbmFyaW9GYWN0b3J5Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0dhbWVzQUlTY2VuYXJpb0ZhY3RvcnkvLi9zcmMvc2VydmVyL0NvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vR2FtZXNBSVNjZW5hcmlvRmFjdG9yeS8uL3NyYy9zZXJ2ZXIvR2FtZU1vZGVsLnRzIiwid2VicGFjazovL0dhbWVzQUlTY2VuYXJpb0ZhY3RvcnkvLi9zcmMvc2VydmVyL05vZGVTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vR2FtZXNBSVNjZW5hcmlvRmFjdG9yeS8uL3NyYy9zZXJ2ZXIvU2NlbmFyaW8udHMiLCJ3ZWJwYWNrOi8vR2FtZXNBSVNjZW5hcmlvRmFjdG9yeS8uL3NyYy9zZXJ2ZXIvU2VydmVyLnRzIiwid2VicGFjazovL0dhbWVzQUlTY2VuYXJpb0ZhY3RvcnkvLi9zcmMvc2VydmVyL2NsaWVudC9DbGllbnRDb25uZWN0aW9uLnRzIiwid2VicGFjazovL0dhbWVzQUlTY2VuYXJpb0ZhY3RvcnkvLi9zcmMvc2VydmVyL2NsaWVudC9DbGllbnRDb250cm9sbGVyLnRzIiwid2VicGFjazovL0dhbWVzQUlTY2VuYXJpb0ZhY3RvcnkvLi9zcmMvc2VydmVyL2NsaWVudC9Mb2NhbFNlcnZlckNvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vR2FtZXNBSVNjZW5hcmlvRmFjdG9yeS8uL3NyYy9zZXJ2ZXIvY2xpZW50L1JhbmRvbUFJQ2xpZW50LnRzIiwid2VicGFjazovL0dhbWVzQUlTY2VuYXJpb0ZhY3RvcnkvZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtR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R0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ25CO1lBQ0ksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7WUFDbEQsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFPO0lBR3JCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7O0FDOUJELCtCIiwiZmlsZSI6ImZ1c2VibGFkZVNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiR2FtZXNBSVNjZW5hcmlvRmFjdG9yeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHYW1lc0FJU2NlbmFyaW9GYWN0b3J5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkdhbWVzQUlTY2VuYXJpb0ZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG59KShnbG9iYWwsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgVHVybkJhc2VkU2NlbmFyaW9EYXRhIH0gZnJvbSBcIi4vc2VydmVyL1NjZW5hcmlvRGF0YVwiO1xuaW1wb3J0IHsgVHVybkJhc2VkR2FtZU1vZGVsIH0gZnJvbSBcIi4vc2VydmVyL0dhbWVNb2RlbFwiO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCIuL3NlcnZlci9Db21tYW5kXCI7XG5pbXBvcnQgeyBDb21tYW5kRmFjdG9yeSB9IGZyb20gXCIuL3NlcnZlci9Db21tYW5kRmFjdG9yeVwiO1xuaW1wb3J0IHsgVHVybkJhc2VkU2NlbmFyaW8gfSBmcm9tIFwiLi9zZXJ2ZXIvU2NlbmFyaW9cIjtcbmltcG9ydCB7IENsaWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi9zZXJ2ZXIvY2xpZW50L0NsaWVudENvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGVudW0gRlBJdGVtc1xue1xuICAgIFdvbGYsXG4gICAgU2hlZXAsXG4gICAgQ2FiYmFnZVxufVxuXG5leHBvcnQgZW51bSBGUEFjdGlvbnNcbntcbiAgICBNb3ZlV29sZixcbiAgICBNb3ZlQ2FiYmFnZSxcbiAgICBNb3ZlU2hlZXAsXG4gICAgTW92ZUZhcm1lcixcbn1cblxuZXhwb3J0IGNsYXNzIEZQU3RhdGUgaW1wbGVtZW50cyBUdXJuQmFzZWRTY2VuYXJpb0RhdGE8RlBTYXZlPlxue1xuICAgIGxlZnRCYW5rOiBGUEl0ZW1zW107XG4gICAgcmlnaHRCYW5rOiBGUEl0ZW1zW107XG4gICAgZmFybWVyT25MZWZ0QmFuazogYm9vbGVhbjtcblxuICAgIGxvYWQoc2F2ZTogRlBTYXZlKVxuICAgIHtcbiAgICAgICAgdGhpcy5sZWZ0QmFuayA9IHNhdmUubGVmdEJhbmsuc2xpY2UoKTtcbiAgICAgICAgdGhpcy5yaWdodEJhbmsgPSBzYXZlLnJpZ2h0QmFuay5zbGljZSgpO1xuICAgICAgICB0aGlzLmZhcm1lck9uTGVmdEJhbmsgPSBzYXZlLmZhcm1lck9uTGVmdEJhbms7XG4gICAgfVxuXG4gICAgY2xvbmVGcm9tKHNvdXJjZTogRlBTdGF0ZSlcbiAgICB7XG4gICAgICAgIHRoaXMubGVmdEJhbmsgPSBzb3VyY2UubGVmdEJhbmsuc2xpY2UoKTtcbiAgICAgICAgdGhpcy5yaWdodEJhbmsgPSBzb3VyY2UucmlnaHRCYW5rLnNsaWNlKCk7XG4gICAgICAgIHRoaXMuZmFybWVyT25MZWZ0QmFuayA9IHNvdXJjZS5mYXJtZXJPbkxlZnRCYW5rO1xuICAgIH1cblxuICAgIGNsaWVudHMoKSB7IHJldHVybiAxOyB9XG5cbiAgICBzYXZlKCk6IEZQU2F2ZVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnRCYW5rOiB0aGlzLmxlZnRCYW5rLFxuICAgICAgICAgICAgcmlnaHRCYW5rOiB0aGlzLnJpZ2h0QmFuayxcbiAgICAgICAgICAgIGZhcm1lck9uTGVmdEJhbms6IHRoaXMuZmFybWVyT25MZWZ0QmFua1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXF1YWxzIChvdGhlcjogRlBTdGF0ZSk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmxlZnRCYW5rLmxlbmd0aCAhPT0gb3RoZXIubGVmdEJhbmsubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmZhcm1lck9uTGVmdEJhbmsgIT09IG90aGVyLmZhcm1lck9uTGVmdEJhbmspXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaT0wLGxlbkE9dGhpcy5sZWZ0QmFuay5sZW5ndGg7aTxsZW5BO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTAsbGVuQj1vdGhlci5sZWZ0QmFuay5sZW5ndGg7ajxsZW5CO2orKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMubGVmdEJhbmtbaV0gPT09IG90aGVyLmxlZnRCYW5rW2pdKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmb3VuZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFBsYXllcigpIHsgcmV0dXJuIDA7IH1cbiAgICBtb3ZlVG9OZXh0UGxheWVyKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIEZQU2F2ZVxue1xuICAgIGxlZnRCYW5rOiBGUEl0ZW1zW107XG4gICAgcmlnaHRCYW5rOiBGUEl0ZW1zW107XG4gICAgZmFybWVyT25MZWZ0QmFuazogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEZQTW9kZWwgZXh0ZW5kcyBUdXJuQmFzZWRHYW1lTW9kZWw8RlBTdGF0ZSwgRlBTYXZlLCBGUEFjdGlvbnM+XG57XG4gICAgc3RhdGVBY3Rpb25NYXBwaW5nPEZQQWN0aW9ucz4oc3RhdGU6IEZQU3RhdGUpOiBGUEFjdGlvbnNbXVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX2NoZWNrSWZGYWlsdXJlU3RhdGUoc3RhdGUpKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuXG4gICAgICAgIGxldCBsaXN0ID0gc3RhdGUuZmFybWVyT25MZWZ0QmFuayA/IHN0YXRlLmxlZnRCYW5rIDogc3RhdGUucmlnaHRCYW5rO1xuICAgICAgICBsZXQgYWN0aW9uTGlzdCA9IG5ldyBBcnJheShsaXN0Lmxlbmd0aCsxKTtcbiAgICAgICAgYWN0aW9uTGlzdFthY3Rpb25MaXN0Lmxlbmd0aC0xXSA9IEZQQWN0aW9ucy5Nb3ZlRmFybWVyO1xuICAgICAgICBmb3IgKGxldCBpPTAsbGVuPWxpc3QubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGxpc3RbaV0gPT09IEZQSXRlbXMuQ2FiYmFnZSlcbiAgICAgICAgICAgICAgICBhY3Rpb25MaXN0W2ldID0gRlBBY3Rpb25zLk1vdmVDYWJiYWdlO1xuICAgICAgICAgICAgZWxzZSBpZiAobGlzdFtpXSA9PT0gRlBJdGVtcy5TaGVlcClcbiAgICAgICAgICAgICAgICBhY3Rpb25MaXN0W2ldID0gRlBBY3Rpb25zLk1vdmVTaGVlcDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGxpc3RbaV0gPT09IEZQSXRlbXMuV29sZilcbiAgICAgICAgICAgICAgICBhY3Rpb25MaXN0W2ldID0gRlBBY3Rpb25zLk1vdmVXb2xmO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbkxpc3Q7XG4gICAgfVxuXG4gICAgYXBwbHlDb21tYW5kcyhzdGF0ZTogRlBTdGF0ZSwgYWN0aW9uOiBDb21tYW5kPEZQQWN0aW9ucz4pOiB2b2lkXG4gICAge1xuICAgICAgICBpZiAoIWFjdGlvbilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbW1hbmQgc3VibWl0dGVkIHdhcyBudWxsXCIpO1xuICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHN1Ym1pdCBhIHNpbmdsZSBjb21tYW5kIGFzIGFuIGFjdGlvbiAobm90IGFuIGFycmF5KVwiKTtcbiAgICAgICAgaWYgKGFjdGlvbi5jb21tYW5kVHlwZSA9PT0gRlBBY3Rpb25zLk1vdmVGYXJtZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRlLmxlZnRCYW5rID0gc3RhdGUubGVmdEJhbms7XG4gICAgICAgICAgICBzdGF0ZS5yaWdodEJhbmsgPSBzdGF0ZS5yaWdodEJhbmssXG4gICAgICAgICAgICBzdGF0ZS5mYXJtZXJPbkxlZnRCYW5rID0gIXN0YXRlLmZhcm1lck9uTGVmdEJhbms7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlbTogRlBJdGVtcztcbiAgICAgICAgICAgIGlmIChhY3Rpb24uY29tbWFuZFR5cGUgPT09IEZQQWN0aW9ucy5Nb3ZlQ2FiYmFnZSlcbiAgICAgICAgICAgICAgICBpdGVtID0gRlBJdGVtcy5DYWJiYWdlO1xuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aW9uLmNvbW1hbmRUeXBlID09PSBGUEFjdGlvbnMuTW92ZVNoZWVwKVxuICAgICAgICAgICAgICAgIGl0ZW0gPSBGUEl0ZW1zLlNoZWVwO1xuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aW9uLmNvbW1hbmRUeXBlID09PSBGUEFjdGlvbnMuTW92ZVdvbGYpXG4gICAgICAgICAgICAgICAgaXRlbSA9IEZQSXRlbXMuV29sZjtcblxuICAgICAgICAgICAgbGV0IG5ld0xlZnRCYW5rID0gW107XG4gICAgICAgICAgICBsZXQgbmV3UmlnaHRCYW5rID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXN0YXRlLmxlZnRCYW5rLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmxlZnRCYW5rW2ldICE9PSBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBuZXdMZWZ0QmFuay5wdXNoKHN0YXRlLmxlZnRCYW5rW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGk9MCxsZW49c3RhdGUucmlnaHRCYW5rLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnJpZ2h0QmFua1tpXSAhPT0gaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgbmV3UmlnaHRCYW5rLnB1c2goc3RhdGUucmlnaHRCYW5rW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZS5mYXJtZXJPbkxlZnRCYW5rKVxuICAgICAgICAgICAgICAgIG5ld1JpZ2h0QmFuay5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG5ld0xlZnRCYW5rLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBzdGF0ZS5sZWZ0QmFuayA9IG5ld0xlZnRCYW5rO1xuICAgICAgICAgICAgc3RhdGUucmlnaHRCYW5rID0gbmV3UmlnaHRCYW5rO1xuICAgICAgICAgICAgc3RhdGUuZmFybWVyT25MZWZ0QmFuayA9ICFzdGF0ZS5mYXJtZXJPbkxlZnRCYW5rO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29hbFRlc3Qoc3RhdGU6IEZQU3RhdGUpOiBib29sZWFuXG4gICAge1xuICAgICAgICBpZiAodGhpcy5fY2hlY2tJZkZhaWx1cmVTdGF0ZShzdGF0ZSkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmxlZnRCYW5rLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICBoZXVyaXN0aWMoc3RhdGU6IEZQU3RhdGUpXG4gICAge1xuICAgICAgICByZXR1cm4gc3RhdGUubGVmdEJhbmsubGVuZ3RoKjEwMDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2hlY2tJZkZhaWx1cmVTdGF0ZShGYXJtZXJQdXp6bGVTdGF0ZTogRlBTdGF0ZSlcbiAgICB7XG4gICAgICAgIGlmIChGYXJtZXJQdXp6bGVTdGF0ZS5mYXJtZXJPbkxlZnRCYW5rKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKEZhcm1lclB1enpsZVN0YXRlLnJpZ2h0QmFuay5pbmRleE9mKEZQSXRlbXMuV29sZikgIT09IC0xICYmIEZhcm1lclB1enpsZVN0YXRlLnJpZ2h0QmFuay5pbmRleE9mKEZQSXRlbXMuU2hlZXApICE9PSAtMSkgXG4gICAgICAgICAgICAgICAgfHwgKEZhcm1lclB1enpsZVN0YXRlLnJpZ2h0QmFuay5pbmRleE9mKEZQSXRlbXMuQ2FiYmFnZSkgIT09IC0xICYmIEZhcm1lclB1enpsZVN0YXRlLnJpZ2h0QmFuay5pbmRleE9mKEZQSXRlbXMuU2hlZXApICE9PSAtMSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKEZhcm1lclB1enpsZVN0YXRlLmxlZnRCYW5rLmluZGV4T2YoRlBJdGVtcy5Xb2xmKSAhPT0gLTEgJiYgRmFybWVyUHV6emxlU3RhdGUubGVmdEJhbmsuaW5kZXhPZihGUEl0ZW1zLlNoZWVwKSAhPT0gLTEpIFxuICAgICAgICAgICAgfHwgKEZhcm1lclB1enpsZVN0YXRlLmxlZnRCYW5rLmluZGV4T2YoRlBJdGVtcy5DYWJiYWdlKSAhPT0gLTEgJiYgRmFybWVyUHV6emxlU3RhdGUubGVmdEJhbmsuaW5kZXhPZihGUEl0ZW1zLlNoZWVwKSAhPT0gLTEpKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGUENvbW1hbmRGYWN0b3J5IGltcGxlbWVudHMgQ29tbWFuZEZhY3Rvcnk8RlBBY3Rpb25zPlxue1xuICAgIHNldENsaWVudChjbGllbnRJRDogbnVtYmVyKTogdm9pZCB7IH1cbiAgICBzZXRUZWFtKHRlYW1JRDogbnVtYmVyKTogdm9pZCB7IH1cbiAgICBnZXRDb21tYW5kTGlzdCgpOiBudW1iZXJbXVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFtGUEFjdGlvbnMuTW92ZUNhYmJhZ2UsXG4gICAgICAgICAgICAgICAgRlBBY3Rpb25zLk1vdmVGYXJtZXIsXG4gICAgICAgICAgICAgICAgRlBBY3Rpb25zLk1vdmVXb2xmLFxuICAgICAgICAgICAgICAgIEZQQWN0aW9ucy5Nb3ZlU2hlZXBdO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKGM6IG51bWJlcik6IENvbW1hbmQ8RlBBY3Rpb25zPlxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb21tYW5kPEZQQWN0aW9ucz4oYywgMCwgMCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRlBTY2VuYXJpbyBleHRlbmRzIFR1cm5CYXNlZFNjZW5hcmlvPEZQTW9kZWwsIEZQU3RhdGUsIEZQU2F2ZSwgRlBBY3Rpb25zPlxue1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIGxldCBkYXRhID0gbmV3IEZQU3RhdGUoKTtcbiAgICAgICAgZGF0YS5sb2FkKHtsZWZ0QmFuazogWyBGUEl0ZW1zLlNoZWVwLCBGUEl0ZW1zLldvbGYsIEZQSXRlbXMuQ2FiYmFnZV0sIHJpZ2h0QmFuazogWyBdLCBmYXJtZXJPbkxlZnRCYW5rOiB0cnVlfSk7XG4gICAgICAgIHN1cGVyKG5ldyBGUE1vZGVsKCksIGRhdGEsIG5ldyBDbGllbnRDb250cm9sbGVyPEZQU3RhdGUsIEZQU2F2ZSwgRlBBY3Rpb25zPigxLCBuZXcgRlBDb21tYW5kRmFjdG9yeSgpKSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGUFNjZW5hcmlvIH0gZnJvbSBcIkZhcm1lclB1enpsZVwiO1xuaW1wb3J0IHsgRkJTY2VuYXJpbyB9IGZyb20gXCJmdXNlYmxhZGUvRkJTY2VuYXJpb1wiO1xuaW1wb3J0IHsgRkJTYXZlRGF0YSB9IGZyb20gXCJmdXNlYmxhZGUvRkJTYXZlRGF0YVwiO1xuXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9GYWN0b3J5XG57XG4gICAgY3JlYXRlRnVzZWJsYWRlU2NlbmFyaW8oc2F2ZURhdGE6IEZCU2F2ZURhdGEpOiBGQlNjZW5hcmlvXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IEZCU2NlbmFyaW8oc2F2ZURhdGEpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZhcm1lclB1enpsZVNjZW5hcmlvKCk6IEZQU2NlbmFyaW9cbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgRlBTY2VuYXJpbygpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyAgRkJBY3Rpb25zIH0gZnJvbSBcIi4vRkJBY3Rpb25zXCI7XG5pbXBvcnQgeyBDb21tYW5kRmFjdG9yeSBhcyBDb21tYW5kRmFjdG9yeUludGVyZmFjZSB9IGZyb20gXCJzZXJ2ZXIvQ29tbWFuZEZhY3RvcnlcIlxuaW1wb3J0IHsgRkJDb21tYW5kIH0gZnJvbSBcIi4vRkJDb21tYW5kXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kRmFjdG9yeSBpbXBsZW1lbnRzIENvbW1hbmRGYWN0b3J5SW50ZXJmYWNlPEZCQWN0aW9ucz5cbntcbiAgICBwcml2YXRlIF9jdXJyZW50Q2xpZW50OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY3VycmVudFRlYW06IG51bWJlcjtcblxuICAgIHByaXZhdGUgX2FsbEFjdGlvbnM6IG51bWJlcltdID0gW107XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBGQkFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKGl0ZW0pKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FsbEFjdGlvbnMucHVzaFtpdGVtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENsaWVudChjbGllbnRJRDogbnVtYmVyKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5fY3VycmVudENsaWVudCA9IGNsaWVudElEO1xuICAgIH1cblxuICAgIHNldFRlYW0odGVhbUlEOiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLl9jdXJyZW50VGVhbSA9IHRlYW1JRDtcbiAgICB9XG5cbiAgICBnZXRDb21tYW5kKHQ6IEZCQWN0aW9ucywgYWdlbnRJRD86IG51bWJlcik6IEZCQ29tbWFuZFxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGQkNvbW1hbmQodCwgdGhpcy5fY3VycmVudENsaWVudCwgdGhpcy5fY3VycmVudFRlYW0sIGFnZW50SUQgfHwgMCk7XG4gICAgfVxuXG4gICAgZ2V0Q29tbWFuZExpc3QoKTogbnVtYmVyW11cbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxBY3Rpb25zO1xuICAgIH1cblxuICAgIC8qYWdlbnRNb3ZlKGFnZW50SUQ6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IEFnZW50TW92ZSh0aGlzLl9jdXJyZW50Q2xpZW50LCB0aGlzLl9jdXJyZW50VGVhbSwgYWdlbnRJRCwgeCwgeSk7XG4gICAgfVxuXG4gICAgYWdlbnRNb3ZlQW5nbGUoYWdlbnRJRDogbnVtYmVyLCBhbmdsZTogbnVtYmVyLCBzcGVlZDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBZ2VudE1vdmVBbmdsZSh0aGlzLl9jdXJyZW50Q2xpZW50LCB0aGlzLl9jdXJyZW50VGVhbSwgYWdlbnRJRCwgYW5nbGUsIHNwZWVkKTtcbiAgICB9XG5cbiAgICBhZ2VudERvZGdlKGFnZW50SUQ6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IEFnZW50RG9kZ2UodGhpcy5fY3VycmVudENsaWVudCwgdGhpcy5fY3VycmVudFRlYW0sIGFnZW50SUQsIHgsIHkpO1xuICAgIH1cblxuICAgIGFnZW50RG9kZ2VBbmdsZShhZ2VudElEOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIsIHNwZWVkOiBudW1iZXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IEFnZW50RG9kZ2VBbmdsZSh0aGlzLl9jdXJyZW50Q2xpZW50LCB0aGlzLl9jdXJyZW50VGVhbSwgYWdlbnRJRCwgYW5nbGUsIHNwZWVkKTtcbiAgICB9XG5cbiAgICBhZ2VudFJvdGF0ZVRvKGFnZW50SUQ6IG51bWJlciwgYW5nbGU6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgQWdlbnRSb3RhdGVUbyh0aGlzLl9jdXJyZW50Q2xpZW50LCB0aGlzLl9jdXJyZW50VGVhbSwgYWdlbnRJRCwgYW5nbGUpO1xuICAgIH0qL1xuXG5cbn0iLCJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcInNlcnZlci9Db21tYW5kXCI7XG5cbmV4cG9ydCBlbnVtIEZCQWN0aW9uc1xue1xuICAgIEFnZW50TW92ZUZvcndhcmQsXG4gICAgQWdlbnRNb3ZlQmFja3dhcmQsXG4gICAgQWdlbnRTdHJhZmVMZWZ0LFxuICAgIEFnZW50U3RyYWZlUmlnaHQsXG4gICAgQWdlbnRTdG9wTW92aW5nXG4gICAgLy9BZ2VudE1vdmUsIC8veCwgeVxuICAgLyogQWdlbnRNb3ZlQW5nbGUsIC8vIHJvdEFicywgc3BlZWRcbiAgICBBZ2VudERvZGdlLCAvL3gsIHlcbiAgICBBZ2VudERvZGdlQW5nbGUsIC8vIHJvdEFicywgc3BlZWRcbiAgICBBZ2VudFJvdGF0ZVRvLCAvL3JvdEFic1xuICAgIEFnZW50TWVsZWVBdHRhY2ssIC8vQW5pbWF0ZXMgYXR0YWNrIGFuZCBkZWFscyBkYW1hZ2UgaWYgZW5lbXkgd2l0aGluIHNlbWktY2lyY2xlIG9mIGFnZW50XG4gICAgQWdlbnRTaG9vdCwgLy8gQW5pbWF0ZXMgc2hvdCwgcmF5IGNhc3RzIGluIGFnZW50IGZhY2luZyBhbmQgaGl0cyBmaXJzdCBvYnN0YWNsZSwgZGVhbGluZyBkYW1hZ2VcbiAgICBBZ2VudEJ1cnN0RmlyZU9uLCAvLyBCZWdpbnMgc2hvb3RpbmcgYXQgYWdlbnQucmF0ZU9mRmlyZVxuICAgIEFnZW50QnVyc3RGaXJlT2ZmLFxuICAgIEFnZW50UmVsb2FkLCAvLyBBbmltYXRlcyByZWxvYWQgYW5kIHRvcHMgdXAgY3VycmVudCBhbW1vXG4gICAgQWdlbnRTaGllbGRVcCxcbiAgICBBZ2VudFNoaWVsZERvd24sXG4gICAgQWdlbnRFbnRlckNyb3VjaCxcbiAgICBBZ2VudExlYXZlQ3JvdWNoLFxuICAgIEFnZW50UmFkaW8sIC8vYW5nbGVcbiAgICBBZ2VudEFuaW1hdGUsIC8vIS8/L3p6eilcbiAgICBBZ2VudEZsYXNobGlnaHRPbixcbiAgICBBZ2VudEZsYXNobGlnaHRPZmYsXG4gICAgQWdlbnRTcGF3biwgLy8odHlwZSwgeCwgeSlcbiAgICBBZ2VudExvb3QsIC8vIFBpY2tzIHVwIGFsbCByZXNvdXJjZSB3aXRoaW4gaW50ZXJhY3QgcmFkaXVzXG4gICAgQWdlbnRIYXJ2ZXN0T24sIC8vIEJlZ2lucyBnYWluaW5nIHJlc291cmNlIGF0IGEgc2V0IHJhdGUgaWYgdGhlcmUgaXMgYSBTb3VyY2Ugd2l0aGluIGludGVyYWN0IHJhZGl1c1xuICAgIEFnZW50SGFydmVzdE9mZiwqL1xufVxuXG5cbmV4cG9ydCBjbGFzcyBBZ2VudENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kPEZCQWN0aW9ucz5cbntcbiAgICBhZ2VudElEOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb21tYW5kVHlwZTogRkJBY3Rpb25zLCBjbGllbnRJRDogbnVtYmVyLCB0ZWFtSUQ6IG51bWJlciwgYWdlbnRJRDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIoY29tbWFuZFR5cGUsIGNsaWVudElELCB0ZWFtSUQpO1xuICAgICAgICB0aGlzLmFnZW50SUQgPSBhZ2VudElEO1xuICAgIH1cbn1cblxuLypleHBvcnQgY2xhc3MgQWdlbnRNb3ZlIGV4dGVuZHMgQWdlbnRDb21tYW5kXG57XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElEOiBudW1iZXIsIHRlYW1JRDogbnVtYmVyLCBhZ2VudElEOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIoRkJBY3Rpb25zLkFnZW50TW92ZSwgY2xpZW50SUQsIHRlYW1JRCwgYWdlbnRJRClcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFnZW50TW92ZUFuZ2xlIGV4dGVuZHMgQWdlbnRDb21tYW5kXG57XG4gICAgYW5nbGU6IG51bWJlcjtcbiAgICBzcGVlZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50SUQ6IG51bWJlciwgdGVhbUlEOiBudW1iZXIsIGFnZW50SUQ6IG51bWJlciwgYW5nbGU6IG51bWJlciwgc3BlZWQ6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKEZCQWN0aW9ucy5BZ2VudE1vdmVBbmdsZSwgY2xpZW50SUQsIHRlYW1JRCwgYWdlbnRJRClcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWdlbnREb2RnZSBleHRlbmRzIEFnZW50Q29tbWFuZFxue1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnRJRDogbnVtYmVyLCB0ZWFtSUQ6IG51bWJlciwgYWdlbnRJRDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKEZCQWN0aW9ucy5BZ2VudERvZGdlLCBjbGllbnRJRCwgdGVhbUlELCBhZ2VudElEKVxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFnZW50RG9kZ2VBbmdsZSBleHRlbmRzIEFnZW50Q29tbWFuZFxue1xuICAgIGFuZ2xlOiBudW1iZXI7XG4gICAgc3BlZWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElEOiBudW1iZXIsIHRlYW1JRDogbnVtYmVyLCBhZ2VudElEOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIsIHNwZWVkOiBudW1iZXIpXG4gICAge1xuICAgICAgICBzdXBlcihGQkFjdGlvbnMuQWdlbnREb2RnZSwgY2xpZW50SUQsIHRlYW1JRCwgYWdlbnRJRClcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWdlbnRSb3RhdGVUbyBleHRlbmRzIEFnZW50Q29tbWFuZFxue1xuICAgIGFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnRJRDogbnVtYmVyLCB0ZWFtSUQ6IG51bWJlciwgYWdlbnRJRDogbnVtYmVyLCBhbmdsZTogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIoRkJBY3Rpb25zLkFnZW50RG9kZ2UsIGNsaWVudElELCB0ZWFtSUQsIGFnZW50SUQpXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB9XG59Ki8iLCJpbXBvcnQgeyBGQkFjdGlvbnMgfSBmcm9tIFwiLi9GQkFjdGlvbnNcIjtcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwic2VydmVyL0NvbW1hbmRcIjtcblxuZXhwb3J0IGNsYXNzIEZCQ29tbWFuZCBleHRlbmRzIENvbW1hbmQ8RkJBY3Rpb25zPlxue1xuICAgIHB1YmxpYyBhZ2VudElEOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoY29tbWFuZFR5cGU6IEZCQWN0aW9ucywgY2xpZW50SUQ6IG51bWJlciwgdGVhbUlEOiBudW1iZXIsIGFnZW50SUQ6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKGNvbW1hbmRUeXBlLCBjbGllbnRJRCwgdGVhbUlEKVxuICAgICAgICB0aGlzLmFnZW50SUQgPSBhZ2VudElEO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTaW11bHRhbm91c0dhbWVNb2RlbCB9IGZyb20gXCJzZXJ2ZXIvR2FtZU1vZGVsXCI7XG5pbXBvcnQgeyBGQlNjZW5hcmlvRGF0YSB9IGZyb20gXCIuL0ZCU2NlbmFyaW9EYXRhXCI7XG5pbXBvcnQgeyBGQlNhdmVEYXRhIH0gZnJvbSBcIi4vRkJTYXZlRGF0YVwiO1xuaW1wb3J0IHsgRkJBY3Rpb25zIH0gZnJvbSBcIi4vRkJBY3Rpb25zXCI7XG5pbXBvcnQgeyBGQkNvbW1hbmQgfSBmcm9tIFwiLi9GQkNvbW1hbmRcIjtcblxuZXhwb3J0IGNsYXNzIEZCR2FtZU1vZGVsIGV4dGVuZHMgU2ltdWx0YW5vdXNHYW1lTW9kZWw8RkJTY2VuYXJpb0RhdGEsIEZCU2F2ZURhdGEsIEZCQWN0aW9ucz5cbntcbiAgICBwcml2YXRlIF9hbGxBY3Rpb25zOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBGQkFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKGl0ZW0pKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FsbEFjdGlvbnMucHVzaChwYXJzZUludChpdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZUFjdGlvbk1hcHBpbmcoZGF0YTogRkJTY2VuYXJpb0RhdGEpOiBudW1iZXJbXVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbEFjdGlvbnM7XG4gICAgfVxuXG4gICAgYXBwbHlDb21tYW5kcyhkYXRhOiBGQlNjZW5hcmlvRGF0YSwgY29tbWFuZHM6IEZCQ29tbWFuZFtdKVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8Y29tbWFuZHMubGVuZ3RoO2krKylcbiAgICAgICAgICAgIGlmIChjb21tYW5kc1tpXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFwcGx5aW5nIGNvbW1hbmRcIiwgY29tbWFuZHNbaV0uY29tbWFuZFR5cGUsIFwidG8gYWdlbnRcIiwgY29tbWFuZHNbaV0uYWdlbnRJRCwgXCJvbiB0ZWFtXCIsIGNvbW1hbmRzW2ldLnRlYW1JRCwpO1xuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kc1tpXS5jb21tYW5kVHlwZSA9PT0gRkJBY3Rpb25zLkFnZW50TW92ZUZvcndhcmQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFnZW50c1tjb21tYW5kc1tpXS50ZWFtSURdW2NvbW1hbmRzW2ldLmFnZW50SURdLnZlbG9jaXR5WSA9IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZHNbaV0uY29tbWFuZFR5cGUgPT09IEZCQWN0aW9ucy5BZ2VudE1vdmVCYWNrd2FyZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYWdlbnRzW2NvbW1hbmRzW2ldLnRlYW1JRF1bY29tbWFuZHNbaV0uYWdlbnRJRF0udmVsb2NpdHlZID0gLTEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZHNbaV0uY29tbWFuZFR5cGUgPT09IEZCQWN0aW9ucy5BZ2VudFN0b3BNb3ZpbmcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFnZW50c1tjb21tYW5kc1tpXS50ZWFtSURdW2NvbW1hbmRzW2ldLmFnZW50SURdLnZlbG9jaXR5WCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYWdlbnRzW2NvbW1hbmRzW2ldLnRlYW1JRF1bY29tbWFuZHNbaV0uYWdlbnRJRF0udmVsb2NpdHlZID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBnb2FsVGVzdChkYXRhOiBGQlNjZW5hcmlvRGF0YSk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGxldCBhbGl2ZVBsYXllcnMgPSAwO1xuICAgICAgICBmb3IgKGxldCBpPTA7aTxkYXRhLmFnZW50c0xlbmd0aC5sZW5ndGg7aSsrKVxuICAgICAgICAgICAgaWYgKGRhdGEuYWdlbnRzTGVuZ3RoW2ldICE9PSAwKVxuICAgICAgICAgICAgICAgIGFsaXZlUGxheWVycysrO1xuICAgICAgICBpZiAoYWxpdmVQbGF5ZXJzIDw9IDEpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTaW11bHRhbm91c1NjZW5hcmlvIH0gZnJvbSBcInNlcnZlci9TY2VuYXJpb1wiO1xuaW1wb3J0IHsgRkJHYW1lTW9kZWwgfSBmcm9tIFwiLi9GQkdhbWVNb2RlbFwiO1xuaW1wb3J0IHsgRkJTY2VuYXJpb0RhdGEgfSBmcm9tIFwiLi9GQlNjZW5hcmlvRGF0YVwiO1xuaW1wb3J0IHsgRkJTYXZlRGF0YSB9IGZyb20gXCIuL0ZCU2F2ZURhdGFcIjtcbmltcG9ydCB7IEZCQWN0aW9ucyB9IGZyb20gXCIuL0ZCQWN0aW9uc1wiO1xuaW1wb3J0IHsgQ2xpZW50Q29udHJvbGxlciB9IGZyb20gXCJzZXJ2ZXIvY2xpZW50L0NsaWVudENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IENvbW1hbmRGYWN0b3J5IH0gZnJvbSBcIi4vQ29tbWFuZEZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIEZCU2NlbmFyaW8gZXh0ZW5kcyBTaW11bHRhbm91c1NjZW5hcmlvPEZCR2FtZU1vZGVsLCBGQlNjZW5hcmlvRGF0YSwgRkJTYXZlRGF0YSwgRkJBY3Rpb25zPlxue1xuICAgIGNvbnN0cnVjdG9yKHNhdmVEYXRhOiBGQlNhdmVEYXRhKVxuICAgIHtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRkJTY2VuYXJpb0RhdGEoKTtcbiAgICAgICAgZGF0YS5sb2FkKHNhdmVEYXRhKTtcbiAgICAgICAgbGV0IGNsaWVudENvbnRyb2xsZXIgPSAgbmV3IENsaWVudENvbnRyb2xsZXI8RkJTY2VuYXJpb0RhdGEsRkJTYXZlRGF0YSxGQkFjdGlvbnM+KGRhdGEuY2xpZW50cygpLCBuZXcgQ29tbWFuZEZhY3RvcnkoKSk7XG4gICAgICAgIGxldCBnYW1lTW9kZWwgPSBuZXcgRkJHYW1lTW9kZWwoKTtcbiAgICAgICAgc3VwZXIoZ2FtZU1vZGVsLCBkYXRhLCBjbGllbnRDb250cm9sbGVyKTtcbiAgICB9ICBcbn1cbiIsImltcG9ydCB7IFNjZW5hcmlvRGF0YSB9IGZyb20gXCIuLi9zZXJ2ZXIvU2NlbmFyaW9EYXRhXCI7XG5pbXBvcnQgeyBGQlNhdmVEYXRhIH0gZnJvbSBcIi4vRkJTYXZlRGF0YVwiO1xuaW1wb3J0IHsgVGVhbURhdGEgfSBmcm9tIFwiLi9UZWFtRGF0YVwiO1xuaW1wb3J0IHsgQWdlbnREYXRhIH0gZnJvbSBcIi4vQWdlbnREYXRhXCI7XG5pbXBvcnQgeyBXb3JsZE9iamVjdERhdGEgfSBmcm9tIFwiLi9Xb3JsZE9iamVjdERhdGFcIjtcblxuZXhwb3J0IGVudW0gV2FsbFR5cGVcbntcbiAgICBOb25lLFxuICAgIExvdyxcbiAgICBIaWdoXG59XG5cbmV4cG9ydCBjbGFzcyBGQlNjZW5hcmlvRGF0YSBpbXBsZW1lbnRzIFNjZW5hcmlvRGF0YTxGQlNhdmVEYXRhPlxue1xuICAgIHRlYW1zOiBUZWFtRGF0YVtdO1xuICAgIG1hcDogV2FsbFR5cGVbXVtdOyAvL25vbmUvbG93L2hpZ2hcbiAgICBpbmZsdWVuY2U6IG51bWJlcltdW11bXTsgLy8gMmQgYXJyYXk6IGlubmVyIG1vc3QgYXJyYXkgaW5kZXhlcyAwLT5sZW5ndGgtMSBpbmZsdWVuY2UgdmFsdWVzIHBlciB0ZWFtXG4gICAgYWdlbnRzOiBBZ2VudERhdGFbXVtdOyAvLzFzdCBhcnJheSB0ZWFtLCBpbm5lciBhcnJheSBvZiBhZ2VudHNcbiAgICBhZ2VudHNMZW5ndGg6IG51bWJlcltdOyAvLyBTdG9yZSBhbGl2ZSBhZ2VudHMgYXQgYmVnaW5uaW5nIG9mIGFycmF5LCByZW1haW5kZXIgYXJlIGRlYWQgb3IgbnVsbC4gXG4gICAgLy8gV2hlbiBhZ2VudCBkaWVzLCBzd2FwIGl0IHdpdGggb25lIGF0IGFnZW50c1t4XVthZ2VudHNMZW5ndGhbeF0tMV0gYW5kIHJlZHVjZSBhZ2VudHNMZW5ndGggYnkgMS5cbiAgICAvLyBXaGVuIG5ldyBhZ2VudCByZXF1aXJlZCwgZ3JhYiBpdCBmcm9tIGFnZW50c1t4XVthZ2VudHNMZW5ndGhbeF1dXG4gICAgd29ybGRPYmplY3RzOiBXb3JsZE9iamVjdERhdGFbXTsgLy8gRG9lc24ndCBpbmNsdWRlIGFnZW50cyBvciBwcm9qZWN0aWxlc1xuICAgIHdvcmxkT2JqZWN0c0xlbmd0aDogbnVtYmVyOyAvL1RvIGluZGljYXRlIHVzZWQgc2l6ZSBvZiBhcnJheSBcbiAgICAvLyBTdG9yZSBhbGl2ZSBvYmplY3RzIGF0IGJlZ2lubmluZyBvZiBhcnJheSwgcmVtYWluZGVyIGFyZSBkZWFkIG9yIG51bGwuIFxuXG4gICAgY2xvbmVGcm9tKHNvdXJjZTogRkJTY2VuYXJpb0RhdGEpXG4gICAge1xuXG4gICAgfVxuXG4gICAgY2xpZW50cygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy50ZWFtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgbG9hZChzYXZlRGF0YTogRkJTYXZlRGF0YSlcbiAgICB7XG4gICAgICAgIHRoaXMudGVhbXMgPSBzYXZlRGF0YS50ZWFtcztcbiAgICAgICAgdGhpcy5hZ2VudHMgPSBzYXZlRGF0YS5hZ2VudHM7XG4gICAgICAgIHRoaXMuYWdlbnRzTGVuZ3RoID0gc2F2ZURhdGEuYWdlbnRzLm1hcCh4ID0+IHgubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgQXJyYXkoc2F2ZURhdGEubWFwLmxlbmd0aClcbiAgICAgICAgdGhpcy5pbmZsdWVuY2UgPSBuZXcgQXJyYXkoc2F2ZURhdGEubWFwLmxlbmd0aClcbiAgICAgICAgZm9yIChsZXQgaT0wLGxlbj10aGlzLm1hcC5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm1hcFtpXSA9IG5ldyBBcnJheShzYXZlRGF0YS5tYXBbaV0ubGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMuaW5mbHVlbmNlW2ldID0gbmV3IEFycmF5KHNhdmVEYXRhLm1hcFtpXS5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wLGxlbj10aGlzLm1hcC5sZW5ndGg7ajxsZW47aisrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mbHVlbmNlW2ldW2pdID0gbmV3IEFycmF5KHNhdmVEYXRhLnRlYW1zLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbaV1bal0gPSBzYXZlRGF0YS5tYXBbaV1bal07XG4gICAgICAgICAgICAgICAgaWYgKHNhdmVEYXRhLmluZmx1ZW5jZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MCxsZW49dGhpcy5pbmZsdWVuY2VbaV1bal0ubGVuZ3RoO2s8bGVuO2srKylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mbHVlbmNlW2ldW2pdW2tdID0gc2F2ZURhdGEuaW5mbHVlbmNlW2ldW2pdW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTAsbGVuPXRoaXMuaW5mbHVlbmNlW2ldW2pdLmxlbmd0aDtrPGxlbjtrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmx1ZW5jZVtpXVtqXVtrXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53b3JsZE9iamVjdHMgPSBzYXZlRGF0YS53b3JsZE9iamVjdHM7XG4gICAgICAgIHRoaXMud29ybGRPYmplY3RzTGVuZ3RoID0gc2F2ZURhdGEud29ybGRPYmplY3RzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzYXZlKCk6IEZCU2F2ZURhdGFcbiAgICB7XG4gICAgICAgIGxldCB0ZWFtcyA9IG5ldyBBcnJheSh0aGlzLnRlYW1zLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy50ZWFtcy5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0ZWFtc1tpXSA9IHRoaXMudGVhbXNbaV07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWFwID0gbmV3IEFycmF5KHRoaXMubWFwLmxlbmd0aCk7XG4gICAgICAgIGxldCBpbmZsdWVuY2UgPSBuZXcgQXJyYXkodGhpcy5pbmZsdWVuY2UubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaT0wLGxlbj10aGlzLm1hcC5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBtYXBbaV0gPSBuZXcgQXJyYXkodGhpcy5tYXBbaV0ubGVuZ3RoKTtcbiAgICAgICAgICAgIGluZmx1ZW5jZVtpXSA9IG5ldyBBcnJheSh0aGlzLm1hcFtpXS5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wLGxlbj10aGlzLm1hcC5sZW5ndGg7ajxsZW47aisrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluZmx1ZW5jZVtpXVtqXSA9IG5ldyBBcnJheSh0aGlzLnRlYW1zLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbWFwW2ldW2pdID0gdGhpcy5tYXBbaV1bal07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaz0wLGxlbj10aGlzLmluZmx1ZW5jZVtpXVtqXS5sZW5ndGg7azxsZW47aysrKVxuICAgICAgICAgICAgICAgICAgICBpbmZsdWVuY2VbaV1bal1ba10gPSB0aGlzLmluZmx1ZW5jZVtpXVtqXVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3b3JsZE9iamVjdHMgPSBuZXcgQXJyYXkodGhpcy53b3JsZE9iamVjdHNMZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpPTA7aTx0aGlzLndvcmxkT2JqZWN0c0xlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdvcmxkT2JqZWN0c1tpXSA9IHRoaXMud29ybGRPYmplY3RzW2ldO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhZ2VudHMgPSBuZXcgQXJyYXkodGhpcy50ZWFtcy5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpPTA7aTx0aGlzLmFnZW50cy5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZ2VudHNbaV0gPSBuZXcgQXJyYXkodGhpcy5hZ2VudHNbaV0ubGVuZ3RoKVxuICAgICAgICAgICAgZm9yIChsZXQgaj0wO2o8dGhpcy5hZ2VudHNbaV0ubGVuZ3RoO2orKylcbiAgICAgICAgICAgICAgICBhZ2VudHNbaV1bal0gPSB0aGlzLmFnZW50c1tpXVtqXVxuICAgICAgICB9XG4gICAgICAgIGxldCBzYXZlOiBGQlNhdmVEYXRhID0gXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlYW1zOiB0ZWFtcyxcbiAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgaW5mbHVlbmNlOiBpbmZsdWVuY2UsXG4gICAgICAgICAgICB3b3JsZE9iamVjdHM6IHdvcmxkT2JqZWN0cyxcbiAgICAgICAgICAgIGFnZW50czogYWdlbnRzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNhdmU7XG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5hcmlvRmFjdG9yeX0gZnJvbSBcIlNjZW5hcmlvRmFjdG9yeVwiO1xuZXhwb3J0IGRlZmF1bHQgU2NlbmFyaW9GYWN0b3J5XG5leHBvcnQgeyBOb2RlU2VydmVyIH0gZnJvbSBcIi4vc2VydmVyL05vZGVTZXJ2ZXJcIjtcbmV4cG9ydCB7IEFJQ2xpZW50Q29ubmVjdGlvbiB9IGZyb20gXCIuL3NlcnZlci9jbGllbnQvQ2xpZW50Q29ubmVjdGlvblwiO1xuXG5leHBvcnQgeyBBSUNsaWVudCB9IGZyb20gXCIuL3NlcnZlci9jbGllbnQvQUlDbGllbnRcIjtcbmV4cG9ydCB7IENsaWVudENvbm5lY3Rpb24gfSBmcm9tIFwiLi9zZXJ2ZXIvY2xpZW50L0NsaWVudENvbm5lY3Rpb25cIlxuZXhwb3J0IHsgQ2xpZW50Q29udHJvbGxlciB9IGZyb20gXCIuL3NlcnZlci9jbGllbnQvQ2xpZW50Q29udHJvbGxlclwiXG5leHBvcnQgeyBMb2NhbFNlcnZlckNvbm5lY3Rpb24gfSBmcm9tIFwiLi9zZXJ2ZXIvY2xpZW50L0xvY2FsU2VydmVyQ29ubmVjdGlvblwiXG5leHBvcnQgeyBSYW5kb21BSUNsaWVudCB9IGZyb20gXCIuL3NlcnZlci9jbGllbnQvUmFuZG9tQUlDbGllbnRcIlxuXG5leHBvcnQgeyBTY2VuYXJpb0RhdGEgfSBmcm9tIFwiLi9zZXJ2ZXIvU2NlbmFyaW9EYXRhXCI7XG5leHBvcnQgeyBHYW1lTW9kZWwgfSBmcm9tIFwiLi9zZXJ2ZXIvR2FtZU1vZGVsXCI7XG5leHBvcnQgeyBDb21tYW5kIH0gZnJvbSBcIi4vc2VydmVyL0NvbW1hbmRcIjtcbmV4cG9ydCB7IENvbW1hbmRGYWN0b3J5IH0gZnJvbSBcIi4vc2VydmVyL0NvbW1hbmRGYWN0b3J5XCI7XG5cbmV4cG9ydCB7IEZQU2NlbmFyaW8gfSBmcm9tIFwiLi9GYXJtZXJQdXp6bGVcIjtcbmV4cG9ydCB7IEZCU2NlbmFyaW8gfSBmcm9tIFwiLi9mdXNlYmxhZGUvRkJTY2VuYXJpb1wiO1xuIiwiZXhwb3J0IGNsYXNzIENvbW1hbmQ8VD5cbntcbiAgICBjb21tYW5kVHlwZTogbnVtYmVyO1xuICAgIGNsaWVudElEOiBudW1iZXI7XG4gICAgdGVhbUlEOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb21tYW5kVHlwZTogbnVtYmVyLCBjbGllbnRJRDogbnVtYmVyLCB0ZWFtSUQ6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuY29tbWFuZFR5cGUgPSBjb21tYW5kVHlwZTtcbiAgICAgICAgdGhpcy5jbGllbnRJRCA9IGNsaWVudElEO1xuICAgICAgICB0aGlzLnRlYW1JRCA9IHRlYW1JRDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCIuL0NvbW1hbmRcIjtcblxuaW1wb3J0IHsgU2NlbmFyaW9EYXRhLCBUdXJuQmFzZWRTY2VuYXJpb0RhdGEgfSBmcm9tIFwic2VydmVyL1NjZW5hcmlvRGF0YVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2FtZU1vZGVsPEQgZXh0ZW5kcyBTY2VuYXJpb0RhdGE8Uz4sUywgQz5cbntcbiAgICBhYnN0cmFjdCBnb2FsVGVzdChkYXRhOiBEKTogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBzdGF0ZUFjdGlvbk1hcHBpbmcoZGF0YTogRCk6IG51bWJlcltdO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHVybkJhc2VkR2FtZU1vZGVsPEQgZXh0ZW5kcyBUdXJuQmFzZWRTY2VuYXJpb0RhdGE8Uz4sUywgQz4gZXh0ZW5kcyBHYW1lTW9kZWw8RCxTLCBDPlxue1xuICAgIGFic3RyYWN0IGFwcGx5Q29tbWFuZHMoZGF0YTogRCwgY29tbWFuZDogQ29tbWFuZDxDPiB8ICBDb21tYW5kPEM+W10pOiB2b2lkXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaW11bHRhbm91c0dhbWVNb2RlbDxEIGV4dGVuZHMgU2NlbmFyaW9EYXRhPFM+LFMsIEM+IGV4dGVuZHMgR2FtZU1vZGVsPEQsUywgQz5cbntcbiAgICBhYnN0cmFjdCBhcHBseUNvbW1hbmRzKGRhdGE6IEQsIGNvbW1hbmQ6IENvbW1hbmQ8Qz4gfCAgQ29tbWFuZDxDPltdKTogdm9pZFxufSIsImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcIi4vU2VydmVyXCI7XG5cbmV4cG9ydCBjbGFzcyBOb2RlU2VydmVyIGV4dGVuZHMgU2VydmVyXG57XG4gICAgcHJpdmF0ZSBfdGlja3M6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfbWF4VGlja3M6IG51bWJlciA9IDEwMDA7XG5cbiAgICBydW4oKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjZW5hcmlvLnJlYWR5KVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJ1biBzZXJ2ZXIgYXMgc2NlbmFyaW8gaXMgbm90IHJlYWR5XCIpO1xuICAgICAgICBpZiAoIXRoaXMuc2NlbmFyaW8uY3JlYXRlZClcbiAgICAgICAgICAgIHRoaXMuc2NlbmFyaW8uY3JlYXRlKCk7XG4gICAgICAgIHdoaWxlKCF0aGlzLnNjZW5hcmlvLmVuZGVkICYmICh0aGlzLl90aWNrcyA8IHRoaXMuX21heFRpY2tzKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zY2VuYXJpby51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuX3RpY2tzKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHNhdmVTdGF0ZSgpXG4gICAge1xuICAgICAgICBmcy53cml0ZUZpbGUoXCJkYXRhLm91dFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnNjZW5hcmlvLmdldFNhdmVEYXRhKCkpLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGlmKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7IFxuICAgIH1cblxufSIsImltcG9ydCB7IENsaWVudENvbnRyb2xsZXIgfSBmcm9tIFwic2VydmVyL2NsaWVudC9DbGllbnRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHYW1lTW9kZWwsIFNpbXVsdGFub3VzR2FtZU1vZGVsLCBUdXJuQmFzZWRHYW1lTW9kZWwgfSBmcm9tIFwiLi9HYW1lTW9kZWxcIjtcbmltcG9ydCB7IFNjZW5hcmlvRGF0YSwgVHVybkJhc2VkU2NlbmFyaW9EYXRhIH0gZnJvbSBcInNlcnZlci9TY2VuYXJpb0RhdGFcIjtcbmltcG9ydCB7IENsaWVudENvbm5lY3Rpb24sIEFJQ2xpZW50Q29ubmVjdGlvbiB9IGZyb20gXCIuL2NsaWVudC9DbGllbnRDb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBBSUNsaWVudCB9IGZyb20gXCIuL2NsaWVudC9BSUNsaWVudFwiO1xuaW1wb3J0IHsgTm9kZVNlcnZlciB9IGZyb20gXCIuL05vZGVTZXJ2ZXJcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjZW5hcmlvPEcgZXh0ZW5kcyBHYW1lTW9kZWw8RCxTLEM+LCBEIGV4dGVuZHMgU2NlbmFyaW9EYXRhPFM+LCBTLCBDPlxue1xuICAgIHByaXZhdGUgX2dhbWVNb2RlbDogRztcbiAgICBwcml2YXRlIF9kYXRhOiBEO1xuICAgIHByaXZhdGUgX2NsaWVudHM6IENsaWVudENvbnRyb2xsZXI8RCxTLEM+XG5cbiAgICBwcm90ZWN0ZWQgX2VuZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBkYXRhIFxuICAgICAqIEBwYXJhbSBnYW1lTW9kZWwgXG4gICAgICogQHBhcmFtIGNsaWVudHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihnYW1lTW9kZWw6IEcsIGRhdGE6IEQsIGNsaWVudHM6IENsaWVudENvbnRyb2xsZXI8RCxTLEM+KVxuICAgIHtcbiAgICAgICAgdGhpcy5fZ2FtZU1vZGVsID0gZ2FtZU1vZGVsO1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fY2xpZW50cyA9IGNsaWVudHM7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCkgeyByZXR1cm4gdGhpcy5fZW5kZWQ7IH1cbiAgICBnZXQgcmVhZHkoKSB7IHJldHVybiB0aGlzLl9jbGllbnRzLnJlbWFpbmluZ1Nsb3RzID09PSAwOyB9XG4gICAgZ2V0IGNyZWF0ZWQoKSB7IHJldHVybiB0aGlzLl9jcmVhdGVkOyB9XG4gICAgcHJvdGVjdGVkIGdldCBjbGllbnRzKCkgeyByZXR1cm4gdGhpcy5fY2xpZW50czsgfVxuICAgIHByb3RlY3RlZCBnZXQgZ2FtZU1vZGVsKCkgeyByZXR1cm4gdGhpcy5fZ2FtZU1vZGVsOyB9XG4gICAgcHJvdGVjdGVkIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5fZGF0YTsgfVxuXG4gICAgYWJzdHJhY3QgdXBkYXRlKCk6IHZvaWRcblxuICAgIGNyZWF0ZSgpXG4gICAge1xuICAgICAgICB0aGlzLmNsaWVudHMuY3JlYXRlU2NlbmFyaW8odGhpcy5fZGF0YSwgdGhpcy5fZ2FtZU1vZGVsKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbG9hZChzYXZlOiBTKVxuICAgIHtcbiAgICAgICAgdGhpcy5fZGF0YS5sb2FkKHNhdmUpO1xuICAgIH1cblxuICAgIGdldFNhdmVEYXRhKCk6IFNcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNhdmUoKVxuICAgIH1cblxuICAgIGFkZENsaWVudChjbGllbnQ6IENsaWVudENvbm5lY3Rpb248RCxTLEM+KTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudHMuYWRkQ2xpZW50KGNsaWVudCk7XG4gICAgfVxuXG4gICAgYWRkQUlUZWFtKGFpOiBBSUNsaWVudDxELFMsQz4pXG4gICAge1xuICAgICAgICB0aGlzLl9jbGllbnRzLmFkZENsaWVudChuZXcgQUlDbGllbnRDb25uZWN0aW9uKHRoaXMuX2NsaWVudHMubmV4dENsaWVudCx0aGlzLl9jbGllbnRzLm5leHRUZWFtLGFpKSk7XG4gICAgfVxuXG4gICAgcnVuSGVhZGxlc3MoKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgbGV0IG5vZGVTZXJ2ZXIgPSBuZXcgTm9kZVNlcnZlcigpO1xuICAgICAgICBub2RlU2VydmVyLmxvYWRTY2VuYXJpbyh0aGlzKTtcbiAgICAgICAgaWYgKG5vZGVTZXJ2ZXIucnVuKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vZGVTZXJ2ZXIuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHVybkJhc2VkU2NlbmFyaW88RyBleHRlbmRzIFR1cm5CYXNlZEdhbWVNb2RlbDxELFMsQz4sIEQgZXh0ZW5kcyBUdXJuQmFzZWRTY2VuYXJpb0RhdGE8Uz4sIFMsIEM+IGV4dGVuZHMgU2NlbmFyaW88RywgRCwgUywgQz5cbntcbiAgICB1cGRhdGUoKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuZGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5hcHBseUNvbW1hbmRzKHRoaXMuZGF0YSwgdGhpcy5jbGllbnRzLmdldENvbW1hbmRzT2ZDbGllbnQodGhpcy5kYXRhLmdldEN1cnJlbnRQbGF5ZXIoKSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmdvYWxUZXN0KHRoaXMuZGF0YSkpXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kYXRhLm1vdmVUb05leHRQbGF5ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50cy5zZW5kRGF0YVVwZGF0ZSh0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2ltdWx0YW5vdXNTY2VuYXJpbzxHIGV4dGVuZHMgU2ltdWx0YW5vdXNHYW1lTW9kZWw8RCxTLEM+LCBEIGV4dGVuZHMgU2NlbmFyaW9EYXRhPFM+LCBTLCBDPiBleHRlbmRzIFNjZW5hcmlvPEcsIEQsIFMsIEM+XG57XG4gICAgdXBkYXRlKClcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5lbmRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGNvbW1hbmRzID0gdGhpcy5jbGllbnRzLmdldENvbW1hbmRzKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5hcHBseUNvbW1hbmRzKHRoaXMuZGF0YSwgY29tbWFuZHMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmdvYWxUZXN0KHRoaXMuZGF0YSkpXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jbGllbnRzLnNlbmREYXRhVXBkYXRlKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gXCIuL1NjZW5hcmlvXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZXJ2ZXJcbntcbiAgICBwcm90ZWN0ZWQgc2NlbmFyaW86IFNjZW5hcmlvPGFueSwgYW55LCBhbnksIGFueT47XG5cbiAgICBsb2FkU2NlbmFyaW8oc2NlbmFyaW86IFNjZW5hcmlvPGFueSwgYW55LCBhbnksIGFueT4pXG4gICAge1xuICAgICAgICB0aGlzLnNjZW5hcmlvID0gc2NlbmFyaW87XG4gICAgICAgIGlmICh0aGlzLnNjZW5hcmlvLnJlYWR5KVxuICAgICAgICAgICAgdGhpcy5zY2VuYXJpby5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBydW4oKTogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi4vQ29tbWFuZFwiO1xuaW1wb3J0IHsgQUlDbGllbnQgfSBmcm9tIFwiLi9BSUNsaWVudFwiO1xuaW1wb3J0IHsgU2NlbmFyaW9EYXRhIH0gZnJvbSBcInNlcnZlci9TY2VuYXJpb0RhdGFcIjtcbmltcG9ydCB7IENvbW1hbmRGYWN0b3J5IH0gZnJvbSBcInNlcnZlci9Db21tYW5kRmFjdG9yeVwiO1xuaW1wb3J0IHsgR2FtZU1vZGVsIH0gZnJvbSBcInNlcnZlci9HYW1lTW9kZWxcIjtcbmltcG9ydCB7IExvY2FsU2VydmVyQ29ubmVjdGlvbiB9IGZyb20gXCJMb2NhbFNlcnZlckNvbm5lY3Rpb25cIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENsaWVudENvbm5lY3Rpb248RCBleHRlbmRzIFNjZW5hcmlvRGF0YTxTPiwgUywgQz5cbntcbiAgICBwdWJsaWMgcmVhZG9ubHkgY2xpZW50SUQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGVhbUlEOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaXNPYnNlcnZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgYWJzdHJhY3Qgc2VuZERhdGFVcGRhdGUoZGF0YTogRCk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgZ3JhYkNvbW1hbmRzKGNvbW1hbmRGYWN0b3J5OiBDb21tYW5kRmFjdG9yeTxDPik6IENvbW1hbmQ8Qz5bXSB8IENvbW1hbmQ8Qz5cbiAgICBhYnN0cmFjdCBjcmVhdGVTY2VuYXJpbyhkYXRhOiBELCBnYW1lTW9kZWw6IEdhbWVNb2RlbDxELFMsQz4pOiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50SUQ6IG51bWJlciwgdGVhbUlEOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmNsaWVudElEID0gY2xpZW50SUQ7XG4gICAgICAgIHRoaXMudGVhbUlEID0gdGVhbUlEO1xuICAgIH1cbiAgICBcbiAgICBnZXQgaXNPYnNlcnZlcigpIHsgcmV0dXJuIHRoaXMuX2lzT2JzZXJ2ZXI7IH1cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsQ2xpZW50Q29ubmVjdGlvbjxEIGV4dGVuZHMgU2NlbmFyaW9EYXRhPFM+LCBTLCBDPiBleHRlbmRzIENsaWVudENvbm5lY3Rpb248RCwgUywgQz5cbntcbiAgICBwcml2YXRlIF9sb2NhbDogTG9jYWxTZXJ2ZXJDb25uZWN0aW9uO1xuICAgIHByb3RlY3RlZCBfY29tbWFuZHNCdWZmZXI6IENvbW1hbmQ8Qz5bXTtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElEOiBudW1iZXIsIHRlYW1JRDogbnVtYmVyLCBjbGllbnQ6IExvY2FsU2VydmVyQ29ubmVjdGlvbilcbiAgICB7XG4gICAgICAgIHN1cGVyKGNsaWVudElELCB0ZWFtSUQpO1xuICAgICAgICB0aGlzLl9sb2NhbCA9IGNsaWVudDtcbiAgICB9XG5cbiAgICBjcmVhdGVTY2VuYXJpbyhkYXRhOiBELCBnYW1lTW9kZWw6IEdhbWVNb2RlbDxELFMsQz4pOiB2b2lkIHt9XG5cbiAgICBzZW5kRGF0YVVwZGF0ZShkYXRhOiBEKTogdm9pZCAge31cblxuICAgIGdyYWJDb21tYW5kcyhjb21tYW5kRmFjdG9yeTogQ29tbWFuZEZhY3Rvcnk8Qz4pOiBDb21tYW5kPEM+IHwgQ29tbWFuZDxDPltdXG4gICAge1xuICAgICAgICBsZXQgYSA9IHRoaXMuX2NvbW1hbmRzQnVmZmVyO1xuICAgICAgICB0aGlzLl9jb21tYW5kc0J1ZmZlciA9IFtdO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICByZWNpZXZlQ29tbWFuZChjb21tYW5kOiBDb21tYW5kPEM+KVxuICAgIHtcbiAgICAgICAgdGhpcy5fY29tbWFuZHNCdWZmZXIucHVzaChjb21tYW5kKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBSUNsaWVudENvbm5lY3Rpb248RCBleHRlbmRzIFNjZW5hcmlvRGF0YTxTPiwgUywgQz4gZXh0ZW5kcyBDbGllbnRDb25uZWN0aW9uPEQsIFMsIEM+XG57XG4gICAgcHJpdmF0ZSBfYWk6IEFJQ2xpZW50PEQsIFMsIEM+O1xuICAgIHByaXZhdGUgX2RhdGE6IEQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnRJRDogbnVtYmVyLCB0ZWFtSUQ6IG51bWJlciwgY2xpZW50OiBBSUNsaWVudDxELCBTLCBDPilcbiAgICB7XG4gICAgICAgIHN1cGVyKGNsaWVudElELCB0ZWFtSUQpXG4gICAgICAgIHRoaXMuX2FpID0gY2xpZW50O1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5hcmlvKGRhdGE6IEQsIGdhbWVNb2RlbDogR2FtZU1vZGVsPEQsUyxDPik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9haS5jcmVhdGUodGhpcy5jbGllbnRJRCwgdGhpcy50ZWFtSUQsIGdhbWVNb2RlbClcbiAgICB9XG5cbiAgICBzZW5kRGF0YVVwZGF0ZShkYXRhOiBEKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgZ3JhYkNvbW1hbmRzKGNvbW1hbmRGYWN0b3J5OiBDb21tYW5kRmFjdG9yeTxDPik6IENvbW1hbmQ8Qz4gfCBDb21tYW5kPEM+W11cbiAgICB7XG4gICAgICAgIGNvbW1hbmRGYWN0b3J5LnNldENsaWVudCh0aGlzLmNsaWVudElEKTtcbiAgICAgICAgY29tbWFuZEZhY3Rvcnkuc2V0VGVhbSh0aGlzLnRlYW1JRCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9haS51cGRhdGUodGhpcy5fZGF0YSwgY29tbWFuZEZhY3RvcnkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDbGllbnRDb25uZWN0aW9uIH0gZnJvbSBcIi4vQ2xpZW50Q29ubmVjdGlvblwiO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCIuLi9Db21tYW5kXCI7XG5pbXBvcnQgeyBTY2VuYXJpb0RhdGEgfSBmcm9tIFwic2VydmVyL1NjZW5hcmlvRGF0YVwiO1xuaW1wb3J0IHsgR2FtZU1vZGVsIH0gZnJvbSBcInNlcnZlci9HYW1lTW9kZWxcIjtcbmltcG9ydCB7IENvbW1hbmRGYWN0b3J5IH0gZnJvbSBcInNlcnZlci9Db21tYW5kRmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgQ2xpZW50Q29udHJvbGxlcjxEIGV4dGVuZHMgU2NlbmFyaW9EYXRhPFM+LFMsQz5cbntcbiAgICBwcml2YXRlIF9jbGllbnRzOiBDbGllbnRDb25uZWN0aW9uPEQsUyxDPltdID0gW107XG4gICAgcHJpdmF0ZSBfY2xpZW50c0NvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29tbWFuZEZhY3Rvcnk6IENvbW1hbmRGYWN0b3J5PEM+O1xuXG4gICAgY29uc3RydWN0b3IobWF4Q2xpZW50czogbnVtYmVyLCBjb21tYW5kRmFjdG9yeTogQ29tbWFuZEZhY3Rvcnk8Qz4pXG4gICAge1xuICAgICAgICB0aGlzLl9jbGllbnRzID0gbmV3IEFycmF5KG1heENsaWVudHMpO1xuICAgICAgICB0aGlzLmNvbW1hbmRGYWN0b3J5ID0gY29tbWFuZEZhY3Rvcnk7XG4gICAgfVxuXG4gICAgZ2V0IGNsaWVudHNDb3VudCgpIHsgcmV0dXJuIHRoaXMuX2NsaWVudHNDb3VudDsgfVxuICAgIGdldCBtYXhDbGllbnRzKCkgeyByZXR1cm4gdGhpcy5fY2xpZW50cy5sZW5ndGg7IH1cbiAgICBnZXQgcmVtYWluaW5nU2xvdHMoKSB7IHJldHVybiB0aGlzLl9jbGllbnRzLmxlbmd0aCAtIHRoaXMuX2NsaWVudHNDb3VudDsgfVxuICAgIGdldCBuZXh0Q2xpZW50KCk6IG51bWJlciB7XG4gICAgICAgIGxldCBuZXh0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8dGhpcy5fY2xpZW50cy5sZW5ndGg7aSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMuX2NsaWVudHNbaV0pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NsaWVudHNbaV0uY2xpZW50SUQgPT09IG5leHQpXG4gICAgICAgICAgICAgICAgICAgIG5leHQrK1xuICAgICAgICByZXR1cm4gbmV4dDtcbiAgICB9XG4gICAgZ2V0IG5leHRUZWFtKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBuZXh0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8dGhpcy5fY2xpZW50cy5sZW5ndGg7aSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMuX2NsaWVudHNbaV0pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NsaWVudHNbaV0udGVhbUlEID09PSBuZXh0KVxuICAgICAgICAgICAgICAgICAgICBuZXh0KytcbiAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfVxuXG4gICAgYWRkQ2xpZW50KGNsaWVudDogQ2xpZW50Q29ubmVjdGlvbjxELCBTLCBDPik6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGZvciAobGV0IGk9MDtpPHRoaXMuX2NsaWVudHNDb3VudDtpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5fY2xpZW50c1tpXS5jbGllbnRJRCA9PT0gY2xpZW50LmNsaWVudElEKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2NsaWVudHNDb3VudCA9PT0gdGhpcy5fY2xpZW50cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NsaWVudHNbdGhpcy5fY2xpZW50c0NvdW50XSA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5fY2xpZW50c0NvdW50Kys7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5hcmlvKGRhdGE6IEQsIGdhbWVNb2RlbDogR2FtZU1vZGVsPEQsUyxDPik6IHZvaWRcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fY2xpZW50c0NvdW50O2k8bGVuO2krKylcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudHNbaV0uY3JlYXRlU2NlbmFyaW8oZGF0YSwgZ2FtZU1vZGVsKTtcbiAgICB9XG5cbiAgICBzZW5kRGF0YVVwZGF0ZShkYXRhOiBELCBjbGllbnRUb0FjdD86IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fY2xpZW50c0NvdW50O2k8bGVuO2krKylcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudHNbaV0uc2VuZERhdGFVcGRhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0Q29tbWFuZHMoKTogQ29tbWFuZDxDPltdXG4gICAge1xuICAgICAgICBsZXQgY29tbWFuZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wLGxlbj10aGlzLl9jbGllbnRzQ291bnQ7aTxsZW47aSsrKSAvL1RPRE86IG1pZ2h0IHdhbnQgdG8gcmFuZG9taXNlIG9yZGVyIGluIGNhc2UgdGhpcyBsZWFkcyB0byBiaWFzXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2xpZW50c1tpXS5pc09ic2VydmVyKVxuICAgICAgICAgICAgICAgIGNvbW1hbmRzID0gY29tbWFuZHMuY29uY2F0KHRoaXMuX2NsaWVudHNbaV0uZ3JhYkNvbW1hbmRzKHRoaXMuY29tbWFuZEZhY3RvcnkpKTsvL1RPRE86IHByb2JhYmx5IG5vdCB3aGF0IEkgd2FudCB3aXRoIGNvbW1hbmQgYW5kIGNvbW1hbmRbXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21tYW5kcztcbiAgICB9XG5cbiAgICBnZXRDb21tYW5kc09mQ2xpZW50KGNsaWVudEluZGV4OiBudW1iZXIpOiBDb21tYW5kPEM+IHwgQ29tbWFuZDxDPltdXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMuX2NsaWVudHNbY2xpZW50SW5kZXhdLmlzT2JzZXJ2ZXIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50c1tjbGllbnRJbmRleF0uZ3JhYkNvbW1hbmRzKHRoaXMuY29tbWFuZEZhY3RvcnkpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBMb2NhbFNlcnZlckNvbm5lY3Rpb25cbntcbiAgICBcbn0iLCJpbXBvcnQgeyBBSUNsaWVudCB9IGZyb20gXCIuL0FJQ2xpZW50XCI7XG5pbXBvcnQgeyBTY2VuYXJpb0RhdGEgfSBmcm9tIFwic2VydmVyL1NjZW5hcmlvRGF0YVwiO1xuaW1wb3J0IHsgR2FtZU1vZGVsIH0gZnJvbSBcInNlcnZlci9HYW1lTW9kZWxcIjtcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi4vQ29tbWFuZFwiO1xuaW1wb3J0IHsgQ29tbWFuZEZhY3RvcnkgfSBmcm9tIFwic2VydmVyL0NvbW1hbmRGYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBSYW5kb21BSUNsaWVudDxEIGV4dGVuZHMgU2NlbmFyaW9EYXRhPFM+LCBTLCBDPiBpbXBsZW1lbnRzIEFJQ2xpZW50PEQsUyxDPlxue1xuICAgIHByaXZhdGUgX2dhbWVNb2RlbDogR2FtZU1vZGVsPEQsIFMsIEM+O1xuXG4gICAgY3JlYXRlKGNsaWVudElEOiBudW1iZXIsIHRlYW1JRDogbnVtYmVyLCBnYW1lTW9kZWw6IEdhbWVNb2RlbDxELFMsQz4pOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLl9nYW1lTW9kZWwgPSBnYW1lTW9kZWw7XG4gICAgfVxuXG4gICAgdXBkYXRlPEM+KGRhdGE6IEQsIGNvbW1hbmRGYWN0b3J5OiBDb21tYW5kRmFjdG9yeTxDPik6IENvbW1hbmQ8Qz5bXSB8IENvbW1hbmQ8Qz5cbiAgICB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5fZ2FtZU1vZGVsLnN0YXRlQWN0aW9uTWFwcGluZyhkYXRhKTtcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbGlzdC5sZW5ndGgtMSlcbiAgICAgICAgICAgIHJldHVybiBjb21tYW5kRmFjdG9yeS5nZXRDb21tYW5kKGxpc3RbaWRdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzY2VuYXJpb0VuZGVkKGRhdGE6IEQpOiB2b2lkXG4gICAge1xuXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=