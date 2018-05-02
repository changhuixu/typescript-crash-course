import { App } from './app/app';
import { DrivingAssignmentsService } from './app/services/driving-assignments.service';

const separator = '='.repeat(80);
console.log(`\x1b[32m${separator}\x1b[0m\n`);

const svc = new DrivingAssignmentsService();
new App(svc).run();

console.log(`\x1b[32m${separator}\x1b[0m`);
