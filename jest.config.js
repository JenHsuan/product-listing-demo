const path = require("path");
module.exports = {
    testTimeout: 30000,
    bail: 5,
    "moduleDirectories": [
        "node_modules"
    ],
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
    setupFiles: ["./tests/setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|mjs)$": "./tests/jest-transformer.js",
        "^.+\\.(css|scss|png|jpg|jpeg|svg)$": "jest-transform-stub"
    },
    verbose: true,
    collectCoverage: true
}
