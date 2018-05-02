import { DrivingAssignment } from '../models/driving-assignment';

export class DrivingAssignmentsService {
  private apiResponse = <DrivingAssignment[]>[
    <DrivingAssignment>{
      id: 1,
      driverId: 1,
      driverName: 'Driver 1',
      hawkId: 'driver1',
      orgDept: '05-0333',
      demographic: 1,
      isRequiredToDrive: true,
      createdBy: 'changhxu',
      createdAt: new Date(2018, 5, 1, 10, 0, 0),
      status: 1
    },
    <DrivingAssignment>{
        id: 2,
        driverId: 2,
        driverName: 'Driver 2',
        hawkId: 'driver2',
        orgDept: '05-0333',
        demographic: 1,
        isRequiredToDrive: true,
        createdBy: 'changhxu',
        createdAt: new Date(2018, 5, 1, 10, 0, 0),
        status: 1
      },
      <DrivingAssignment>{
        id: 3,
        driverId: 3,
        driverName: 'Driver 3',
        hawkId: 'driver3',
        orgDept: '05-0333',
        demographic: 3,
        isRequiredToDrive: true,
        createdBy: 'changhxu',
        createdAt: new Date(2018, 5, 1, 10, 0, 0),
        status: 2
      },
      <DrivingAssignment>{
        id: 4,
        driverId: 4,
        driverName: 'Driver 4',
        hawkId: 'driver4',
        orgDept: '05-0333',
        demographic: 1,
        isRequiredToDrive: false,
        createdBy: 'changhxu',
        createdAt: new Date(2018, 5, 1, 10, 0, 0),
        status: 4
      },
      <DrivingAssignment>{
        id: 5,
        driverId: 5,
        driverName: 'Driver 5',
        hawkId: 'driver5',
        orgDept: '05-0333',
        demographic: 5,
        isRequiredToDrive: true,
        createdBy: 'changhxu',
        createdAt: new Date(2018, 5, 1, 10, 0, 0),
        status: 1
      },
      <DrivingAssignment>{
        id: 6,
        driverId: 6,
        driverName: 'Driver 6',
        hawkId: 'driver6',
        orgDept: '05-0333',
        demographic: 2,
        isRequiredToDrive: true,
        createdBy: 'changhxu',
        createdAt: new Date(2018, 5, 1, 10, 0, 0),
        status: 3
      },
      <DrivingAssignment>{
        id: 7,
        driverId: 6,
        driverName: 'Driver 6',
        hawkId: 'driver6',
        orgDept: '05-0333',
        demographic: 2,
        isRequiredToDrive: false,
        createdBy: 'changhxu',
        createdAt: new Date(2018, 5, 1, 10, 0, 0),
        status: 1
      }
  ];

  getDrivingAssignments(): DrivingAssignment[] {
    return this.apiResponse;
  }
}
