import { DrivingAssignment } from './models/driving-assignment';
import { Demographic } from './models/demographic.enum';
import { DrivingAuthorizationStatus } from './models/driving-authorization-status.enum';
import { DrivingAssignmentsService } from './services/driving-assignments.service';
import { BadgeStatistics } from './models/badge-statistics';

export class App {
  private readonly drivingAssignmentService = new DrivingAssignmentsService();

  run(): void {
    let assignments = this.drivingAssignmentService.getDrivingAssignments();
    //console.log(assignments);

    // foreach ===> LINQ.ForEach
    //assignments.forEach(x => console.log(x.hawkId));
    // find ===> LINQ.FirstOrDefault
    console.log(assignments.find(x => x.orgDept === '05-0333'));
    console.log(assignments.find((_, i) => i === 1));
    // every ==> LINQ.All
    console.log(
      assignments.every(x => x.status === DrivingAuthorizationStatus.Authorized)
    );
    // some ===> LINQ.Any
    console.log(
      assignments.some(x => x.status === DrivingAuthorizationStatus.Authorized)
    );
    // fileter ===> LINQ.Where
    let requiredAssignments = assignments.filter(x => x.isRequiredToDrive);
    let notRequiredAssignments = assignments.filter(x => !x.isRequiredToDrive);
    console.log(requiredAssignments.length);
    console.log(notRequiredAssignments.length);
    // map ===> LINQ.Select
    console.log(requiredAssignments.map(x => x.status));

    // reduce
    let badge1 = requiredAssignments.reduce(this.drivingAssignmentService.reducer, BadgeStatistics.Default());
    let badge2 = notRequiredAssignments.reduce(this.drivingAssignmentService.reducer, BadgeStatistics.Default());
    console.log(badge1);
    console.log(badge2);
  }
}
