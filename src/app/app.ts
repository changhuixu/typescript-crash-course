import { DrivingAssignment } from './models/driving-assignment';
import { Demographic } from './models/demographic.enum';
import { DrivingAuthorizationStatus } from './models/driving-authorization-status.enum';
import { DrivingAssignmentsService } from './services/driving-assignments.service';
import { BadgeStatistics } from './models/badge-statistics';

export class App {
  readonly assignments: DrivingAssignment[];

  constructor(private readonly daService: DrivingAssignmentsService) {
    this.assignments = this.daService.getDrivingAssignments();
  }

  run(): void {
    console.log(this.assignments);
  }
}
