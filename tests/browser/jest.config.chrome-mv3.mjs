// @ts-check

import {dirname} from 'node:path';
import {createRequire} from 'node:module';
const rootDir = dirname(createRequire(import.meta.url).resolve('../../package.json'));

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    rootDir,
    testMatch: ['<rootDir>/tests/browser/**/*.tests.ts'],
    testEnvironment: '<rootDir>/tests/browser/environment.js',
    verbose: true,
    transform: {'^.+\\.ts(x?)$': ['ts-jest', {tsconfig: '<rootDir>/tests/browser/tsconfig.json'}]},
    globals: {
        __DEBUG__: true,
        __CHROMIUM_MV3__: true,
        __TEST__: true,
        product: 'chrome',
    },
    setupFilesAfterEnv: ['jest-extended/all'],
    collectCoverage: false,
};

export default config;
