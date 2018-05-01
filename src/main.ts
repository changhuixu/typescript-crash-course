import { App } from "./app/app";

const separator = '='.repeat(80);
console.log(`\x1b[32m${separator}\x1b[0m\n`);

new App().run();

console.log(`\x1b[32m${separator}\x1b[0m`);
