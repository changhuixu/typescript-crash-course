import { DrivingAssignment } from './models/driving-assignment';
import { Demographic } from './models/demographic.enum';
import { DrivingAuthorizationStatus } from './models/driving-authorization-status.enum';

export class App {
  run(): void {
    let assignment1 = <DrivingAssignment>{
      driverName: 'Driver 1',
      hawkId: 'driver1',
      orgDept: '05-0333',
      demographic: 1,
      createdBy: 'changhxu',
      createdAt: new Date(2018, 5, 1, 10, 0, 0),
      status: 1
    };
    console.log(assignment1);

    let assignment2 = new DrivingAssignment(
      'Driver 2',
      'driver2',
      '05-0333',
      Demographic.CurrentEmployee,
      'changhxu',
      new Date(),
      DrivingAuthorizationStatus.Authorized
    );
    console.log(assignment2);
  }
}
