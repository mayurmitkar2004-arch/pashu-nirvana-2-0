# Pashu Nirvana 2.0

A browser-based research prototype for C001 livestock monitoring. This folder is ready to open in Visual Studio Code and has no npm dependencies.

## Open in VS Code

Open `Pashu-Nirvana-WebApp.code-workspace` or open the `Pashu-Nirvana-WebApp` folder in VS Code.

## Run locally

Requirements: Node.js 18 or newer.

```sh
npm start
```

Then open [http://localhost:4173](http://localhost:4173). Stop the local server with `Ctrl+C` in the terminal.

In VS Code, you can also press `F5` and choose **Run Pashu Nirvana server**.

You can also run `node server.mjs` directly. No `npm install` step is needed.

## Demo sign-in

- Email: `farmer@pashu.in`
- Password: `Pashu@2026`

This is a demo-only front-end sign-in. It is not production authentication. Preferences, profile details, and simulated readings are saved in the current browser's local storage.

## Project structure

```text
Pashu-Nirvana-WebApp/
├── .vscode/
│   └── launch.json   # Press F5 to start the local server
├── src/
│   ├── app.js       # App state, views, simulation, exports, and interactions
│   └── styles.css   # Responsive application styles
├── index.html       # App shell
├── package.json     # Local run scripts; no dependencies
├── Pashu-Nirvana-WebApp.code-workspace
├── server.mjs       # Small local static-file server
└── README.md
```

## Prototype data and safety

Sensor history and GPS are simulated. Risk is an early-warning signal, not a diagnosis. Collar-site temperature is not represented as core temperature. The chatbot does not prescribe medications or create personalized ration plans.
