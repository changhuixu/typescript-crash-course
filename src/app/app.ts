import { DrivingAssignment } from './models/driving-assignment';
import { Demographic } from './models/demographic.enum';
import { DrivingAuthorizationStatus } from './models/driving-authorization-status.enum';
import { DrivingAssignmentsService } from './services/driving-assignments.service';
import { BadgeStatistics } from './models/badge-statistics';
import { MFK } from './models/mfk';

export class App {
  readonly assignments: DrivingAssignment[] = [];

  constructor(private readonly daService: DrivingAssignmentsService) {
    this.daService.getDrivingAssignments();
    this.assignments = this.daService.assignments; // shallow
    //Object.assign(this.assignments, this.daService.assignments); //deep
    //this.assignments = [...this.daService.assignments]; // deep
    //this.assignments = Object.assign([], this.daService.assignments); // deep
  }

  run(): void {
    console.log(`local: ${this.assignments[6].status} origin: ${this.daService.assignments[6].status}`);
    this.assignments[6].status = DrivingAuthorizationStatus.NotAuthorized;
    console.log(`local: ${this.assignments[6].status} origin: ${this.daService.assignments[6].status}`);

    this.daService.updateStatus(7, 4);
    console.log(`local: ${this.assignments[6].status} origin: ${this.daService.assignments[6].status}`);

    this.assignments.push(new DrivingAssignment(8, 9, 'ch', 'ds', 'as', 3, true,'c', new Date(), 1));
    console.log(this.assignments.length);
    console.log(this.daService.assignments.length);
  }
}
