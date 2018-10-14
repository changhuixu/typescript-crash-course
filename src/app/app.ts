import { DrivingAssignment } from './models/driving-assignment';
import { Demographic } from './models/demographic.enum';
import { DrivingAuthorizationStatus } from './models/driving-authorization-status.enum';
import { DrivingAssignmentsService } from './services/driving-assignments.service';
import { BadgeStatistics } from './models/badge-statistics';
import { MfkFieldOption } from './models/mfk-field-option';

export class App {
  run(): void {
    const defaultOptions = [
      new MfkFieldOption('1', 1),
      new MfkFieldOption('2', 2),
      new MfkFieldOption('3', 3),
      new MfkFieldOption('4', 4),
      new MfkFieldOption('5', 5),
      new MfkFieldOption('6', 6)
    ];
    let newOption: MfkFieldOption[] = [new MfkFieldOption('7', 2), new MfkFieldOption('1', 3)];
    let result = Object.assign([], defaultOptions, newOption);
    console.log(result);
  }
}
