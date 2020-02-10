# Fuseblade Template

This is a project template for the AI for Games module at York St. John. It provides an 2D game environment for developing and testing AIs.

This repository includes the Fuseblade game library as a submodule. This submodule contains:

1. The pre-compiled game library, containing the game logic
2. A HTML5 game front-end
3. Type definitions for the core game library
4. An example scenario save file

In other words, everything needed for the game except for the AI.

## Set up

Clone this repository using the `--recurse-submodules` option to automatically pull the game library. Otherwise, run `git submodule init` followed by `git submodule update`.

Install project dependancies using `npm install`.

Build with `npm run build`. Run tests (if you create any) with `npm run test`.

To start a webserver to play the game, enter the `dist` directory and run `python ../util/server.py` Then navigate to `localhost:8080`. You can also pass a port number as an argument. Defaults to 8080.

If you are using Visual Studio Code, you may wish to install the following extensions via the Extensions tab (Ctrl+Shift+X):
* Debugger for Chrome
* Debugger for Firefox

Debug configurations for VS Code are listed in `.vscode/launch.json`. Uncomment the one you wish to use. At present the game runs significantly faster in Chrome.

## Getting Started

In the `src` directory, you will see two entry points: `node.ts` and `web.ts`. These are used for running headless and on the web, respectively. As you can see, these create a scenario and add AIs to it. The headless version then runs the scenario. The web version exposes it to the front-end.

To run with a player (using the web version), ensure there is one fewer AI assigned than there are teams specified in the save file. If running headless, ensure all the AI slots are filled (you can't have players).

There are a few classes to give you an idea of how it works. You'll probably want to throw these out and write something new.

For some reason it won't import the FBActions enum from the library. I've duplicated it. If the version of FBActions in the library changes, you'll need to update this (unless I manage to figure out what the problem is).
