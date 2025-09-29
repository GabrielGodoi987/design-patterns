import type { Config } from "jest";

const config: Config = {
  bail: 3,
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["ts"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  rootDir: "./test",
  testEnvironment: "node",
  testMatch: ["**/test/**/*.(spec|test).ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
};

export default config;
