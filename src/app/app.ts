import { DrivingAssignment } from './models/driving-assignment';
import { Demographic } from './models/demographic.enum';
import { DrivingAuthorizationStatus } from './models/driving-authorization-status.enum';
import { DrivingAssignmentsService } from './services/driving-assignments.service';
import { BadgeStatistics } from './models/badge-statistics';
import { MFK } from './models/mfk';

export class App {
  readonly assignments: DrivingAssignment[];

  constructor(private readonly daService: DrivingAssignmentsService) {
    this.assignments = this.daService.getDrivingAssignments();
  }

  run(): void {
    const mfk1 = new MFK('050', '03', '0100');
    //let mfk2 = mfk1;
    let mfk2 = new MFK('', '', '');
    Object.assign(mfk2, mfk1);

    console.log(`${JSON.stringify(mfk1)}\t${JSON.stringify(mfk2)}`);
    mfk1.fund = '010';
    console.log(`${JSON.stringify(mfk1)}\t${JSON.stringify(mfk2)}`);
    mfk2.fund = '150';
    console.log(`${JSON.stringify(mfk1)}\t${JSON.stringify(mfk2)}`);

    const a = [1, 2, 3];
    //let b = a;    // shallow
    let b: number[] = [];
    // Object.assign(b, a); // deep
    //b = [...a];
    b = Object.assign([], a); // deep

    console.log(`${a}\t${b}`);
    a[0] = 0;
    console.log(`${a}\t${b}`);
    b[0] = 6;
    console.log(`${a}\t${b}`);
  }
}
