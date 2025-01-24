const path = require('path');

module.exports = {
    transform: {
        "^.+\\.[jt]sx?$": `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",  // Map @ to src folder
        "\\.(css|scss)$": `identity-obj-proxy`,  // Mock CSS imports
    },
    testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
