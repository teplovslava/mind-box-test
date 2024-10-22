export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(svg|jpg|png)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
